import { useState } from "react";

export default function Input(props) {
  const [styles, setStyles] = useState(
    "border-b-2 border-[#9E9E9E] font-light py-1 mb-2 w-full   focus:outline-none focus:border-b-[#616161]  duration-150 transition focus:duration-150 "
  );

  return (
    <>
      <div>
        <input
          type={props.type}
          className={props.styless ? props.styless : styles}
        />
      </div>
    </>
  );
}
