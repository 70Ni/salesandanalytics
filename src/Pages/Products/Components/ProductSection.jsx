import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import TextInput from "../../../Components/Input/Large/TextInput";

function ProductSection() {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Categories
      </div>
      <div className="flex flex-col gap-5">
        <Input title={"Title"} />
        <TextInput title={"Description"} />
      </div>
    </div>
  );
}

export default ProductSection;
