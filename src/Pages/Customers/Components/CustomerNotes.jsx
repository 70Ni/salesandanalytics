import React from "react";
import InputFlex from "./InputFlex";
import Input from "../../../Components/Input/Medium/Input";
import TextInput from "../../../Components/Input/Large/TextInput";

function CustomerNotes() {
  return (
    <div className="customer-information-section">
      <div className="header text-paraBold text-general-100 text-left">
        Customer Notes
      </div>
      <div className="text-para text-general-80 mt-1 text-left mb-6">
        Add notes about customer{" "}
      </div>
      <div className="product-wrapper flex flex-col gap-6 pb-10">
        <TextInput title={"Notes"} placeholder={"Add notes about customer"} />
      </div>
      {/* <div className="border-b-[1px] border-general-40"></div> */}
    </div>
  );
}

export default CustomerNotes;
