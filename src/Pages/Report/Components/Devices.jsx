import React, { useState } from "react";
import mobile from "../../../Images/Icons/07 Devices/01 Mobile portrait.svg";
import UpArrow from "../../../Images/IconComponents/UpArrow";
import CardHeader from "../../../Components/CardHeader/CardHeader";

function Devices() {
  return (
    <div className="outer-wrapper card basis-3/12">
      <CardHeader Header={"Visited by Devices"} />
      <div className="Devices-wrapper flex items-center justify-between my-[14px]">
        <div className="device-name flex items-center">
          <img src={mobile} alt="" className="mr-2" />
          <div className="name para">Mobile</div>
        </div>
        <div className="wrapper">
          <div className="percent text-text2Bold">62%</div>
        </div>
      </div>
      <div className="Devices-wrapper flexbt my-[14px]">
        <div className="device-name flex items-center">
          <img src={mobile} alt="" className="mr-2" />
          <div className="name text-text2reg text-general-80">Mobile</div>
        </div>
        <div className="wrapper">
          <div className="percent text-text2Bold">62%</div>
        </div>
      </div>
      <div className="Devices-wrapper flex items-center justify-between my-[14px]">
        <div className="device-name flex items-center">
          <img src={mobile} alt="" className="mr-2" />
          <div className="name text-text2reg text-general-80">Mobile</div>
        </div>
        <div className="wrapper">
          <div className="percent text-text2Bold">62%</div>
        </div>
      </div>
      <div className="Devices-wrapper flex items-center justify-between my-[14px]">
        <div className="device-name flex items-center">
          <img src={mobile} alt="" className="mr-2" />
          <div className="name text-text2reg text-general-80">Mobile</div>
        </div>
        <div className="wrapper">
          <div className="percent text-text2Bold">62%</div>
        </div>
      </div>
    </div>
  );
}

export default Devices;
