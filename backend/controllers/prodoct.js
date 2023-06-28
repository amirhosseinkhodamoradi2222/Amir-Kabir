const Post=require('../model/prodoct');
const sharp = require("sharp");
const shortId = require("shortid");
const appRoot = require("app-root-path");
const fs=require("fs");


exports.prodectAdd=async (req,res,next)=>{
  const thumbnail = req.files ? req.files.thumbnail : {};
  const fileName = `${shortId.generate()}_${thumbnail.name}`;
  const uploadPath = `${appRoot}/public/uploads/prodec/thumbnails/${fileName}`;
   
  const fileNameimage = [];
  const image = req.files ? req.files.image : {};
  
  if(image)
      for(let i=0 ; i<image.length ; i++){
      fileNameimage.push(`${shortId.generate()}_${image[i].name}`); 
    }
  const uploadPathimage = `${appRoot}/public/uploads/prodec/image/${fileNameimage}`;

    
  try {
    
    req.body = { ...req.body, thumbnail,image };
      
    await Post.proValidation(req.body);
 
    await sharp(thumbnail.data)
    .jpeg({ quality: 80 })
    .toFile(uploadPath)
    .catch((err) =>  {
      const error = new Error(
      " مشکل در آپلود عکس اصلی"
  );
  error.statusCode = 422;
  throw error; });

   if(image){
    if(image.name){
  await sharp(image.data)
  .jpeg({ quality: 80 })
  .toFile(uploadPathimage)
  .catch((err) =>  {
    const error = new Error(
    "مشکل در آپلود عکس"
);
error.statusCode = 422;
throw error; });

    }
  }


     await Post.create({
      ... req.body,
      thumbnail: fileName,
      image: fileNameimage,
     })
     
     res.status(201).json({message:"ارسال محصول موفقیت آمیز بود"});
  
  } catch (err) {
    next(err);
  }
     

}

exports.getProduct=async(req,res,next)=>{
  try {

    const post=await Post.find({}).sort('asc');
    if(!post){
      const error = new Error(
        "محصولی موجود نمی باشد"
    );
    error.statusCode = 422;
    throw error;
    }else{
      res.status(201).json({post,message:"محصول با موفیقت دریافت  شد"});
    }
    

  } catch (err) {
    next(err);
  }
}

exports.getsingelProduct=async(req,res,next)=>{
  try {
      
    const post=await Post.findOne({_id : req.params.id});

    if(!post){
      const error = new Error(
        "بلاگی موجود نمی باشد"
    );
    error.statusCode = 422;
    throw error;
    }else{
      res.status(201).json({post,message:"بلاگ با موفیقت دریافت  شد"});
    }
    

  } catch (err) {
    next(err);
  }
}

exports.editProduct = async (req, res, next) => {
  const thumbnail = req.files ? req.files.thumbnail : {};
  const fileName = `${shortId.generate()}_${thumbnail.name}`;
  const uploadPath = `${appRoot}/public/uploads/prodec/thumbnails/${fileName}`;
   
  const fileNameimage = [];
  const image = req.files ? req.files.image : {};
  if(image)
      fileNameimage.push(`${shortId.generate()}_${image.name}`); 
  const uploadPathimage = `${appRoot}/public/uploads/prodec/image/${fileNameimage}`;

  const post = await Post.findOne({ _id: req.params.id });

  try {
      if (thumbnail != {}){
          await Post.proValidation({ ...req.body, thumbnail });
      }else{
        await Post.proValidation({
          ...req.body,
          thumbnail: {
              name: "placeholder",
              size: 0,
              mimetype: "image/jpeg",
          },
      });
       }





       
      if (!post) {
          const error = new Error("محصول با این شناسه یافت نشد");
          error.statusCode = 404;
          throw error;
      }

          if (thumbnail.name) {
              fs.unlink(
                  `${appRoot}/public/uploads/thumbnails/${post.thumbnail}`,
                  async (err) => {
                      if (err) console.log(err);
                      else {
                          await sharp(thumbnail.data)
                              .jpeg({ quality: 80 })
                              .toFile(uploadPath)
                              .catch((err) => console.log(err));
                      }
                  }
              );
          
              if (image) {
                fs.unlink(
                    `${appRoot}/public/uploads/thumbnails/${post.image}`,
                    async (err) => {
                        if (err) console.log(err);
                        else {
                            await sharp(image.data)
                                .jpeg({ quality: 80 })
                                .toFile(uploadPathimage)
                                .catch((err) => console.log(err));
                        }
                    }
                );
              }

          const { title,body,price } = req.body;
          post.title = title;
          post.body = body;
          post.price = price;
          post.thumbnail = thumbnail.name ? fileName : post.thumbnail;
          if(image){
          post.image = image.name ? fileNameimage : post.image;
          }
          await post.save();

          res.status(200).json({ message: "محصول شما با موفقیت ویرایش شد" });
      }
  } catch (err) {
      next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
      const post = await Post.findByIdAndRemove(req.params.id);
      let filePathimage=[];
      if(post.image){
         filePathimage = `${appRoot}/public/uploads/prodec/image/${post.image}`;
      }
      const filePath = `${appRoot}/public/uploads/prodec/thumbnails/${post.thumbnail}`;

      fs.unlink(filePath, (err) => {
         if(post.image){

          fs.unlink(filePathimage,(err)=>{
            if (err) {
              const error = new Error(
                  "خطای در پاکسازی عکس های پست مربوطه رخ داده است"
              );
              error.statusCode = 400;
              throw error;
          }
          })
         }
          if (err) {
              const error = new Error(
                  "خطای در پاکسازی عکس پست مربوطه رخ داده است"
              );
              error.statusCode = 400;
              throw error;
          } else {
              res.status(200).json({ message: "پست شما با موفقیت پاک شد" });
          }
      });
  } catch (err) {
      next(err);
  }
};