import React, { useState } from "react";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from "react-bootstrap/Table";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Authentication from "../../Authentication/Authentication";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
//CSS
import "../global.css";

function Settings_dashbord() {
  const [inputcat, setInputcat] = useState("");
  const [getcat, setGetcat] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getAdmin = async () => {
    if (username && password) {
      let res = await axios.post(
        "http://localhost:5000/admin/addadmin",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("اطلاعات ادمین با موفقیت ثبت شد");
    } else {
      toast.info("لطفا تمام فیلد ها را پر کنید");
    }
  };

  const getDeta = async () => {
    let res = await axios.get("http://localhost:5000/getCat");
    let data = await res.data.cat;
    setGetcat(data);
  };

  const sendCat = () => {
    axios
      .post(
        "http://localhost:5000/admin/setCat",
        { titel: inputcat },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        getDeta();
        console.log(res.status);
        setInputcat("");
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    sendCat();
    getDeta();
  }, []);
  return (
    <>
      <Navbars />
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-2">
          <Sidebar_dashbord />
        </div>
        <div className="col-span-10">
          <h1 className="font-medium my-4">تنظیمات</h1>
          <div>
            <div className="bg-white z-0 m-2 p-4 h-screen rounded shadow-current">
              <Accordion className="z-0">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>دسته بندی</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="grid grid-rows-1 gap-4 grid-cols-2">
                    <div>
                      <Table responsive striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>تعداد دسته بندی ها</th>
                            <th>نام دسته ها</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getcat.map((i, index) => (
                            <tr>
                              <td>{index}</td>
                              <td key={i._id}>{i.titel}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    <div>
                      <p className="font-light pb-0">اضافه کردن دسته :</p>
                      <TextField
                        id="standard-basic"
                        className="w-full"
                        variant="standard"
                        value={inputcat}
                        onChange={(e) => setInputcat(e.target.value)}
                      />
                      <button
                        className="w-1/2 py-1 rounded mt-4 shadow-sm bg-green-800 text-white"
                        onClick={sendCat}
                      >
                        ذخیره
                      </button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>مدیر فروشگاه</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="grid grid-rows-1 gap-4 grid-cols-1">
                    <div>
                      <p className="font-light pb-0">اضافه کردن مدیر</p>
                      <label>نام کاربری</label>
                      <TextField
                        id="standard-basic"
                        className="w-full"
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label className="mt-4">رمز عبور</label>
                      <TextField
                        id="standard-basic"
                        className="w-full"
                        variant="standard"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className="w-1/2 py-1 rounded mt-4 shadow-sm bg-green-800 text-white"
                        onClick={getAdmin}
                      >
                        ذخیره
                      </button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Authentication(Settings_dashbord);
