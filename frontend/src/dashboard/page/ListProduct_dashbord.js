import React, { useState,useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../components/Navbar/Navbar";
import Sidebar_dashbord from "../components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from "react-router-dom";
import Authentication from '../../Authentication/Authentication'


 function ListProduct_dashbord() {
  const [product,setProduct] = useState([])



  const getProduct = async () => {
    const res = await axios.get('http://localhost:5000/user/products')
    const data = await res.data.post
    setProduct(data)
  }

  const deleteProduct = (item) => {
    const res = axios.delete(`http://localhost:5000/user/product/${item._id}`)
    // console.log(item);
    getProduct()
  }
  
  useEffect(()=>{
    getProduct()
  },[])

    return (
        <>
          <Navbars />
          <div className="grid grid-rows-1 grid-cols-12">
            <div className="col-span-2">
              <Sidebar_dashbord />
            </div>
            <div className="col-span-10">
              <h1 className="font-medium my-4">محصولات</h1>
              <div className="flex gap-4">
              <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Body className="font-light">
            <Card.Title className="text-lg font-medium">اضافه کردن محصول</Card.Title>
            <Card.Text className="text-xs mb-2">
              میتوانید محصول جدید به سایت اضافه کنید
            </Card.Text>
            <Link className="float-left mt-2 font-light py-1 no-underline text-white bg-green-600 px-3 rounded-sm" to={'/addproduct_dashbord'}>اضافه کردن</Link>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Title className="text-lg font-bold my-3 mx-2">تعداد محصولات در سایت</Card.Title>
            <Card.Text className="text-xs font-light p-2 mb-2">
              تعداد محصولاتی است که در سایت ارائه شده است
            </Card.Text>
            <Card.Title className="text-center font-bold text-5xl"> {product.length} </Card.Title>
        </Card>
              </div>
          <div className="mt-5">
          <Table className="mx-4" striped bordered hover responsive>
          <thead>
            <tr className="font-light">
              <th>لیست سفارشات</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <td>ویرایش</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody>
            {product.map((item,index)=>(
              <tr className="font-light" key={item._id}>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><Link to={`/editeproduct_dashbord/${item._id}`} className="w-full bg-teal-500  text-white rounded-sm px-2 no-underline ">ویرایش</Link></td>
              <td><button onClick={()=> deleteProduct(item)}  className="bg-red-500 text-white px-2 rounded-sm no-underline">حذف</button></td>
            </tr>
            ))}
          </tbody>
        </Table>
          </div>
             
            </div>
          </div>
        </>
      );
}

export default Authentication(ListProduct_dashbord)