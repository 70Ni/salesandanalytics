import React, { Component, useState, useEffect } from "react";
import Badge from "./Badge";
import KnowledgeIcon from "../../Images/IconComponents/KnowledgeIcon";
import OrderIcon from "../../Images/IconComponents/OrderIcon";
import { activate } from "firebase/remote-config";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

// 0F0F34
const generalColor = "text-general-80";
const ActivebgColor = "bg-primary-90";
const bgColor = "bg-general-30";
const iconActive = "#fff";
const iconPassive = "#5A607F";
const activeColor = "text-white";
const hover = "hover:bg-general-40";

function Navigation({ item, link, icon, open }) {
  let Icon = icon;
  const location = useLocation();
  const [Active, setActive] = useState("");

  const setLinkActive = (location) => {
    // console.log(location);
    return setActive(location.pathname);
  };

  useEffect(() => {
    setLinkActive(location);
    return () => {
      setLinkActive(location);
    };
  }, [Active]);
  // console.log(Active, "from State =========================");
  // console.log(location.pathname);

  // console.log(Active, location.pathname);

  return (
    <Link to={link}>
      <div
        key={location.key}
        className={`NavItem p-3 py-[10px] flex items-center justify-between ${
          link === location.pathname && ActivebgColor
        } rounded cursor-pointer ${link !== location.pathname ? hover : ""} `}
      >
        <div className="left flex  items-center">
          {/* <img src={icon} alt="icon" /> */}
          {/* <icon /> */}
          <Icon color={link === location.pathname ? iconActive : iconPassive} />
          {open ? (
            <div
              className={`item-Name ${
                open ? "visible" : "invisible"
              } text-text2med whitespace-nowrap ${
                link === location.pathname ? "text-white" : "text-general-80"
              } mx-4`}
            >
              {item}
            </div>
          ) : null}
        </div>
        {/* <div className="right">
          <Badge />
        </div> */}
      </div>
    </Link>
  );
}

export default Navigation;
