import React from "react";

const LargeSize = "w-clg h-clg";
const SmallSize = "w-cmd h-cmd";

// const smallSize = "(var--className)"
// or smallsize = IconbaseSize = var--className
// IconbaseSize = 15px

function Avatar({ Name, Large, classn }) {
  let letter = Name.charAt(0);
  return (
    <div className={`${classn + "avatar"} mr-4`}>
      <div className={Large ? LargeSize : SmallSize}>
        <div
          className={`${
            Large ? LargeSize : SmallSize
          } flex items-center justify-center   rounded-full mr-4 bg-general-60`}
        >
          <div className="text-Heading5 font-Inter text-white">{letter}</div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
