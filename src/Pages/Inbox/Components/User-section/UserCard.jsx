import React from "react";
import Tags from "../../../../Components/Tags/Tags";
import Badge from "../../../../Components/Navigation/Badge";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";

function UserCard() {
  return (
    <div className="flex items-center gap-p16 px-7 py-p24 hover:bg-primary-30">
      <User  online />
      <UserDetails />
    </div>
  );
}

export default UserCard;
