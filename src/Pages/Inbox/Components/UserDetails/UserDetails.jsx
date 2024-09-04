import React from "react";
import Notify from "../Notify/Notify";

function UserDetails() {
  return (
    <div>
      <div className="w-[230px]">
        <div className="Name-details-wrapper flex items-center justify-between">
          <div className="user-name text-text2Bold text-general-100">
            Tom Anderson
            <Notify value="8" />
          </div>
          <div className="text-text2reg text-general-60 ml-2">12:24 AM</div>
        </div>
        <div className="message text-text2reg text-left text-general-80 mt-1 truncate ...">
          Hello, I’m interested in this item you have mentioned
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
