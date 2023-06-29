import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbars from "../../components/Nanbar/Navbars";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import imgSlider from "../../img/2.webp";
import axios from "axios";
import NotProduct from "../../components/Notproduct/NotProduct";
import NotBlog from '../../components/Notblog/NotBlog'

export default function Home() {
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);

  const getProduct = async () => {
    const res = await axios.get("http://localhost:5000/user/products");
    const data = await res.data.post;
    setProduct(data);
  };
  const blogs = async () => {
    const res = await axios.get("http://localhost:5000/admin/getblog");
    const data = await res.data.blog;
    setData(data);
  };

  useEffect(() => {
    getProduct();
    blogs();
  }, []);

  return (
    <>
      <Navbars />
      <div className="container mx-auto p-4">
        <div className="lg:px-80 px-4">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            className="h-80"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img src={imgSlider} className="w-full h-80 rounded" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlider} className="w-full h-80 rounded" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlider} className="w-full h-80 rounded" />
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="my-4 lg:text-2xl md:text-xl text-lg font-bold">
          دسته بندی محصولات الکتروتکنیک و کامپیوتر
        </h1>
        <div className="flex gap-4 mx-4">
          <div className="w-full h-20 bg-orange-600 rounded shadow-sm"></div>
          <div className="w-full h-20 bg-green-600 rounded shadow-sm"></div>
        </div>
      </div>
      <div className="bg-white p-2">
        <h2 className="mr-4 mt-2">محصولات ما</h2>
        {product.length > 0 ? (
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              560: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
            className="h-80 mt-4"
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {product.map((item) => (
              <SwiperSlide>
                <Link to={`/store/${item._id}`} className="no-underline">
                  <div className="border w-40 hover:shadow-sm h-72 rounded ">
                    {/* <img src={product1} className="px-1" /> */}
                    <img
                      src={`http://localhost:5000/uploads/prodec/thumbnails/${item.thumbnail}`}
                      className="px-0 rounded-t h-36"
                    />
                    <div className="mt-1 px-2 py-3">
                      <p className="font-light text-[#57606f] opacity-90 text-[13px] text-center">
                        {item.title}
                      </p>
                      <div className="text-blue-900 opacity-90  text-center">
                        <span className="mr-2 text-xl font-bold">
                          {item.price}
                        </span>
                        <span className="font-light text-md mr-1">تومان</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <NotProduct title='محصولی برای نمایش موجود نیست' />
        )}
      </div>
      <div className="container mx-auto px-4">
        <div className="grid gap-3 lg:grid-cols-2 grid-cols-1 my-4">
          <div>
            <h2>درباره مجموعه ما بیشتر بدانید</h2>
            <p className="text-xl mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div>
            <img src={imgSlider} className="rounded shadow-md" />
          </div>
          <div>
            <img src={imgSlider} className="rounded shadow-md" />
          </div>
          <div>
            <h2>درباره مجموعه ما بیشتر بدانید</h2>
            <p className="text-xl mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-2">
        <h2 className="mr-4 mt-2">وبلاگ ما : </h2>
        {data.length > 0 ?(
          <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            560: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
          className="h-80 mt-4"
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.length > 1 ? (
            data.map((item) => (
              <SwiperSlide key={item._id}>
                <Link to={`/blog/${item._id}`} className="no-underline">
                  <div className="border w-40 hover:shadow-sm rounded ">
                    <img
                      src={`http://localhost:5000/uploads/thumbnails/${item.thumbnail}`}
                      className="px-0 rounded-t-md w-full h-28"
                    />
                    <div className="mt-1 px-2 py-3">
                      <p className="font-bold text-black  text-lg text-center">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center">وبلاگ ما خالی است</p>
          )}
        </Swiper>
        ):<NotBlog title='صفحه وبلاگ ما خالی است'/>}
        
      </div>

      <Footer />
    </>
  );
}
