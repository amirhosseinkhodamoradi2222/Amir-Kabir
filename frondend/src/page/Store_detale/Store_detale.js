import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../img/product3.webp";
import ReactImageZoom from "react-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
// import "../../../node_modules/swiper/modules/grid/grid.min.css";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import { Navigation } from "swiper";
import { GoLaw } from "react-icons/go";
import { BsCheck2 } from "react-icons/bs";
import title from "../../img/f.webp";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";

function Store_detale() {
  let [item, setItem] = useState({
    border: "0px solid #000",
    borderRadius: "20px",
    borderRadius: "20px",
    transitionDuration: "0.5s",
  });

 
  const props = { zoomWidth: 500, img: img1 };
  return (
    <>
    <Navbars/>
      <div className="bg-white p-2 rounded shadow-sm mt-5 mx-10 lg:mx-40 md:mx-20  ">
        <h1 className="font-medium mt-4 text-xl">
          تلویزیون ال ای دی تی سی ال مدل 32D3000i سایز 32 اینچ
        </h1>
        <div className="grid grid-rows-1 gap-1 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          <div className="col-span-2">
            <div className="grid gap-4 grid-rows-1 mt-5 md:lg:grid-cols-2 grid-cols-1 lg:grid-cols-2">
              <div className=" p-3 rounded ">
                <p className="font-medium text-base">ویژگی‌های اصلی</p>
                <div className="grid grid-rows-1 border-t-[1px] border-zinc-500 grid-cols-4">
                  <div className="bg-zinc-200 grid border-b-[1px] py-1 border-zinc-500 justify-items-center">
                    <GoLaw className="inline text-zinc-800" size={30} />
                  </div>
                  <div className="col-span-3 font-light border-b-[1px] border-zinc-500 grid items-center pr-3 ">
                    وزن کالا{" "}
                  </div>
                  <div className="bg-zinc-200 grid border-b-[1px] py-1 border-zinc-500 justify-items-center">
                    <BsCheck2 className="inline text-zinc-800" size={30} />
                  </div>
                  <div className="col-span-3 font-light border-b-[1px] border-zinc-500 grid items-center pr-3">
                    شناسه کالا
                  </div>
                </div>
              </div>
              <div className="m-5">
                <Swiper modules={[Navigation]} navigation={true}>
                  <SwiperSlide>
                    <ReactImageZoom {...props} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ReactImageZoom {...props} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ReactImageZoom {...props} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ReactImageZoom {...props} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="mt-5 border-r-2">
            <img src={title} className="mb-3" />
            <div className="grid grid-rows-1 grid-cols-4 mx-4">
              <div className="">
                <p className="mb-0 font-web text-lg">رنگ ها</p>
              </div>
              <div className="col-span-3 ">
                <div className="flex">
                  <label htmlFor="1">ewrwr</label>
                  <input id="1" className="bg-black mx-2" type="radio" />
                  <label htmlFor="1">ewrwr</label>
                  <input id="1" className="bg-black mx-2" type="radio" />
                  <label htmlFor="1">ewrwr</label>
                  <input id="1" className="bg-black mx-2" type="radio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Store_detale;
