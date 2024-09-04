import React from "react";
import CheckBox from "../../../Components/Others/CheckBox";

function CategorySection() {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full bg-white">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Categories
      </div>
      {["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map((item) => {
        return (
          <div className="flex items-center">
            <CheckBox />
            <div className="text-para text-general-100 ml-3">{item}</div>
          </div>
        );
      })}
      <div className="text-para text-primary-100 text-left mt-5 cursor-pointer">
        Create New
      </div>
    </div>
  );
}

export default CategorySection;
