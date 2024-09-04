import React, { useState } from "react";

function GraphIndicators({ TooltipContent }) {
  return (
    <div>
      <div className="info bg-white absolute bottom-4 m-auto text-text3reg text-general-70 px-3 p-2 shadow rounded-md w-fit">
        alt scroll for zoom
      </div>
      <div className="center-wrapper flex items-center m-auto justify-center w-full relative">
        <div className="info bg-white absolute top-16 left-10 m-auto text-text2reg text-general-90 px-3 p-2  rounded-md w-fit">
          {TooltipContent}
        </div>
      </div>
    </div>
  );
}

export default GraphIndicators;
