import React from "react";
import logo from "../../Images/Logo/Logo.svg";
import logoName from "../../Images/Logo/Modernize.svg";
import SearchInput from "../Input/Medium/SearchInput";
import ChatIcon from "../../Images/IconComponents/InboxIcon";
import BellIcon from "../../Images/IconComponents/Notification";
import Avatar from "../../Images/avatar.png";
import Badge from "../Navigation/Badge";
import Notify from "../../Pages/Inbox/Components/Notify/Notify";
import dropdownIcon from "../../Images/Icons/08 Arrows/08 Down.svg";
import SearchIcon from "../../Images/IconComponents/SearchIcon";
import FooterAction from "../FooterSave/FooterAction";

function TopBar() {
  return (
    <div className="flex fixed top-0 right-0 z-10 items-center w-full justify-between md:px-9 px-3 py-4 bg-white h-fit border border-b shadow-sm">
      {/* logo-search section */}
      <div className="logo-search flex items-center max-w-[800px]">
        <div className="logo flex">
          <div className="logo h-10 w-10  mr-2">
            <img src={logo} alt="logo" className="h-10 w-10" />
          </div>

          <img
            className="logoname max-md:hidden"
            src={logoName}
            alt="modernize logo"
          />
        </div>
        <div className="search-wrapper max-md:ml-0 mx-5 max-[542px]:max-w-52 max-[428px]:hidden">
          <SearchInput />
        </div>
      </div>
      {/* icon Section - chat and notification  */}
      <div className="action-section flex items-center ">
        <div className="chat-notification-wrapper flex cursor-pointer gap-5 mr-9 max-[692px]:mr-4">
          <div className="chat-wrapper relative">
            <ChatIcon color={"#7E84A3"} />
            <div className="badge absolute -top-2 -right-1">
              <Notify value="5" />
            </div>
          </div>
          <div className="chat-wrapper relative">
            <BellIcon color={"#7E84A3"} />
            <div className="badge absolute -top-2 -right-0">
              <Notify value="5" />
            </div>
          </div>
          <div className="chat-wrapper relative hidden max-[428px]:block">
            <SearchIcon color={"#7E84A3"} />
          </div>
        </div>
        {/* prifile section */}
        <div className="profile-action-wrapper flex items-center">
          <div className="profile-section flex items-center">
            <div className="avatar-wrapper h-9 w-9">
              <img
                src={Avatar}
                alt="profile"
                className="h-9 w-9 cursor-pointer"
              />
            </div>
            <div className="text-text2reg text-general-80  text-skin-base  ml-3 max-[692px]:hidden">
              X’eriya Ponald
            </div>
          </div>
          <img
            src={dropdownIcon}
            alt=""
            className="ml-5 cursor-pointer max-[692px]:ml-2"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
