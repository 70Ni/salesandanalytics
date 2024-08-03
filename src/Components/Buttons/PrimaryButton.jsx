import React from "react";

let Icons =
  "container flex w-full items-center px-5 py-3 rounded bg-primary-100 justify-center";
let text =
  "container  w-full flex items-center px-6 py-3 rounded bg-primary-100 justify-center";

function PrimaryButton(props) {
  return (
    <div className={props.icon ? Icons : text}>
      <img src={props.icon} alt="" className="mr-1" />
      <div className=" text-white text-para text">{props.text}</div>
    </div>
  );
}

export default PrimaryButton;
