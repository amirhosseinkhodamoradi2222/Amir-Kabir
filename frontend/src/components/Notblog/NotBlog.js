import React from "react";
import not from "../../img/notblog.svg";

export default function NotBlog(props) {
  return (
    <>
      <p className="text-center font-bold text-red-500">{props.title}</p>
      <div class="flex justify-center items-center">
        <img src={not} className="w-96 mx-auto" />
      </div>
    </>
  );
}
