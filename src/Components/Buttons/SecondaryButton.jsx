import React from "react";

let Icons =
  "container flex items-center px-5 py-3 rounded bg-primary-40 w-fit cursor-pointer";
let text =
  "container flex items-center px-6 py-3 rounded bg-primary-40 w-fit cursor-pointer";

function SecondaryButton(props) {
  return (
    <div className={props.text ? text : Icons}>
      <img src={props.icon} alt="" className="mr-1" />
      {props.icon ? props.icon : null}
      <div className=" text-primary-100 text-para">{props.text}</div>
    </div>
  );
}

export default SecondaryButton;
