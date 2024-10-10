import React from "react";
import CloseIcon from "../../Images/IconComponents/CloseIcon";

function Tags({ tagContent, onClick }) {
  return (
    <div>
      <div className="text-text2reg p-p12 py-1 w-fit rounded text-general-80 bg-general-40 flex items-center gap-1">
        {tagContent}
        <div className="cursor-pointer">
          <CloseIcon color={"#5A607F"} />
        </div>
      </div>
    </div>
  );
}

export default Tags;
