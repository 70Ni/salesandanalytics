import React from "react";
import Notification from "../Components/Notification";
import Input from "../../../Components/Input/Medium/Input";
import InputFlex from "../../Customers/Components/InputFlex";
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
      <div className="flex justify-between items-center">
        <div className="header text-paraBold text-general-100 hover:bg-general-30 cursor-pointer w-full p-5 rounded-lg text-left">
          Logout
          <div className="para text-text2reg text-general-80 mt-1 text-left">
            Logout from the account
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center hover:bg-general-30 cursor-pointer w-full p-5">
        <div className="header text-paraBold text-red-80  rounded-lg text-left">
          Deactivate Account
          <div className="para text-text2reg text-red-70 mt-1 text-left">
            Permanently Remove your Account
          </div>
        </div>
        <DeleteIcon color={"#F0142F"} />
      </div>
    </div>
  );
}

export default AccountSection;
