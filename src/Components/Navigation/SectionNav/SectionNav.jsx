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
  // bg-gradient-to-l from-slate-600  via-transparent via-5% w-full
  return (
    <div className="overflow-x-scroll no-scrollbar w-full">
      {/* <div className="bg-gradient-to-l from-white absolute z-20  via-transparent via-5% w-full h-full right-0"></div> */}
      <div
        className={`item-wrapper flex items-center relative h-fit border-b mb-p20 w-auto`}
      >
        {/* <div className="border-b absolute w-full bottom-0"></div> */}
        {Sections.map((item) => {
          return (
            <div
              className={` ${
                SetLink === item ? active : passive
              } tab-item  duration-300 h-fit para pb-4 mr-8 border-b-2 cursor-pointer`}
              onClick={(e) => {
                return SectionSelector(e), action && action(e.target.innerHTML);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionNav;
