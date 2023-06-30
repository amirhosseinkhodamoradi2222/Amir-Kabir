
const bcrypt =require("bcrypt");
const moongose=require('mongoose');




const adminSchema= new moongose.Schema({
  username:{
    type:String,
    required:true,
    trim:true,
    minlength: 4,
    maxlength: 255,
  },

  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
    trim:true,
},

});


adminSchema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
  });
});


module.exports=moongose.model("Admin",adminSchema);