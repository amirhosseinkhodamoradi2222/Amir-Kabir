import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../components/Navbar/Navbar";
import Sidebar_dashbord from "../components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from "react-router-dom";


export default function ListProduct_dashbord() {
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
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
            </Card.Text>
            <Link className="float-left font-light py-1 no-underline text-white bg-green-600 px-3 rounded-sm" to={'/addproduct_dashbord'}>اضافه کردن</Link>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Title className="text-lg font-medium my-3 mx-2">تعداد محصولات در سایت</Card.Title>
            <Card.Text className="text-xs font-light p-2 mb-2">
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
            </Card.Text>
            <Card.Title className="text-center font-bold text-5xl"> 28 </Card.Title>
        </Card>
              </div>
          <div className="mt-5">
          <Table striped bordered hover responsive>
          <thead>
            <tr className="font-light">
              <th>لیست سفارشات</th>
              <th>کد محصول</th>
              <th>دسته بندی</th>
              <th>قیمت</th>
              <td>نام و نام خانوادگی</td>
              <td>شماره تلفن</td>
              <td>ادرس</td>
              <td>ایمیل</td>
            </tr>
          </thead>
          <tbody>
            <tr className="font-light">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td><Button variant="info" className="w-full text-white px-0" size="sm">ویرایش</Button></td>
              <td><Button variant="outline-danger" className="w-full px-0" size="sm">حذف</Button></td>
            </tr>
          </tbody>
        </Table>
          </div>
             
            </div>
          </div>
        </>
      );
}
