import React from "react";

function TDHeader({ item }) {
  return <div className={`text-text2med px-2 py-3 text-general-100 ${item}`}>{item}</div>;
}

export default TDHeader;
