import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaUserTie,
  FaUser,
  FaPhoneSquare,
  FaRegClipboard,
} from "react-icons/fa";
import { HiOutlineClipboard } from "react-icons/hi";
import Input from "../../components/Input/Input";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Contuct() {
  const [img, setImg] = useState(null);
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [catSelect, setCatSelect] = useState("");
console.log(catSelect)
  const btn_sendmass = async () => {
    if (title && lastname && phone && img) {
      const res = await axios.post(
        "http://localhost:5000/user/callus",
        {
          name: lastname,
          body: lastname,
          filez: img,
          smedia: catSelect,
          phone: phone,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImg(null);
      setLastname("");
      setPhone("");
      setTitle("");
      toast.success("درخواست شما با موفقیت ارسال شد");
    } else {
      toast.info("لطفا تمام فیلد ها را پر کنید");
    }
  };

  useEffect(() => {
    if (title && lastname && phone && img) {
      btn_sendmass();
    }
  }, []);

  return (
    <>
      <Navbars />
      <div className="container mx-auto px-0 mt-5">
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3">
          <div className="col-span-1">
            <div className="bg-white shadow-sm py-2 rounded-md pb-4">
              <div className="grid grid-rows-1 grid-cols-1">
                <div className="container">
                  <div className="flex font-light text-lg my-4">
                    {" "}
                    <FaPhone
                      color="#FFA000"
                      className="mt-1 ml-2"
                      size={"22"}
                    />{" "}
                    راه های ارتباطی
                  </div>
                  <div className="font-light mt-2">
                    <span className="ml-2">تلفن :</span>
                    <span className="text-sm">02188454816</span>
                  </div>
                  <div className="font-light mt-2">
                    <span className="ml-2">ایمیل :</span>
                    <span className="text-sm"> info@Hcoc.com</span>
                  </div>
                  <div className="font-light mt-2">
                    <span className="ml-2">آدرس : </span>
                    <span className="text-sm">
                      {" "}
                      تهران،خیابان شریعتی ،خیابان ملک ، بن بست ایرانیاد ،پ ۱
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5">
              <div className="bg-white shadow-sm py-2 rounded-md pb-4">
                <div className="grid grid-rows-1 grid-cols-1">
                  <div className="container">
                    <div className="flex font-light text-lg my-4">
                      {" "}
                      <FaUserTie
                        color="#FFA000"
                        className="mt-1 ml-2"
                        size={"22"}
                      />
                      مدیر هلدینگ
                    </div>
                    <div className="font-light mt-2">
                      <span className="ml-2">نام و نام خانوادگی :</span>
                      <span className="text-sm">فریدونی</span>
                    </div>
                    <div className="font-light mt-2">
                      <span className="ml-2">تلفن :</span>
                      <span className="text-sm"> 09126700311</span>
                    </div>
                    <div className="font-light mt-2">
                      <span className="ml-2">ایمیل : </span>
                      <span className="text-sm">info@Hcoc.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white shadow-sm py-2 rounded-md">
              <h1 className="font-light text-center text-2xl mt-4 ">
                فرم ارسال درخواست
              </h1>
              <p className="font-light pr-5 mt-6 mb-16 bg-orange-200  p-2 rounded border-[0.5px] mx-5 border-[#FFA000]">
                در صورتیکه مشکل شما نیاز به پیگیری و پاسخ دارد لطفا تماس بگیرید
              </p>
              <div className="grid grid-rows-1 gap-3 grid-cols-2 mx-5">
                <div>
                  <div className="flex font-light text-lg  text-md opacity-60  text-right">
                    {" "}
                    <FaUser color="#FFA000" className="mt-1 ml-2 " />
                    <p className="lg:text-lg text-sm">نام و نام خانوادگی</p>
                  </div>

                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="border-b-2 border-[#9E9E9E] font-light py-1 mb-2 w-full  focus:outline-none focus:border-b-[#616161]  duration-150 transition focus:duration-150 "
                  />
                </div>
                <div>
                  <div className="flex font-light text-lg  text-md opacity-60  text-right">
                    {" "}
                    <FaPhoneSquare color="#FFA000" className="mt-1 ml-2" />
                    <p className="lg:text-lg text-sm">شماره تلفن</p>
                  </div>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="border-b-2 border-[#9E9E9E] font-light py-1 mb-2 w-full   focus:outline-none focus:border-b-[#616161]  duration-150 transition focus:duration-150 "
                  />
                </div>
              </div>
              <div className="grid grid-rows-1 mx-5 grid-cols-2 gap-4">
                <div>
                  <div className="flex font-light text-lg  text-md opacity-60  text-right">
                    {" "}
                    <HiOutlineClipboard color="#FFA000" className="mt-1 ml-2" />
                    <p className="lg:text-lg text-sm"> عنوان</p>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border-b-2 border-[#9E9E9E] font-light py-1 mb-2 w-full  focus:outline-none focus:border-b-[#616161]  duration-150 transition focus:duration-150 "
                  />
                </div>
                <div>
                  <div className="flex font-light text-lg  text-md opacity-60  text-right">
                    {" "}
                    <HiOutlineClipboard color="#FFA000" className="mt-1 ml-2" />
                    <p className="lg:text-lg text-sm">پاسخ</p>
                  </div>
                  <Form.Select
                    size="sm"
                    value={catSelect}
                    onChange={(e) => setCatSelect(e.target.value)}
                    aria-label="Default select example"
                    className="font-light mt-2"
                  >
                    <option value={'telegram'}>تلگرام</option>

                    <option value={'watsapp'}>واتساپ</option>
                  </Form.Select>
                </div>
              </div>

              <div className=" mx-5 mt-3">
                <Alert
                  className="font-light m-1 text-sm my-2"
                  variant="success"
                >
                  فایل باید از نوع PDF باشد
                </Alert>
                <div className="flex font-light text-lg  text-md opacity-60  text-right">
                  <FaRegClipboard color="#FFA000" className="mt-1 ml-2" />
                  توضیحات
                </div>
                <div className="mt-2">
                  <Form.Control
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    size="md"
                    accept="pdf/*"
                  />
                </div>
              </div>
              <div className="mx-5 mt-5">
                <button
                  onClick={btn_sendmass}
                  className="bg-[#FFA000] text-white text-right block  py-2 px-5 mb-6 w-auto font-light rounded"
                >
                  ارسال درخواست
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
