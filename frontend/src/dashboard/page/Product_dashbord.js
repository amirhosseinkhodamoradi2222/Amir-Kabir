import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import axios from "axios";


export default function Product_dashbord() {
  return (
    <>
      <Navbars />
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-2">
          <Sidebar_dashbord />
        </div>
        <div className="col-span-10">
          <h1 className="font-medium my-4">لیست سفارشات</h1>
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
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </div>
    </>
  );
}
