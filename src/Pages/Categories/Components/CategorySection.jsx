import React from "react";
import Input from "../../../Components/Input/Medium/Input";

function CategorySection() {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Categories Info
      </div>
      <div className="product-name-input pb-6 w-full">
        <Input
          placeholder="Enter a Category"
          title="Category Name"
          id="Product-Name-input"
          Name="product"
        />
      </div>
      ///image section
      ///Save section
    </div>
  );
}

export default CategorySection;
