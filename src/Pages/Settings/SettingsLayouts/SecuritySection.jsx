import React from "react";
import securityImage from "../../../Images/secure.svg";

function SecuritySection() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <img src={securityImage} alt="" />
      <div className="text-wrapper flex flex-col items-center">
        <div className="text-primary-100 text-Subtitle1 mb-1">
          All items are secured
        </div>
        <div className="text-general-80 text-para">
          You will be notified if any vulnerabilities found
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
