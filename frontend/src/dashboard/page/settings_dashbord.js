import React, { useState } from "react";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import axios from "axios";
//CSS 
import '../global.css'

export default function Settings_dashbord() {
  const [inputcat,setInputcat] = useState('')
  const [getcat,setGetcat] = useState([])
  const [error,setError] = useState()


  const getDeta = async ()=> {
    let res = await axios.get('http://localhost:5000/admin/getCat')
    let data = await res.data.cat
    setGetcat(data)
    }

  const sendCat = ()=> {
    axios.post('http://localhost:5000/admin/setCat',{titel:inputcat}).then(res => {
      getDeta()
      console.log(res.status)
      setInputcat('')
    }).catch((e)=> console.log(e))
  
  }
  
  React.useEffect(()=>{
  sendCat()
    getDeta()
  },[])
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
          <th>#</th>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
        {
          getcat.map((i,index)=>(
            <tr>
            <td>{index}</td>
            <td key={i._id}>{i.titel}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
            </div>
            <div>
              <p className="font-light pb-0">اضافه کردن دسته :</p>
              <TextField id="standard-basic"  className="w-full" variant="standard" value={inputcat} onChange={e=> setInputcat(e.target.value) } />
              <button className="w-1/2 py-1 rounded mt-4 shadow-sm bg-green-800 text-white" onClick={sendCat}>ذخیره</button>
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
          <Typography>کاربر</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>تنظیمات وبلاگ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
                </div>
    </div>
            </div>
          </div>
        </>
      );
}
