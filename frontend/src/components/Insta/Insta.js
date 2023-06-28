import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Insta() {
  return (
    <div
      className="p-1 shadow-sm rounded grid grid-cols-3"
      style={{ background: "linear-gradient(to right, #DD2476, #FF512F)" }}
    >
      <div className="mb-0 col-span-2 font-web text-white">
        <AiOutlineInstagram className="m-1 inline" color="#fff" size={40} />{" "}
        <p className="inline">اینستاگرام ما</p>
        
      </div>
      <div className="justify-self-end mt-2 ml-1">
      <Link className="no-underline" to={'/'}>
            <p className="bg-white font-light mb-0 shadow-sm rounded text-[#DD2476] text-center py-1 px-2">دنبال کنید</p>
        </Link>
      </div>
      
    </div>
  );
}
