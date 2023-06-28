import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import title from "../../img/f.webp";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import parse from 'html-react-parser';

function Store_detale() {
  const [prodec,setProduct] = useState({})
  const [des,setDes] = useState('')
  const [idprice,setIdprice] = useState('')
  const [img,setImage] = useState([])

 
  const params = useParams()
  
 
  const getData = async () => {
    let res = await axios.get(`http://localhost:5000/user/product/${params.id}`)
    let data = await res.data.post
    setProduct(data)
    setImage(data.image)
    setDes(data.body)
    setIdprice(data._id)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <Navbars/>
      <div className="bg-white p-2 rounded shadow-sm mt-5 mx-10 lg:mx-40 md:mx-20 mb-5 ">
        <h1 className="font-black mt-4 text-3xl">
         {prodec.title}
        </h1>
        <div className="grid grid-rows-1 gap-1 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          <div className="col-span-2">
            <div className="grid gap-4 grid-rows-1 mt-3 md:lg:grid-cols-2 grid-cols-1 lg:grid-cols-2">
              <div className=" p-1 rounded ">
                <p className="font-bold text-base">توضیحات  بیشتر درباره محصول</p>
                <p>{parse(des)}</p>
              </div>
              <div className="m-2">
                {
                  img.length < 0 ?
                   <p>hg</p> :
                   <img src={`http://localhost:5000/uploads/prodec/thumbnails/${prodec.thumbnail}`}/>
                }
              </div>
            </div>
          </div>
          <div className="mt-3 border-r-2">
            <img src={title} className="mb-3" />
            <p className="my-4 font-bold text-center text-2xl opacity-90">{prodec.price} تومان </p>
            <button className="w-full py-2 my-4 hover:bg-green-700 mr-1 rounded text-white bg-green-800" >افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Store_detale;
