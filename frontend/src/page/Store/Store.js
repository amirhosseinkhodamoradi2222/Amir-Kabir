import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img1 from "../../img/1.webp";
import img2 from "../../img/2.webp";
import Telegram from "../../components/Telegram/Telegram";
import Insta from "../../components/Insta/Insta";
import product1 from "../../img/product3.webp";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import NotProduct from "../../components/Notproduct/NotProduct";

function Store() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await axios.get("http://localhost:5000/user/products");
    const data = await res.data.post;
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbars />
      <section className="container mt-2">
        <div className="grid gap-1 relative md:gap-4 md:grid-rows-1 md:grid-cols-2 grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4">
          <div className="lg:col-span-1 ">
            <div className="grid grid-rows-1 grid-cols-1  gap-5">
              <div className="bg-white shadow-sm rounded">
                <div className="py-3">
                  <p className="font-web pr-3 text-lg  border-r-4  border-[#ffa000] ">
                    دسته ها بندی محصولات
                  </p>
                  <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                  <Link className="no-underline" to={"/"}>
                    <p className="mr-4 text-md mb-0 duration-150 hover:duration-150 hover:mr-5 hover:opacity-100 opacity-80 text-black  font-light">
                      تلویزیون
                    </p>
                  </Link>
                  <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                  <Link className="no-underline" to={"/"}>
                    <p className="mr-4 text-md duration-150 mb-0 hover:duration-150 hover:mr-5 hover:opacity-100 opacity-80 text-black  font-light">
                      تلفن همراه
                    </p>
                  </Link>
                  <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                </div>
                <div className="py-3">
                  <p className="font-web pr-3 text-lg mt-3 border-r-4  border-[#ffa000] ">
                    فیلتر
                  </p>
                  <div className="text-md mb-2 hover:opacity-100 opacity-80 text-black  font-light">
                    <p className="mx-2 opacity-90">برند ها</p>
                    <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                    <div className="grid mx-2  grid-rows-1 grid-cols-2">
                      <div>
                        <p className="mb-0 opacity-80">سامسونگ</p>
                      </div>
                      <div className="grid justify-items-end ml-2">
                        <input type="checkbox" className="" />
                      </div>
                    </div>
                    <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                    <div className="grid mx-2 grid-rows-1 grid-cols-2">
                      <div>
                        <p className="mb-0 opacity-80">ال جی</p>
                      </div>
                      <div className="grid justify-items-end ml-2">
                        <input type="checkbox" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Link>
                  <img
                    src={img1}
                    title="تخفیف"
                    alt="تخیفیف"
                    className="rounded my-2"
                  />
                </Link>
                <Link>
                  <img
                    src={img2}
                    title="تخفیف"
                    alt="تخیفیف"
                    className="rounded"
                  />
                </Link>
                <div className="my-2 mt-5">
                  <Telegram />
                </div>
                <div className="my-2">
                  <Insta />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="container">
              <div className="bg-white rounded shadow-sm">
                <div className="grid grid-cols-6 p-3 text-blue-700">
                  <p className="font-light mb-0 text-black">ترتیب : </p>
                  <button className="font-light hover:bg-blue-100 duration-150 hover:duration-150 border-r-2 ">
                    بیشترین قیمت
                  </button>
                  <button className="font-light hover:bg-blue-100 duration-150 hover:duration-150 border-r-2 ">
                    کمترین قیمت
                  </button>
                  <button className="font-light hover:bg-blue-100 duration-150 hover:duration-150 border-r-2 ">
                    پرفروش
                  </button>
                  <button className="font-light hover:bg-blue-100 duration-150 hover:duration-150 border-r-2 ">
                    جدید ترین
                  </button>
                </div>
                {product.length > 0 ? (
                  <div className="grid gap-4 p-3 md:grid-rows-1 md:grid-cols-2 grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4">
                    {product.map((item) => (
                      <Link to={item._id} className="no-underline">
                        <div className="border hover:shadow-sm  rounded  ">
                          <img
                            src={`http://localhost:5000/uploads/prodec/thumbnails/${item.thumbnail}`}
                            className="px-0 rounded-t-md w-full h-28"
                          />
                          <div className="mt-1 px-2 py-3">
                            <p className=" text-[#57606f] opacity-90 text-md font-bold text-right">
                              {item.title}
                            </p>
                            <div className="text-blue-900 opacity-90 pb-4 text-center">
                              <span className="mr-2 text-2xl font-bold">
                                {item.price}
                              </span>
                              <span className="font-light text-md mr-1">
                                تومان
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <NotProduct title="محصولی برای نمایش موجود نیست" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Store;
