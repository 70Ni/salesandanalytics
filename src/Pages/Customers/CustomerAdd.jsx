import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import ProductEdits from "../../Components/ProductEdits/ProductEdits";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import InputFlex from "./Components/InputFlex";
import CustomerInformation from "./Components/CustomerInformation";
import CustomerAddress from "./Components/CustomerAdress";
import Input from "../../Components/Input/Medium/Input";
import CustomerNotes from "./Components/CustomerNotes";

function CustomerAdd() {
  return (
    <div className=" outer-container w-full mx-10">
      <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100">
          Add Product
        </div>
        <div className="Action-buttons-wrapper">
          <PrimaryButton text="Hello" />
          //button small and actions to add
        </div>
      </div>
      <div className="Container-inner flex">
        <div className="Main-section border border-general-50 rounded-md p-7 basis-9/12">
          <div className="product-adder-card flex flex-col gap-[30px]">
            <CustomerInformation />
            <CustomerAddress />
            <CustomerNotes />
          </div>
          {/* <div className="product-adder-card p-7">
          <div className="border border-general-50"></div>
        </div> */}
        </div>
        <div className="Side-section flex flex-col  basis-3/12 gap-[30px]"></div>
      </div>
    </div>
  );
}

export default CustomerAdd;
