import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Icons from "../../api/Navigation";
import arrow from "../../Images/Icons/08 Arrows/06 Left.svg";

import KnowledgeIcon from "../../Images/IconComponents/KnowledgeIcon";
import OrderIcon from "../../Images/IconComponents/OrderIcon";

const MobNav = ({ mobNavState, mobNavClose, mobNavOpen }) => {
  const [open, setopen] = useState(true);
  const [belowTab, setBelowTab] = useState(true);

  const navExpander = () => {
    setopen(!open);
  };

  // useEffect(() => {
  //   if (mobNavState) {
  //     setopen(true);
  //   }
  //   return () => {};
  // }, [mobNavState]);

  // console.log(Icons["main"].map((x) => x.item));

  // useEffect(() => {
  //   navState
  //     ? () => {
  //         return setopen(true);
  //       }
  //     : console.log("ntothin");
  // }, [navState]);

  // useEffect(() => {
  //   console.log(window.screen);
  //   if (window.innerWidth < 758) {
  //     setBelwoTab(true);
  //   }
  // }, [window.screen.width]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log(window.innerWidth);
  //     setBelowTab({
  //       width: window.innerWidth,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  console.log(mobNavState);
  return (
    <div
      className={
        mobNavState
          ? `Navigation wrapper fixed duration-700 translate-x-0 h-full`
          : "fixed top-0 -translate-x-56 h-full duration-700"
      }
    >
      <div className="p-p16 pt-20 bg-white border-r z-[4] h-full shadow-lg">
        <div
          className="opener rounded-full p-[2px] bg-white w-fit absolute -right-3 cursor-pointer max-[767px]:hidden"
          onClick={navExpander}
        >
          <img
            src={arrow}
            alt=""
            className={
              !open
                ? "-rotate-180 ease-in-out duration-500"
                : "rotate-0 ease-in-out duration-500"
            }
          />
        </div>
        <div className="wrapper mt-4">
          {/* <div
            onClick={() => {
              setopen(!open);
            }}
          ></div> */}
          <div className="mb-base">
            <div className="text-text3reg text-general-80 ml-1  mb-3">Main</div>
            {Icons.main.map((component, index) => {
              let Component = component.image;
              return (
                <Navigation
                  icon={Component}
                  item={component.item}
                  link={component.link}
                  open={open}
                  mobNavClose={mobNavClose}
                />
              );
            })}
          </div>
          <div className="mb-base">
            <div className="text-text3reg text-general-80  ml-1 mb-3">
              Other
            </div>
            {Icons["Other Information"].map((component, index) => {
              let Component = component.image;
              return (
                <Navigation
                  icon={Component}
                  item={component.item}
                  link={component.link}
                  open={open}
                  mobNavClose={mobNavClose}
                />
              );
            })}
          </div>
          <div className="mb-base">
            <div className="text-text3reg text-general-80 ml-1 mb-3">
              Settings
            </div>
            {Icons.settings.map((component, index) => {
              let Component = component.image;
              return (
                <Navigation
                  icon={Component}
                  item={component.item}
                  link={component.link}
                  open={open}
                  mobNavClose={mobNavClose}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
