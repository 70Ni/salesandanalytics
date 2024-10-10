import React, { useState } from "react";
import mobile from "../../../Images/Icons/07 Devices/01 Mobile portrait.svg";
import UpArrow from "../../../Images/IconComponents/UpArrow";
import CardHeader from "../../../Components/CardHeader/CardHeader";
import Lap from "../../../Images/Icons/07 Devices/05 Laptop.svg";
import Tab from "../../../Images/Icons/07 Devices/03 Tablet portrait.svg";
import Mob from "../../../Images/Icons/07 Devices/01 Mobile portrait.svg";

const devices = [
  { device: "Mobile", percentage: "62%", icon: Mob },
  { device: "Laptop", percentage: "20%", icon: Lap },
  { device: "Tablet", percentage: "13%", icon: Tab },
  { device: "others", percentage: "5%", icon: Lap },
];
function Devices() {
  return (
    <div className="outer-wrapper card">
      <CardHeader Header={"Visited by Devices"} />
      {devices.map((item) => {
        return (
          <div className="Devices-wrapper flexbt flex-wrap my-[14px]">
            <div className="device-name flex items-center mr-3">
              <img src={item.icon} alt="" className="mr-2" />
              <div className="name para">{item.device}</div>
            </div>
            <div className="wrapper">
              <div className="percent paraBold">{item.percentage}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Devices;
