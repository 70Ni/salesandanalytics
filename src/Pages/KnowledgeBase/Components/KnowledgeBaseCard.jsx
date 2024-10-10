import React from "react";
import illustration from "../../../Images/Illustration/order.svg";
function KnowledgeBaseCard() {
  return (
    <div className="w-full card kbcard">
      <img
        src={illustration}
        alt=""
        className="m-auto mb-base w-[140px] h-[140px]"
      />
      <div className="Header subHeader mb-p24 text-left ">Getting Started</div>
      <div className="content-wraper mb-p20 text-left">
        <div className="content para mb-3">Guide to get started faster</div>
        <div className="content para mb-3">Guide to get started faster</div>
        <div className="content para mb-3">Guide to get started faster</div>
      </div>
      <div className="content text-left para text-primary-100 mb-3 cursor-pointer">
        More Tutorials
      </div>
    </div>
  );
}

export default KnowledgeBaseCard;
