import React, { useState } from "react";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";


export default function Commint_dashbord() {
    return (
        <>
          <Navbars />
          <div className="grid grid-rows-1 grid-cols-12">
            <div className="col-span-2">
              <Sidebar_dashbord />
            </div>
            <div className="col-span-10">
              <h1 className="font-medium my-4">درخواست ها</h1>
              <div className="flex gap-4">
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Title className="text-lg font-medium my-3 mx-2">تعداد درخواست های ما :</Card.Title>
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
              <th className="text-center">شماره</th>
              <td className="text-center">نام و نام خانوادگی</td>
              <td className="text-center">شماره تلفن</td>
              <th className="text-center">دانلود</th>
              <th className="text-center">پاسخ در خواست</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-light">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td><Button variant="success" className="w-full text-white px-0" size="sm">دانلود ضمیمه</Button></td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
          </div>
            </div>
          </div>
        </>
      );
}
