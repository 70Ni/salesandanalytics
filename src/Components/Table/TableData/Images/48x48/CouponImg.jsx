import React from "react";
import coupon from "../../../../../Images/Icons/05 Finance/08 Tag.svg";
import truck from "../../../../../Images/Icons/02 Common/15 Truck.svg";

const shippingBG = "bg-primary-90";
const couponBG = "bg-general-70";

function CouponImg({ category }) {
  return (
      <div
        className={` ${
          category == "Discount" ? couponBG : shippingBG
        }  w-12 h-12 flex items-center justify-center rounded mr-4`}
      >
        <img src={category === "Discount" ? truck : coupon} alt="" className="z-10" />
      </div>
  );
}

export default CouponImg;
