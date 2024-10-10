import React from "react";
import { useNavigate } from "react-router-dom";

let Icons =
  "container flex w-full h-fit  items-center p-p20 p-p12 rounded justify-center border-[1px] border-general-50 cursor-pointer bg-white";
let text =
  "container  w-full h-fit flex items-center px-p24 p-p12 rounded justify-center border-[1px] border-general-50 cursor-pointer bg-white";

function WhiteButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!props.action) {
      console.log("Not defined");
    } else if (props.action.type === "Navigation") {
      navigate(props.action.link);
    }
  };
  return (
    <div className={props.icon ? Icons : text} onClick={handleClick}>
      {/* {props.icon && <img src={props.icon} alt="img" className="mr-[10px]" />} */}
      {props.icon ? props.icon : null}
      <div className=" text-primary-100 text-para text whitespace-nowrap">
        {props.text}
      </div>
    </div>
  );
}

export default WhiteButton;
