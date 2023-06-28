
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Alert from 'react-bootstrap/Alert';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export default function EditeProduct_dashbord() {


  const [content, setContent] = useState('');

  function handleChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }
  function add(){
    console.log(11);
  }
  const addImage = () => {
    console.log('slam');
  }

    return (
        <>
          <Navbars />
          <div className="grid grid-rows-1 grid-cols-12">
            <div className="col-span-2">
              <Sidebar_dashbord />
            </div>
            <div className="col-span-10">
              <h1 className="font-medium my-4"> ویرایش محصول </h1>
              <Alert className="font-light m-4" variant='warning'>
          در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن استفاده کنید... تایپ کنید
        </Alert>
        <div className="bg-white m-2 p-2 rounded shadow-current">
        <p className="font-light mb-0"> نام محصول : </p>
        <TextField id="standard-basic" className="lg:w-100 md:w-100 w-1/2" variant="standard" />
        <Alert className="font-light my-4 text-sm py-2 w-1/2" variant='success'>
         در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
        </Alert>
        <p className="font-light mb-0 mt-2"> قیمت : </p>
        <TextField id="standard-basic" className="lg:w-100 md:w-100 w-1/2" variant="standard" />
        <Alert className="font-light my-4 text-sm py-2 w-1/2" variant='danger'>
         در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
        </Alert>
        <p className="font-light mt-3 mb-2"> انتخاب عکس : </p>
        <div className=" w-1/2">
        <Form.Control  type="file" size="sm" />
        <button onClick={addImage} className="bg-blue-300 text-white w-full py-1 my-2 duration-500 text-sm hover:duration-500 hover:bg-blue-700 rounded-sm hover:shadow-md font-light" type="button">اضافه کردن عکس</button>
        </div>
        <p className="font-light mb-2 mt-2"> متن : </p>
        <div className="w-1/2">
          <CKEditor editor={ClassicEditor} data={content} onChange={handleChange} />
        </div> 
        <p className="font-light mt-3 mb-2"> دسته بندی : </p>
        <div className="w-1/2">
        <Form.Select aria-label="Default select example" className="font-light">
      <option>لباس</option>
      <option value="1">پوشاک</option>
      <option value="1">پوشاک</option>
      <option value="1">پوشاک</option>
    </Form.Select>
        </div>
          <button onClick={add} className="bg-green-800 text-white w-1/2 py-1 my-4 duration-150 hover:duration-150 hover:bg-green-600 rounded font-light"> ثبت </button>
        </div>

        </div>
            </div>
        </>
      );
}
