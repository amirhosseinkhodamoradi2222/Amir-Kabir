const mongoose = require("mongoose");

const {callSchemas}=require("./scurity/callusYup");

const callSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    body: {
        type: String,
        required: true,
    },
 
    filez: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    smedia: {
      type: String,
      required: true,
  },
    phone: {
      type: String,
      required: true,
      maxlength: 11,
      minlength:11,
  },
});

callSchmea.statics.callValidation = function (body) {
  return callSchemas.validate(body, { abortEarly: false });
};



module.exports = mongoose.model("Call", callSchmea);
