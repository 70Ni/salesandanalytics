import React from "react";

function TDHeader({ item }) {
  return <div className={`paraBold px-2 p-p12 ${item}`}>{item}</div>;
}

export default TDHeader;
