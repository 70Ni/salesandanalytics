import React, { useState } from "react";
import getNav from "../../../../src/utils/SectionNav";

function SectionNav({ Sections, action }) {


  const [SetLink, setSetLink] = useState(Sections[0]);
  const SectionSelector = (e) => {
    setSetLink(e.target.innerHTML);
  };

  const active = "text-primary-100 border-primary-100";
  const passive = "text-general-80";
  // const Sections = ["Profile", "Navigation", "Account", "Settings"];

  return (
    <div className="item-wrapper flex gap-8 relative h-fit w-full border-b mb-5">
      {Sections.map((item) => {
        return (
          <div
            className={` ${
              SetLink === item ? active : passive
            } tab-item  duration-300 h-fit text-para pb-4  border-b-2  cursor-pointer`}
            onClick={(e) => {
              return SectionSelector(e), action&&action(e.target.innerHTML);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default SectionNav;
