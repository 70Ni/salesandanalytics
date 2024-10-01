import React, { useRef, useState } from "react";
import arrow from "../../Images/Icons/08 Arrows/08 Down.svg";

const transition = "ease-in-out h-auto duration-700 translate-y-0 block mb-4";
const clear = "h-0 invisible ease-in-out -translate-y-2";

function Accordion(props) {
  const [Open, setOpen] = useState();

  console.log(Open);

  const ref = useRef(null);
  console.log(ref);
  return (
    <div
      ref={ref}
      key={props.id}
      onClick={(event) => console.log(ref.current.__reactFiber$lvm6asl8puo.key)}
      className="Accordion-wrapper duration-700 border-y border-general-40 w-full cursor-pointer flex flex-col items-start"
    >
      <div
        className={`accordion w-full p-p20 flex items-center justify-between duration-700`}
      >
        <div
          className={`${
            Open && "text-paraBold font-Inter"
          } accordion-inner  text-general-100 text-para font-Inter`}
        >
          {/* {header} */}
        </div>
        <img src={arrow} alt="" />
      </div>

      <div className="accoridion-content-wrapper p-p20">
        <div
          className={`${
            Open ? transition : clear
          } content subHeader3 block mb-1 -translate-y-2`}
        >
          ehlll
          {/* {content} */}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
