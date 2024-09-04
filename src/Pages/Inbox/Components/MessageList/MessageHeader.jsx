import React from "react";
import Status from "../User/Status";
import user from "../../../../Images/Icons/02 Common/02 User.svg";
import video from "../../../../Images/Icons/10 Media/09 Camera.svg";
import settings from "../../../../Images/Icons/02 Common/01 Settings.svg";

function MessageHeader() {
  return (
    <div className="message-header w-full">
      <div className="content flex justify-between items-center w-full">
        <div className="name-status flex items-center relative">
          <div className="name text-paraBold text-general-100">
            Luis Pittman
          </div>
          <div className="status-wrapper relative pr-5 pb-4">
            <Status />
          </div>
        </div>
        <div className="action-section flex gap-5">
          <img src={user} alt="" />
          <img src={video} alt="" />
          <img src={settings} alt="" />
        </div>
      </div>
      <div className="border-[0.5px] border-general-50 mt-6"></div>
    </div>
  );
}

export default MessageHeader;
