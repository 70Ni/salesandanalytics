import React from "react";
import CheckBox from "../../../Components/Others/CheckBox";

function VisibiltySection() {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Categories Visibility
      </div>

      <div className="text-para text-general-100 text-left mt-5 cursor-pointer">
        Visible on site{" "}
      </div>
    </div>
  );
}

export default VisibiltySection;
