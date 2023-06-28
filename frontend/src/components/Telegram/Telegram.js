import React from "react";
import { Link } from "react-router-dom";
import { ImTelegram } from "react-icons/im";

export default function Telegram() {
  return (
    <div
      className="p-1 shadow-sm pb-2 rounded grid grid-cols-3"
      style={{ background: "linear-gradient(to right, #373b44, #4286f4)" }}
    >
      <div className="mb-0 col-span-2 font-web text-white">
        <ImTelegram className="m-2 mb-1 inline" color="#fff" size={32} />
        <p className="inline">تلگرام ما</p>
      </div>
      <div className="justify-self-end mt-2 ml-1">
        <Link className="no-underline" to={"/"}>
          <p className="bg-white font-light mb-0 shadow-sm rounded text-[#004e92] text-center py-1 px-2">
            دنبال کنید
          </p>
        </Link>
      </div>
    </div>
  );
}
