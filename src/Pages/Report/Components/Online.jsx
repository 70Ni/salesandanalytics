import React, { useState } from "react";
import mobile from "../../../Images/Icons/07 Devices/01 Mobile portrait.svg";
import UpArrow from "../../../Images/IconComponents/UpArrow";
import CardHeader from "../../../Components/CardHeader/CardHeader";

function Online() {
  return (
    <div className="outer-wrapper card basis-3/12">
      <CardHeader Header="Online Sessions" />
      <div className="Online-wrapper flex items-center mb-1">
        <div className="percent text-Heading6">62%</div>
        <UpArrow color={"#06A561"} />
      </div>
      <div className="wrapper">
        <div className="name text-text2reg text-general-80">Active Users</div>
      </div>
    </div>
  );
}

export default Online;
