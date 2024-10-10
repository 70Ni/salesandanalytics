import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import TextInput from "../../../Components/Input/Large/TextInput";

function ProductSection() {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full bg-white">
      <div className="header text-paraBold text-general-100 mb-p24 text-left">
        SEO Settings
      </div>
      <div className="flex flex-col gap-p20">
        <Input title={"Title"} />
        <TextInput title={"Description"} />
      </div>
    </div>
  );
}

export default ProductSection;
