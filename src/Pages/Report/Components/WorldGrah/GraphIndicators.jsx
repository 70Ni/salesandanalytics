import React, { useState } from "react";

function GraphIndicators({ TooltipContent }) {
  return (
    <div>
      <div className="info bg-white absolute bottom-4 left-4 m-auto text-text3reg text-general-70 p-p12 p-2 shadow rounded-md w-fit max-[768px]:hidden">
        alt scroll for zoom
      </div>
      <div className="center-wrapper flex items-center m-auto justify-center w-full relative">
        <div
          className={` info bg-white  shadow absolute top-2 right-10 m-auto para p-p12 p-2  rounded-md w-fit max-[340px]:hidden
            ${
              TooltipContent !== "Hover over a country"
                ? "text-general-90"
                : "text-general-70"
            }`}
        >
          {TooltipContent}
        </div>
      </div>
    </div>
  );
}

export default GraphIndicators;
