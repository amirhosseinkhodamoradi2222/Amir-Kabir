import {useEffect,useState} from "react";
import Card from "../../components/Card/Card";
import { Link,useParams } from "react-router-dom";
import Insta from "../../components/Insta/Insta";
import Telegram from "../../components/Telegram/Telegram";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import parse from 'html-react-parser';



function Blog_detale() {
  const [cat,setCat] = useState([])
  const [data,setData] = useState({})
  const [description,setDescription] = useState('')
  let params = useParams()

  const blogs = async () => {
    const res = await axios.get(`http://localhost:5000/getblog/${params.id}`)
    const data = await res.data.blog
    setData(data)
    setDescription(data.des)
  }
  const catgory = async () =>{
    const res = await axios.get('http://localhost:5000/getCat')
    setCat(res.data.cat)
  }

  useEffect(()=>{
    catgory()
    blogs()
  },[])
  return (
    <>
    <Navbars/>
      <div className="py-12 mt-5" style={{background:'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)'}}>
        <div className="container">
          <h1 className="font-medium text-white mr-5">{data.title}</h1>
          
        </div>
      </div>
      <div className="container mt-5">
        <div className="grid grid-rows-1 lg:grid-cols-4 grid-cols-1 mt-4 lg:gap-4">
          <div className="col-span-3">
            <div className="bg-white shadow-sm rounded mt-2 p-3">
              <h1 className="font-web text-2xl">{data.title}</h1>
        <img src={`http://localhost:5000/uploads/thumbnails/${data.thumbnail}`} className="w-full h-80 px-5" width={40} height={40}/>
              <p className="font-light mt-4 p-3 text-right">
             {parse(description)}
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4  mt-2 lg:mt-0 md:mt-0">
              <Insta />
              <div className="mt-3">
                <Telegram />
              </div>
            </div>
            <div className="bg-white shadow-sm rounded">
              <div className="py-3">
                <p className="font-web pr-3 text-lg mt-3 border-r-4  border-[#ffa000] ">
                  دسته ها
                </p>
                {
                    cat.map((item)=>(
                      <Link key={item._id} className="no-underline" to={"/"}>
                      <p className="mr-4 text-md mb-2 hover:opacity-100 opacity-80 text-black  font-light">
                        {item.titel}
                  </p>
                </Link>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog_detale;
