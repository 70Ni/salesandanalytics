import React from "react";

const LargeSize = "w-[72px] h-[72px]";
const SmallSize = "w-12 h-12";

// const smallSize = "(var--className)"
// or smallsize = IconbaseSize = var--className
// IconbaseSize = 15px

function Avatar({ Name, Large }) {
  let letter = Name.charAt(0);
  return (
    <div className={Large ? LargeSize : SmallSize}>
      <div
        className={`${
          Large ? LargeSize : SmallSize
        } flex items-center justify-center w rounded-full mr-4 bg-general-60`}
      >
        <div className="text-Heading5 text-white">{letter}</div>
      </div>
    </div>
  );
}

export default Avatar;
