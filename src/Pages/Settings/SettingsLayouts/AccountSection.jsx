import React from "react";
import Notification from "../Components/Notification";
import Input from "../../../Components/Input/Medium/Input";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import DeleteIcon from "../../../Images/IconComponents/DeleteIcon";

const settingList = [
  {
    header: "Logout",
    content: "Logout from the account",
    action: true,
  },
  {
    header: "Online Webinars",
    content: "Get notified about upcoming webinars",
    action: true,
  },
  {
    header: "New Features",
    content: "Updates about new features and product releases",
    action: true,
  },
  {
    header: "Security and Billing",
    content: "Account security and notifications about billing",
    action: true,
  },
  {
    header: "Marketing",
    content: "Receive marketing newsletters about our new products.",
    action: true,
  },
];
function AccountSection() {
  return (
    <div>
      {/* <InputFlex title={["Fist Name", "Last Name"]} placeholder={["First Name","Last Name"]} /> */}
      <div className="flexbt">
        <div className="header subHeader2 hover:bg-general-30 cursor-pointer w-full p-p20 rounded-lg text-left">
          Logout
          <div className="para mt-1 text-left">Logout from the account</div>
        </div>
      </div>
      <div className="flexbt hover:bg-general-30 cursor-pointer w-full p-p20">
        <div className="header subHeader2 text-red-80  rounded-lg text-left">
          Deactivate Account
          <div className="para text-red-70 mt-1 text-left">
            Permanently Remove your Account
          </div>
        </div>
        <DeleteIcon color={"#F0142F"} />
      </div>
    </div>
  );
}

export default AccountSection;
