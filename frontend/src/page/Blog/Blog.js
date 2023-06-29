import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Insta from "../../components/Insta/Insta";
import Telegram from "../../components/Telegram/Telegram";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { Loadin } from "../../components/sclation/loadin";
import NotBlog from "../../components/Notblog/NotBlog";

export default function Blog() {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);

  const catgory = async () => {
    const res = await axios.get("http://localhost:5000/admin/getCat");
    setCat(res.data.cat);
  };

  const blogs = async () => {
    const res = await axios.get("http://localhost:5000/admin/getblog");
    const data = await res.data.blog;
    setData(data);
    setLoading(false);
  };

  function findCat(idCat) {
    const a = cat.map((i = idCat) => {
      if (idCat == i._id) return i.titel;
    });
    return a.toString().split(",").join("");
  }

  useEffect(() => {
    setTimeout(() => {
      blogs();
      catgory();
    }, 500);
  }, []);

  return (
    <>
      <Navbars />
      <div className="container mt-5">
        <div className="grid grid-rows-1 lg:grid-rows-1 md:grid-rows-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="row-span-2 relative rounded h-[415px] bg-red-500">
            <div className="bottom-0 absolute m-3">
              <div className="flex gap-2">
                <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 ">
                  {" "}
                  برنامه نویسی{" "}
                </p>
                <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 ">
                  {" "}
                  برنامه نویسی{" "}
                </p>
              </div>
              <div>
                <h2 className="font-medium mb-0 text-lg text-white">
                  {" "}
                  برنامه نویسی چیست
                </h2>
                <p className="mb-1 text-xs opacity-90 text-white font-light">
                  زبان برنامه نویسی های{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1">
            <div className="grid grid-rows-2 grid-cols-2 gap-3">
              <div className="bg-teal-800 relative rounded h-[200px] col-span-2">
                <div className="m-3 absolute bottom-0">
                  <div className="flex gap-2">
                    <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                    <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-medium mb-0 text-lg text-white">
                      {" "}
                      برنامه نویسی چیست
                    </h2>
                    <p className="mb-1 text-xs opacity-90 text-white font-light">
                      زبان برنامه نویسی های{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-500 relative rounded h-[200px]">
                <div className="m-3 absolute bottom-0">
                  <div className="flex gap-2">
                    <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                    <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-medium mb-0 text-lg text-white">
                      {" "}
                      برنامه نویسی چیست
                    </h2>
                    <p className="mb-1 text-xs opacity-90 text-white font-light">
                      زبان برنامه نویسی های{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-500 relative rounded h-[200px]">
                <div className="m-3 absolute bottom-0">
                  <div className="flex gap-2">
                    <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                    <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 ">
                      {" "}
                      برنامه نویسی{" "}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-medium mb-0 text-lg text-white">
                      {" "}
                      برنامه نویسی چیست
                    </h2>
                    <p className="mb-1 text-xs opacity-90 text-white font-light">
                      زبان برنامه نویسی های{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-4 grid-cols-1 mt-4 lg:gap-4">
          <div className="col-span-3">
            {data.length > 0 ? (
              loading ? (
                <Loadin />
              ) : (
                data.map((item) => (
                  <div key={item._id}>
                    <Card
                      url={item._id}
                      img={item.thumbnail}
                      title={item.title}
                      cat={findCat(item.cat)}
                    />
                  </div>
                ))
              )
            ) : (
              <NotBlog titel="مقاله ای برای نمایش موجود نیست" />
            )}
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

                {cat.map((item) => (
                  <Link className="no-underline" to={"/"}>
                    <p className="mr-4 text-md mb-2 hover:opacity-100 opacity-80 text-black  font-light">
                      {item.titel}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
