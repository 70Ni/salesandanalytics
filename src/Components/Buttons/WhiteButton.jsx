import React from "react";

let Icons =
  "container flex w-full items-center px-5 py-3 rounded justify-center border-[1px] border-general-50 cursor-pointer";
let text =
  "container  w-full flex items-center px-6 py-3 rounded justify-center border-[1px] border-general-50 cursor-pointer";

function WhiteButton(props) {
  return (
    <div className={props.icon ? Icons : text}>
      <img src={props.icon} alt="" className="mr-[10px]" />
      {props.icon ? props.icon : null}
      <div className=" text-primary-100 text-para text ml-1">{props.text}</div>
    </div>
  );
}

export default WhiteButton;
