import React from "react";

function GraphDetails() {
  return (
    <div className="data-list">
      <div className="wrper">
        <div className="country-wrapper flex items-center mt-5">
          <div
            className="color h-3 w-3 rounded-sm mr-2"
            style={{ backgroundColor: "#1E5EFF" }}
          ></div>
          <div className="country para">United States</div>
        </div>
        <div className="text-Heading6 mt-1 ml-5">29.051</div>
      </div>
    </div>
  );
}

export default GraphDetails;
