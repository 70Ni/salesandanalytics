import React from "react";
import Tags from "../../../../Components/Tags/Tags";
import Badge from "../../../../Components/Navigation/Badge";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";

function UserCard() {
  return (
    <div className="flex items-center gap-4 px-7 py-6 hover:bg-primary-30">
      <User  online />
      <UserDetails />
    </div>
  );
}

export default UserCard;
