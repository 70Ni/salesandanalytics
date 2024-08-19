import React from "react";
import InputFlex from "./InputFlex";
import Input from "../../../Components/Input/Medium/Input";

function CustomerAddress() {
  return (
    <div className="customer-information-section">
      <div className="header text-paraBold text-general-100 text-left">
        Customer Address
      </div>
      <div className="text-para text-general-80 mt-1 text-left mb-6">
        Shipping address information{" "}
      </div>
      <div className="product-wrapper flex flex-col gap-6 pb-10  border-b-[1px]">
        <InputFlex title={["Address", "Apartment"]} />
        <div className="flex gap-6">
          <Input title={"City"} />
          <div className="flex gap-6">
            <Input title={"Country"} />
            ///
            <Input title={"Postal Code"} />
          </div>
        </div>
      </div>
      {/* <div className="border-b-[1px] border-general-40"></div> */}

    </div>
  );
}

export default CustomerAddress;
