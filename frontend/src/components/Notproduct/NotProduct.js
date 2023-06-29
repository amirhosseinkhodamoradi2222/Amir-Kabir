import React from "react";
import not from "../../img/notProduct.png";

export default function NotProduct(props) {
  return (
    <>
      <div class="flex justify-center items-center">
        <div>
          <p className="text-center font-bold text-red-500">{props.title}</p>
          <img src={not} className="w-96 mx-auto" />
        </div>
      </div>
    </>
  );
}
