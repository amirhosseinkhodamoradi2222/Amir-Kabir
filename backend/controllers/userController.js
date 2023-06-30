const User=require('../model/user');
const Call=require('../model/callus');
const jwt=require('jsonwebtoken')
const bcrypt = require("bcrypt");
const shortId = require("shortid");
const appRoot = require("app-root-path");


const fs=require('fs')

exports.createUser = async (req, res, next) => {
  try {
    
      await User.userValidation(req.body);

      const { username, email, password  } = req.body;

      const user = await User.findOne({ email });
      if (user) {
          const error = new Error(
              "کاربری با این ایمیل در پایگاه داده موجود است"
          );
          error.statusCode = 422;
          throw error;
      } else {
          await User.create({ username, email, password });

          //? Send Welcome Email
          // sendEmail(
          //     email,
          //     fullname,
          //     "خوش آمدی به وبلاگ ما",
          //     "خیلی خوشحالیم که به جمع ما وبلاگرهای خفن ملحق شدی"
          // );

          res.status(201).json({ message: "عضویت موفقیت آمیز بود" });
      }
  } catch (err) {
      next(err);
  }
};
exports.handleLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
      const user = await User.findOne({ email });
      if (!user) {
          const error = new Error("کاربری با این ایمیل یافت نشد");
          error.statusCode = 404;
          throw error;
      }

      const isEqual = await bcrypt.compare(password, user.password);

      if (isEqual) {
          const token = jwt.sign(
              {
                  user: {
                      userId: user._id.toString(),
                      email: user.email,
                      fullname: user.fullname,
                  },
              },
              process.env.JWT_SECRET
          );
         
          res.status(200).json({ token, userId: user._id.toString() });
      } else {
          const error = new Error("آدرس ایمیل یا کلمه عبور اشتباه است");
          error.statusCode = 422;
          throw error;
      }
  } catch (err) {
      next(err);
  }
};

exports.users= async(req,res)=>{
    const user=await User.find({});
    res.send(user)
}

exports.callus=async(req,res,next)=>{
    const filez = req.files ? req.files.filez : {};
    const fileNamez = `${shortId.generate()}_${filez.name}`;
    const uploadPathz = `${appRoot}/public/uploads/filepdf/${fileNamez}`;
     
  
    try {
      
      req.body = { ...req.body, filez };
        
      await Call.callValidation(req.body);
     await fs.writeFile(uploadPathz,filez.data,(err)=>{
        if(err){
            const error = new Error(
                " مشکل در آپلود فایل ضمیمه"
            );
            error.statusCode = 422;
            throw error;
        }
     })
     

  
  
       await Call.create({
        ... req.body,
        filez: fileNamez,
        
       })
       
       res.status(201).json({message:"ارسال محصول موفقیت آمیز بود"});
    
    } catch (err) {
      next(err);
    }
       
}

