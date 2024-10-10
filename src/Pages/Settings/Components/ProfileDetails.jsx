import React from "react";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import FileInput from "../../../Components/FileInput/FileInput";

function ProfileDetails() {
  return (
    <div className="flex flex-col gap-p24">
      <div className="header subHeader2 text-left">
        Profile Details
        <div className="para mb-2 text-left">
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
