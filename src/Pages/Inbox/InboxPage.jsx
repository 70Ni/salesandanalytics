import React from "react";
import User from "./Components/User/User";
import UserCard from "./Components/User-section/UserCard";
import UserDetails from "./Components/UserDetails/UserDetails";
import UserList from "./Components/UserList/UserList";
import MessageList from "./Components/MessageList/MessageList";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import AddIcon from "../../Images/IconComponents/AddIcon";

const HeaderData = [
  { header: "Create Coupon" },
  { backlink: "" },
  {
    buttons: [
      // {
      //   primary: true,
      //   buttonText: "Cancel",

      //   // icon: <Settings color={"#1E5EFF"} />,
      // },
      {
        primary: true,
        buttonText: "Create",
        action: {
          type: "Navigation",
          link: "/createCoupon",
        },
        icon: <AddIcon color={"#ffffff"} />,
      },
    ],
  },
];
function InboxPage() {
  return (
    <div className="outer-container w-full mx-10 relative">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Main-section flex border h-auto border-general-50 sticky top-[240px] rounded-md p-7 w-full bg-white">
        <UserList />
        <MessageList />
      </div>
    </div>
  );
}

export default InboxPage;
