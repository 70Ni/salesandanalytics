import React, { Component, useState, useEffect } from "react";
import Badge from "./Badge";
import KnowledgeIcon from "../../Images/IconComponents/KnowledgeIcon";
import OrderIcon from "../../Images/IconComponents/OrderIcon";
import { activate } from "firebase/remote-config";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const generalColor = "text-general-80";
const ActivebgColor = "bg-primary-90";
const bgColor = "bg-general-30";
const iconActive = "#fff";
const iconPassive = "#5A607F";
const activeColor = "text-white";

function Navigation({ item, link, icon, open }) {
  let Icon = icon;
  const [Active, setActive] = useState("/dashboard");

  const setLinkActive = (location) => {
    setActive(location.pathname);
  };

  useEffect(() => {
    setLinkActive(location);
    return () => {
      setLinkActive(location);
    };
  }, [Active]);

  const location = useLocation();
  // console.log(Active, location.pathname);

  return (
    <Link to={link} onClick={() => setLinkActive(location.pathname)}>
      <div
        key={location.key}
        className={`NavItem p-3 py-[10px] flex items-center justify-between ${
          Active === location.pathname && ActivebgColor
        } rounded cursor-pointer hover:bg-general-40`}
      >
        <div className="left flex items-center">
          {/* <img src={icon} alt="icon" /> */}
          {/* <icon /> */}
          <Icon
            color={Active === location.pathname ? iconActive : iconPassive}
          />
          {open ? (
            <div
              className={`item-Name text-text2med whitespace-nowrap ${
                Active === location.pathname ? activeColor : generalColor
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
