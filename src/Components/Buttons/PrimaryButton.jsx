import React from "react";
import { useNavigate } from "react-router-dom";

let Icons =
  "container flex w-full h-fit items-center px-5 py-3 rounded bg-primary-100 justify-center cursor-pointer";
let text =
  "container  w-full h-fit flex items-center px-6 py-3 rounded bg-primary-100 justify-center cursor-pointer";

function PrimaryButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // if (props.action.type === "Navigation") {
    //   navigate(props.action.link); // Navigate to the About Page
    // } else if (props.action) {
    //   console.log("Not defined");
    // }
    if (!props.action) {
      console.log("Not defined");
    } else if (props.action.type === "Navigation") {
      navigate(props.action.link);
    }
  };

  return (
    <div className={props.icon ? Icons : text} onClick={handleClick}>
      {props.icon ? props.icon : null}
      {props.icon && <img src={props.icon} alt="" className="mr-1" />}
      <div className=" text-white text-para text whitespace-nowrap">
        {props.text}
      </div>
    </div>
  );
}

export default PrimaryButton;
