import React from 'react'
import {Link} from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import insta from '../../img/instagram.svg'
import tel from '../../img/telegram-seeklogo.com.svg'
import linkedin from '../../img/linkedin.svg'
import axios from 'axios';


export default function Footer() {
    const [expanded, setExpanded] = React.useState(false);
    const [email, setEmail] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const sendEmaile = () => {
      console.log('send');
    }
  
  return (
    <>
    <div className='bg-gray-800 p-10 font-light'>
        <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8'>
            <div className='grid grid-cols-1'>
                <Link to={'/blog'} className='no-underline text-white'>وبلاگ</Link>
                <Link to={'/blog'} className='no-underline text-white'>فروشگاه</Link>
                <Link to={'/blog'} className='no-underline text-white'>ضمانت محصولات</Link>
                <Link to={'/blog'} className='no-underline text-white'>پشتیبانی</Link>
            </div>
            <div>
            <p className='text-white'>عضویت در خبرنامه ما</p>
            <div className=' border-oreng border-2 border-dashed rounded-sm'>
            <div className='flex'>
            <input className='w-full p-1 focus:outline-none font-bold placeholder:font-light border-none placeholder:text-left placeholder:ml-2 outline-none' placeholder='test@gmail.com' type='email'/>
            <button onClick={sendEmaile} className='bg-oreng hover:bg-orange-500 duration-200 hover:duration-200 ease-linear hover:ease-out text-white px-4 rounded-r-sm'>ثبت</button>
            </div>
            </div>
            </div>
            <div>
            <p className='text-white'> سوالات متداول </p>
            <div>
            <div>
      <Accordion style={{backgroundColor:'#374151'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={'#fff'}>کار این هلدینگ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={'#d1d5db'} style={{fontSize:'14px'}}>
           چدر کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#374151'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={'#fff'}>خرید از فروشگاه</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={'#d1d5db'} style={{fontSize:'14px'}}>
          در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
            </div>
            <div>
            <p className='text-white'>شبکه های اجتماعی</p>
            <div className='flex gap-3 mt-3'>
            <Link to={'/'} className='inline'><img src={insta} className='w-12 h-12'/></Link>
                <Link to={'/'} className='inline'><img src={tel} className='w-12 h-12'/></Link>
                <Link to={'/'} className='inline'><img src={linkedin} className='w-12 h-12'/></Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
