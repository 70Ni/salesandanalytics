import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import InputFlex from "../../Customers/Components/InputFlex";
import CardHeader from "../../../Components/CardHeader/CardHeader";

function CouponInformation() {
  return (
    <div className="customer-information-section">
      <CardHeader
        Header="Coupon Information"
        Para="Code will be used by users in checkout"
      />
      <div className="product-wrapper flex flex-col mb-3">
        <InputFlex
          title={["Coupon Code", "Coupon Name"]}
          placeholder={["Shipfree20", "Free Shipping"]}
        />
        {/* <InputFlex title={  ["Email Address", "Phone Number"]} /> */}
      </div>
    </div>
  );
}

export default CouponInformation;
