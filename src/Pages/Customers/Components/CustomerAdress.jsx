import React from "react";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import Input from "../../../Components/Input/Medium/Input";

function CustomerAddress() {
  return (
    <div className="customer-information-section">
      <div className="header text-paraBold text-general-100 text-left">
        Customer Address
      </div>
      <div className="text-para text-general-80 mt-1 text-left mb-p24">
        Shipping address information{" "}
      </div>
      <div className="product-wrapper flex flex-col gap-p24 pb-10  border-b-[1px]">
        <InputFlex title={["Address", "Apartment"]} />
        <div className="flex gap-p24 max-[920px]:flex-col">
          <div className="input-wrapper w-1/2 max-[920px]:w-full">
            <Input title={"City"} />
          </div>
          <InputFlex title={["Country", "Postal Code"]} />
          {/* <div className="flex gap-p24">
            <Input title={"Country"} />
            /// 
            <Input title={"Postal Code"} />
            </div> */}
        </div>
        <div className="input-wrapper w-1/2 flex gap-p24 max-[920px]:w-full">
          <Input title={"Phone"} />
        </div>
      </div>
      {/* <div className="border-b-[1px] border-general-40"></div> */}
    </div>
  );
}

export default CustomerAddress;
