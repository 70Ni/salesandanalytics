import React from "react";
import InputFlex from "../../Customers/Components/InputFlex";
import FileInput from "../../../Components/FileInput/FileInput";

function ProfileDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div className="header text-paraBold text-general-100 text-left">
        Profile Details
        <div className="para text-text2reg text-general-80 mb-2 text-left">
          Enter your profile information{" "}
        </div>
      </div>
      <FileInput header={"Profile Image"} />
      <InputFlex title={["First Name", "Last Name"]} />
      <InputFlex title={["Email Address", "Phone Number"]} />
    </div>
  );
}

export default ProfileDetails;
