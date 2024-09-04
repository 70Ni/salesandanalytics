import React from "react";
import Status from "../User/Status";
import user from "../../../../Images/Icons/02 Common/02 User.svg";
import video from "../../../../Images/Icons/10 Media/09 Camera.svg";
import settings from "../../../../Images/Icons/02 Common/01 Settings.svg";
import MessageHeader from "./MessageHeader";
import User from "../User/User";
import ClientChat from "./Chats/ClientChat";
import UserChat from "./Chats/UserChat";
import Input from "../../../../Components/Input/Large/Input";
const client = "text-left ml-4";

function MessageList() {
  return (
    <div className="outer-message-wrapper p-7 w-full border-l-2">
      <MessageHeader />
      <div className="chat-wrapper flex flex-col gap-7 justify-between items-stretch w-full">
        <ClientChat />
        <UserChat text />
        <ClientChat />
        <UserChat text />
        <ClientChat />
        <UserChat />
      </div>

      <div className="chat-input-section">
        <Input />
      </div>
    </div>
  );
}

export default MessageList;
