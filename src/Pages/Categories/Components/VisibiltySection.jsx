import React from "react";
import CheckBox from "../../../Components/Others/CheckBox";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";

function VisibiltySection() {
  return (
    <div className="Category-Card  card">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Categories Visibility
      </div>

      <div className="text-para text-general-100 text-left mt-5 cursor-pointer flex items-center">
        <ToggleButton />
        <div className="ml-3 ">Visible on site </div>
      </div>
    </div>
  );
}

export default VisibiltySection;
