import React from "react";
import UserDetails from "../UserDetails/UserDetails";
import UserCard from "../User-section/UserCard";
import SearchInput from "../../../../Components/Input/Medium/SearchInput";

function UserList() {
  return (
    <div className="p-7">
      <div className="header-section">
        <div className="Header text-paraBold px-7 mb-5 text-general-100 text-left">
          Conversations
        </div>
        <div className="searchwrapper px-7 mb-6">
          <SearchInput />
        </div>
      </div>
      <div className="userlist-wrapper  overflow-y-scroll max-h-screen no-scrollbar">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default UserList;
