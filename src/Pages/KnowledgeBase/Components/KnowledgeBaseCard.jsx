import React from "react";
import illustration from "../../../Images/Illustration/order.svg";
function KnowledgeBaseCard() {
  return (
      <div className="card-inner min-w-[254px] bg-white rounded-lg w-full">
        <div className="card-content border border-general-50 rounded-md p-7">
          <img src={illustration} alt="" className="m-auto mb-7 w-[140px] h-[140px]" />
          <div className="Header text-Heading6 mb-6 text-general-100 text-left ">
            Getting Started
          </div>
          <div className="content-wraper mb-5 text-left">
            <div className="content text-text2reg mb-3">
              Guide to get started faster
            </div>
            <div className="content text-text2reg mb-3">
              Guide to get started faster
            </div>
            <div className="content text-text2reg mb-3">
              Guide to get started faster
            </div>
          </div>
          <div className="content text-left text-text2reg text-primary-100 mb-3 cursor-pointer">
            More Tutorials
          </div>
        </div>
      </div>
  );
}

export default KnowledgeBaseCard;
