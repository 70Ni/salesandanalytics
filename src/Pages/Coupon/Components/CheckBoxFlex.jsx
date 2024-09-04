import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import InputFlex from "../../Customers/Components/InputFlex";
import CouponCard from "../../../Components/CouponCard/CouponCard";
import CheckBox from "../../../Components/Others/CheckBox";

function CheckBoxFlex({ content }) {
  return (
    <div className="Check-information-section flex items-center justify-start w-full">
      <div className="text-para text-general-100 text-left flex items-center flex-1">
        <CheckBox />
        <div className="content ml-3">{content[0]}</div>
      </div>
      <div className="text-para text-general-100 text-left flex items-center flex-1 ml-3">
        <CheckBox />
        <div className="content ml-3">{content[1]}</div>
      </div>
    </div>
  );
}

export default CheckBoxFlex;
