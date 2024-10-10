import React from "react";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import Input from "../../../Components/Input/Medium/Input";

function CustomerInformation() {
  return (
    <div className="customer-information-section">
      <div className="header text-paraBold text-general-100 text-left">
        Customer Information
      </div>
      <div className="text-para text-general-80 mt-1 text-left mb-p24">
        Most important information about the customer
      </div>
      <div className="product-wrapper flex flex-col gap-p24 pb-10 border-b-[1px] border-general-40">
        <InputFlex title={["First Name", "Last Name"]} />
        <InputFlex title={["Email Address", "Phone Number"]} />
      </div>
   
    </div>
  );
}

export default CustomerInformation;
