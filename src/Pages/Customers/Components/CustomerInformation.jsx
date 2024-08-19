import React from "react";
import InputFlex from "./InputFlex";
import Input from "../../../Components/Input/Medium/Input";

function CustomerInformation() {
  return (
    <div className="customer-information-section">
      <div className="header text-paraBold text-general-100 text-left">
        Customer Information
      </div>
      <div className="text-para text-general-80 mt-1 text-left mb-6">
        Most important information about the customer
      </div>
      <div className="product-wrapper flex flex-col gap-6 pb-10 border-b-[1px] border-general-40">
        <InputFlex title={["First Name", "Last Name"]} />
        <InputFlex title={["Email Address", "Phone Number"]} />
        <div className="w-1/2">
          <Input title={"Phone"} />
        </div>
      </div>
   
    </div>
  );
}

export default CustomerInformation;
