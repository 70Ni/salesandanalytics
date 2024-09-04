import React from "react";

function Text() {
  return (
    <div>
      <div className={`text-right mr-4 message-time`}>
        <div
          className={`Chat p-3 bg-general-40 rounded text-text2reg w-fit text-general-100`}
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

export default Text;
