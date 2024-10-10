import React from "react";
import User from "../../User/User";

function ClientChat() {
  return (
    <div className="chat-section flex">
      <User small />
      <div className={`text-left ml-4 message-time`}>
        <div
          className={`Chat p-p12 bg-primary-90 rounded text-text2reg w-fit text-white`}
        >
          Hi, I wonder when if there is going to be anything new for spring?
        </div>
        <span className="time text-left text-text3reg text-general-60 mt-2">
          12:24 AM
        </span>
      </div>
    </div>
  );
}

export default ClientChat;
