import React from "react";

function DefaultCard({ header, content, cta }) {
  return (
      <div className="card-inner flex flex-1 bg-white">
        <div className="card-content border rounded-md p-7 flex-1">
          <div className="Header text-Heading6 mb-3 text-general-100 text-left ">
            {header}
          </div>
          <div className="content-wraper mb-p20 text-left">
            <div className="content text-text2reg flex-1 ">{content}</div>
          </div>
          <div className="content text-left text-text2reg text-primary-100 mb-3 cursor-pointer">
            {cta}{" "}
          </div>
        </div>
      </div>
  );
}

export default DefaultCard;
