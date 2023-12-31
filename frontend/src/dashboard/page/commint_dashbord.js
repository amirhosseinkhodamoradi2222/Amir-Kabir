import React, { useEffect, useState } from "react";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Authentication from "../../Authentication/Authentication";

function Commint_dashbord() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/admin/getcallus", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setData(res.data.call);
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

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
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Title className="text-lg font-medium my-3 mx-2">
                تعداد درخواست های ما :
              </Card.Title>
              <Card.Text className="text-xs font-light p-2 mb-2">
                در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را
                برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
              </Card.Text>
              <Card.Title className="text-center font-bold text-5xl">
                {" "}
                28{" "}
              </Card.Title>
            </Card>
          </div>
          <div className="mt-5">
            <Table striped bordered hover responsive>
              <thead>
                <tr className="font-light">
                  <th className="text-center">شماره</th>
                  <td className="text-center">نام و نام خانوادگی</td>
                  <td className="text-center">عنوان</td>
                  <td className="text-center">شماره تلفن</td>
                  <th className="text-center">دانلود</th>
                  <th className="text-center">پاسخ در خواست</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item,index) => (
                  <tr key={item._id} className="font-light">
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.body}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Button
                      
                        variant="success"
                        className="w-full text-white px-0"
                        size="sm"
                      >
                        دانلود ضمیمه
                      </Button>
                    </td>
                    <td>{item.smedia}</td>
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
export default Authentication(Commint_dashbord);
