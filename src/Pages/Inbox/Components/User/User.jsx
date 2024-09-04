import React from "react";
import image from "../../../../Images/Image.jpg";
import Status from "./Status";

const mediumSize = "h-12 w-12";
const smallSize = "h-9 w-9";

function User({ online, profile, small }) {
  return (
    <div className={`${small ? smallSize : mediumSize} relative`}>
      <img src={image} alt="" className="rounded-full relative " />
      {online ? <Status /> : null}
    </div>
  );
}

export default User;
