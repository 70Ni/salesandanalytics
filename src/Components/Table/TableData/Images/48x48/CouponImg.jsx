import React from "react";
import coupon from "../../../../../Images/Icons/05 Finance/08 Tag.svg";
import truck from "../../../../../Images/Icons/02 Common/15 Truck.svg";

const shippingBG = "bg-primary-90";
const couponBG = "bg-general-70";

function CouponImg({ category }) {
  console.log(category);
  return (
    <>
      {category === "Discount" ? (
        <div className="h-12 w-12 mr-4">
          <div
            className={` ${couponBG}  w-12 h-12 flex items-center justify-center rounded mr-4`}
          >
            <img src={coupon} alt="" className="z-0" />
          </div>
        </div>
      ) : (
        <div className="h-12 w-12 mr-4">
          <div
            className={` ${shippingBG}  w-12 h-12 flex items-center justify-center rounded mr-4`}
          >
            <img src={truck} alt="" className="z-0" />
          </div>
        </div>
      )}
    </>
  );
}

export default CouponImg;
