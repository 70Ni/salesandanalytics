import React from "react";
import shirt from "../../../../../Images/Shits/shirt1.jpg";
import shirt2 from "../../../../../Images/Shits/shirt2.jpg";

function Image() {
  return (
    <div className="image-wrapper flex flex-col items-end justify-start mr-3">
      <div className="flex gap-p12">
        <img src={shirt} alt="" className="image h-24 w-24 rounded-[4px]" />
        <img src={shirt2} alt="" className="image h-24 w-24 rounded-[4px]" />
      </div>
      <span className="time text-left text-text3reg text-general-60 mt-2">
        12:24 AM
      </span>
    </div>
  );
}

export default Image;
