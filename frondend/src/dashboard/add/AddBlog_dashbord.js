import React, { useState,useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Alert from 'react-bootstrap/Alert';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


export default function AddBlog_dashbord() {

  const [content, setContent] = useState('');
  const [img, setImg] = useState(null);
  const [title, setTitel] = useState('');
  const [catSelect, setCatSelect] = useState('');
  const [cat, setCat] = useState([]);

  const getCat = async () => {
    const datacat = await axios.get('http://localhost:5000/admin/getCat')
    setCat(datacat.data.cat)

  }
console.log(catSelect);
  function handleChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }
  const addBlog = async () => {
    if(title && catSelect){
      toast.loading('اطلاعات در حال ارسال است')
      const res = await axios.post('http://localhost:5000/admin/sendblog',{
        title : title,
        des : content,
        cat : catSelect,
        thumbnail : img
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(res);
      // toast.info()
    }else{
      toast.error('لطفا هم فیلد ها را پر کنید')
    }
  }

  useEffect(()=>{
    getCat()
  },[])
  
  return (
    <>
      <Navbars />
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-2">
          <Sidebar_dashbord />
        </div>
        <div className="col-span-10">
          <h1 className="font-medium my-4"> اضافه کردن وبلاگ </h1>
          <Alert className="font-light m-4" variant='warning'>
          در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن استفاده کنید... تایپ کنید
        </Alert>
        <div className="bg-white m-2 p-2 rounded shadow-current">
        <p className="font-light mb-0"> عنوان : </p>
        <TextField id="standard-basic" value={title} onChange={e => setTitel(e.target.value)} className="lg:w-100 md:w-100 w-1/2" variant="standard" />
        <Alert className="font-light m-1 w-1/2 text-sm mt-4" variant='danger'>
          سایز عکس نباید بیشتر 5 مگابایت باشد
        </Alert>
        <p className="font-light mt-3 mb-2"> انتخاب عکس : </p>
        <div className=" w-1/2">
        <Form.Control  type="file" onChange={e => setImg(e.target.files[0])} size="sm"  accept="image/*" />
        </div>
        <div className="w-1/2">
        <p className="font-light mt-3 mb-2"> دسته بندی : </p>
        <Form.Select value={catSelect} onChange={e => setCatSelect(e.target.value)} aria-label="Default select example" className="font-light">
     {cat.map((item)=>(
      <option key={item._id} value={item._id}>{item.titel}</option>
     ))}
    </Form.Select>
    <p className="font-light mb-2 mt-2"> متن : </p>

      <CKEditor
      editor={ClassicEditor}
      data={content}
      onChange={handleChange}
      />
      </div>
        
    <button onClick={addBlog} className="bg-green-800 text-white w-1/2 py-1 my-4 duration-150 hover:duration-150 hover:bg-green-600 rounded font-light"> ثبت </button>
        </div>

        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
