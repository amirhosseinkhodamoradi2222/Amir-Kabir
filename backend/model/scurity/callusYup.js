const Yup = require("yup");


exports.callSchemas = Yup.object().shape({
  name: Yup.string()
      .required("نام شما الزامی می باشد")
      .min(2, "نام شما نباید کمتر از 2 کارکتر باشد")
      .max(100, "نام شما نباید بیشتر از 100 کاراکتر باشد"),
  body: Yup.string().required("درخواست باید دارای محتوا باشد"),
  phone: Yup.string().required("شماره تلفن شما الزامی می باشد")
  .min(11, "شماره تلفن شما نباید کمتر از 11 کارکتر باشد")
  .max(11, "شماره تلفن شما نباید بیشتر از 11 کاراکتر باشد"),
  filez: Yup.object().shape({
      name: Yup.string().required("فایل ضمیمه الزامی می باشد"),
      size: Yup.number().max(5000000, "فایل ضمیمه از 5 مگابایت باشد"),
      mimetype: Yup.mixed().oneOf(
          ['application/pdf'],
          "تنها پسوند pdf پشتیبانی می شوند"
      ),
  }),
});