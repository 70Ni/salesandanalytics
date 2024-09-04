import React from "react";
import ProfileDetails from "../Components/ProfileDetails";
import RegionalSetting from "../Components/RegionalSetting";

function ProfileLayout() {
  return (
    <div className="Profile-Details-Section gap-6 flex flex-col">
      <ProfileDetails />
      <div className="border-[0.5px] border-general-50 mt-4"></div>

      <RegionalSetting />
    </div>
  );
}

export default ProfileLayout;
