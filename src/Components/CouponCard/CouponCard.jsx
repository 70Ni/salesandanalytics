import React from "react";
import icons from "../../Images/Icons/02 Common/05 Heart.svg";
function CouponCard({ content, icon }) {
  return (
    <>
      <div className="max-w-[244px] w-full border border-[1px] rounded border-general-50 py-6 flex flex-col  items-center cursor-pointer hover:border-primary-70">
        <img src={icons} alt="" />
        <div className="text-para text-primary-100 mt-3">Fixed Discount</div>
      </div>
    </>
  );
}

export default CouponCard;
