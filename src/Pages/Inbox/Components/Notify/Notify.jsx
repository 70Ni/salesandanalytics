import React from "react";

function Notify({ value }) {
  return (
    <span className="tag px-1 bg-primary-100 text-text3Bold text-white rounded-full ml-2">
      {value}
    </span>
  );
}

export default Notify;
