import React, { useState,useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Blog_dashbord() {
  const [data,setData] = useState([])
  const [cat,setCat] = useState([])
  const [lighnt,setLighnt] = useState('')
  const [deleteid,setDeleteid] = useState('')

  const blogs = async () => {
    const res = await axios.get(`http://localhost:5000/admin/getblog`)
    const data = await res.data.blog
    setData(data)
    setLighnt(data.length)
  }
  function findCat(idCat){
    const a = cat.map((i=idCat)=>{
     if(idCat == i._id)
      return i.titel
    })
    return a.toString().split(",").join("");
  }
  const catgory = async () =>{
    const res = await axios.get('http://localhost:5000/admin/getCat')
    setCat(res.data.cat)
  }

  const btn_delete = (item) => {
    axios.delete(`http://localhost:5000/admin/deleteblog/${item._id}`)
    blogs()
  }

  useEffect(()=>{
    catgory()
    blogs()
  },[])
    return (
        <>
          <Navbars />
          <div className="grid grid-rows-1 grid-cols-12">
            <div className="col-span-2">
              <Sidebar_dashbord />
            </div>
            <div className="col-span-10">
              <h1 className="font-medium my-4">وبلاگ سایت</h1>
              <div className="flex gap-4">
              <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Body className="font-light">
            <Card.Title className="text-lg font-medium">اضافه کردن پست</Card.Title>
            <Card.Text className="text-xs mb-2">
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
            </Card.Text>
            <Link className="float-left font-light py-1 no-underline text-white bg-blue-600 px-3 rounded-sm" to={'/addblog_dashbord'}>اضافه کردن</Link>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Title className="text-lg font-medium my-3 mx-2">تعداد پست های ما :</Card.Title>
            <Card.Text className="text-xs font-light p-2 mb-2">
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
            </Card.Text>
            <Card.Title className="text-center font-bold text-5xl"> {lighnt} </Card.Title>
        </Card>
              </div>
          <div className="mt-5 lg:w-full">
          <Table striped bordered hover responsive className="mx-4">
          <thead>
            <tr className="font-light">
              <th>id</th>
              <th>عنوان</th>
              <th>دسته بندی</th>
              <td>ویرایش</td>
              <td>حذف</td>
            </tr>
          </thead>
          {
            data.map((item)=>(
              <tbody key={item._id}>
              <tr className="font-light">
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>{findCat(item.cat)}</td>
                <td><Link to={`/editeblog_dashbord/${item._id}`} className="w-full text-white bg-cyan-500 px-4 no-underline rounded-sm" size="sm">ویرایش</Link></td>
                <td ><Button variant="outline-danger" onClick={()=> btn_delete(item)}  className="w-full px-0" size="sm">حذف</Button></td>
              </tr>
            </tbody>
            ))
          }
        </Table>
          </div>
             
            </div>
          </div>
        </>
      );
}
