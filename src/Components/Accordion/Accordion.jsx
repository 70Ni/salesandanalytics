import React, { useState } from "react";
import arrow from "../../Images/Icons/08 Arrows/08 Down.svg";

const transition = "ease-in-out h-auto duration-700 translate-y-0 block";
const clear = "h-0 invisible ease-in-out -translate-y-2";

function Accordion({ content, header }) {
  const [Open, setOpen] = useState();
  return (
    <div
      onClick={() => setOpen(!Open)}
      className="Accordion-wrapper duration-700 border-y border-general-40 w-full cursor-pointer flex flex-col items-start"
    >
      <div className={`accordion w-full p-5 flex items-center justify-between duration-700`}>
        <div
          className={`${
            Open && "text-paraBold"
          } accordion-inner  text-general-100 text-para`}
        >
          {header}
        </div>
        <img src={arrow} alt="" />
      </div>

      <div className="accoridion-content-wrapper px-5">
        <div
          className={`${
            Open ? transition : clear
          } content text-para block text-general-90 mb-1 -translate-y-2`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
