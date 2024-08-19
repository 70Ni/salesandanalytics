import React from "react";
import Input from "../../Components/Input/Medium/Input";
import Tags from "../../Components/Tags/Tags";

function TagSection({ taglist }) {
  return (
    <div className="Category-Card border p-7 border-general-50 rounded-md w-full">
      <div className="header text-paraBold text-general-100 mb-6 text-left">
        Tags
      </div>

      <Input placeholder={"Enter tag Name"} title={"Add Tags"} />
      <div className="tag-wrapper gap-2 flex flex-wrap mt-5">
        {taglist.map((x) => {
          return <Tags tagContent={x} />;
        })}
      </div>
    </div>
  );
}

export default TagSection;
