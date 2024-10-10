import React from "react";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";

function Notification({ header, content }) {
  return (
    <div className="flexbt py-p24">
      <div className="header subHeader2 text-left">
        {header}
        <div className="para mt-1 text-left">
          {content}
        </div>
      </div>
      <ToggleButton />
    </div>
  );
}

export default Notification;
