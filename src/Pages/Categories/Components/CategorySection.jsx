import React from "react";
import Input from "../../../Components/Input/Medium/Input";
import FileInput from "../../../Components/FileInput/FileInput";

function CategorySection() {
  return (
    <div className="Category-Card card">
      <div className="header subHeader2 mb-p24 text-left">Categories Info</div>
      <div className="product-name-input pb-6 w-full">
        <Input
          placeholder="Enter a Category"
          title="Category Name"
          id="Product-Name-input"
          Name="product"
        />
      </div>
      <FileInput />
    </div>
  );
}

export default CategorySection;
