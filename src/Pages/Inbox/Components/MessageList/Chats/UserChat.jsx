import React from "react";
import User from "../../User/User";
import Text from "../ChatTypes/Text";
import Image from "../ChatTypes/Image";

function UserChat({ text }) {
  return (
    <div className="chat-section flex justify-end w-full">
      {text ? <Text /> : <Image />}
      <User small />
    </div>
  );
}

export default UserChat;
