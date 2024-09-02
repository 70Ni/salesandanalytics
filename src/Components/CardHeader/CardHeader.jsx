import React from "react";

function CardHeader({ Header, Para }) {
  return (
    <div className="header-section-wrapper mb-6">
      <div className="header subHeader2 text-left">{Header}</div>
      <div className="para mt-1 text-left">{Para}</div>
    </div>
  );
}

export default CardHeader;
