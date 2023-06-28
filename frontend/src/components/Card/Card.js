import React from "react";
import { BiTime } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Card(props) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <>
      <div className="bg-white shadow-sm p-4 my-2 rounded">
        <div className="grid lg:grid-rows-1 gap-2 lg:grid-cols-3 grid-cols-1">
          <img src={`http://localhost:5000/uploads/thumbnails/${props.img}`} className="px-0 rounded-t-md w-full h-[155px]"  />
          <div className="lg:col-span-2">
            <Link
              to={`/blog/${props.url}`}
              className="no-underline text-black "
            >
              <h2 className="font-web text-lg duration-150 hover:duration-150 hover:text-blue-900">
                {props.title}
              </h2>
            </Link>
            <p className="font-light opacity-80">
              {props.title}
            </p>
            <div className="grid grid-row-1 grid-cols-2 mt-5 gap-2">
              <div className="flex gap-2">
                <p className=" h-6 font-light px-4 mb-0 text-white rounded" style={{backgroundColor:'#'+randomColor}}>
                  {props.cat}
                </p>
                
              </div>
              <div className="justify-self-end">
                <div className="flex gap-2">
                  <p className="font-light opacity-80 mb-0">
                    <BiCommentDetail
                      className="inline ml-1 mt-0 opacity-80 "
                      size={18}
                    />
                    دیدگاه{" "}
                  </p>
                  <p className="font-light opacity-80 mb-0">
                    <BiTime
                      className="inline  mt-0 mr-2 opacity-80 "
                      size={18}
                    />{" "}
                    2/5/1402{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
