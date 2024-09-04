import React from "react";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";

function Notification({ header, content }) {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="header text-paraBold text-general-100 text-left">
        {header}
        <div className="para text-text2reg text-general-80 mt-1 text-left">
          {content}
        </div>
      </div>
      <ToggleButton />
    </div>
  );
}

export default Notification;
