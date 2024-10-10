import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import CouponCard from "../../../Components/CouponCard/CouponCard";
import CheckBoxFlex from "./CheckBoxFlex";
import HeaderSection from "../../../Components/Header-Section/HeaderSection";
import CardHeader from "../../../Components/CardHeader/CardHeader";

function CouponType() {
  return (
    <div className="customer-information-section">
      <CardHeader
        Header="Coupon Type"
        Para="Type of coupon you want to create"
      />
      <div className="product-wrapper flex flex-col gap-p24 pb-3">
        {/* <InputFlex title={  ["Email Address", "Phone Number"]} /> */}
        <div className="wrapper-coupon-types flex gap-p24 w-full">
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
        <InputFlex
          title={["Discount Value", "Applies to"]}
          placeholder={["Amount", "Choose"]}
        />
        <InputFlex
          title={["Duration", "Usage Limits"]}
          placeholder={["Set Duration", "Amount of uses"]}
        />
        <CheckBoxFlex
          content={["Don't set duration", "Don't limit amout of uses"]}
        />
      </div>
    </div>
  );
}

export default CouponType;
