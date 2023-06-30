import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Alert from "react-bootstrap/Alert";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BiX } from "react-icons/bi";
import Authentication from '../../Authentication/Authentication'

function AddProduct_dashbord() {
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState([]);
  const [img, setImg] = useState(null);
  const [catSelect, setCatSelect] = useState("");

  console.log(title);
  console.log(price);
  console.log(images);
  console.log(img);
  console.log(content);
  console.log(catSelect);

  const getCat = async () => {
    const datacat = await axios.get(" http://localhost:5000/getCat");
    setCat(datacat.data.cat);
  };
  console.log(catSelect);
  const addProduct = async () => {
    if (title && price && cat) {
      const res = axios.post(
        "http://localhost:5000/user/product",
        {
          title: title,
          body: content,
          price: price,
          thumbnail: img,
          cat: catSelect,
          image: images,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          },
        }
      );
    } else {
      toast.error("");
    }
  };
  function handleChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    setImages([...images, selectedFile]);
  }

  function handleDeleteImage(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      <Navbars />
      <div></div>
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-2">
          <Sidebar_dashbord />
        </div>
        <div className="col-span-10">
          <h1 className="font-medium my-4"> اضافه کردن محصولات</h1>
          <Alert className="font-light m-4" variant="warning">
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان
            نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن
            آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن
            استفاده کنید... تایپ کنید
          </Alert>
          <div className="bg-white m-2 p-2 rounded shadow-current">
            <p className="font-light mb-0"> نام محصول : </p>
            <TextField
              id="standard-basic"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="lg:w-100 md:w-100 w-1/2"
              variant="standard"
            />
            <Alert
              className="font-light my-4 text-sm py-2 w-1/2"
              variant="success"
            >
              در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان
              نگه داریم و همیشه در دسترس شما قرار دهیم
            </Alert>
            <p className="font-light mb-0 mt-2"> قیمت : </p>
            <TextField
              id="standard-basic"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="lg:w-100 md:w-100 w-1/2"
              variant="standard"
            />
            <Alert
              className="font-light my-4 text-sm py-2 w-1/2"
              variant="danger"
            >
              در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان
              نگه داریم و همیشه در دسترس شما قرار دهیم
            </Alert>
            <p className="font-light mt-3 mb-2"> انتخاب عکس : </p>
            <div className=" w-1/2">
              <Form.Control
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                size="sm"
                accept="image/*"
              />
            </div>
            <p className="font-light mt-3 mb-2"> انتخاب عکس : </p>
            <div>
              <input
                type="file"
                className={images.length > 5 ? "hidden" : "block"}
                onChange={handleImageChange}
                multiple
              />

              <div
                className={
                  images.length >= 1
                    ? "p-1 border-2 border-indigo-600 rounded border-dashed w-1/2 mt-2"
                    : "hidden"
                }
              >
                <div className="grid grid-rows-1 gap-2 grid-cols-6 mx-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative p-0">
                      <button onClick={() => handleDeleteImage(index)}>
                        <BiX
                          color="red"
                          className="bg-red-300 rounded-full absolute top-4 -right-1"
                        />
                      </button>
                      <img
                        className="w-24 h-24 mb-4 rounded-sm"
                        style={{ objectFit: "cover" }}
                        src={URL.createObjectURL(image)}
                        alt={`image-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-light mb-2 mt-2"> متن : </p>
            <div className="w-1/2">
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={handleChange}
              />
            </div>
            <p className="font-light mt-3 mb-2"> دسته بندی : </p>
            <div className="w-1/2">
              <Form.Select
                value={catSelect}
                onChange={(e) => setCatSelect(e.target.value)}
                aria-label="Default select example"
                className="font-light"
              >
                {cat.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.titel}
                  </option>
                ))}
              </Form.Select>
            </div>
            <button
              onClick={addProduct}
              className="bg-green-800 text-white w-1/2 py-1 my-4 duration-150 hover:duration-150 hover:bg-green-600 rounded font-light"
            >
              {" "}
              ثبت{" "}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default Authentication(AddProduct_dashbord)