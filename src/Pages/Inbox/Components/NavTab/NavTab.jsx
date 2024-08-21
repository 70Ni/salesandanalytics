import React, { useState } from "react";

function NavTab() {
  const [SetLink, setSetLink] = useState("Settings");
  const SectionSelector = (e) => {
    setSetLink(e.target.innerHTML);
  };
  console.log(SetLink);
  const active = "text-primary-100 border-primary-100";
  const passive = "text-general-80";
  const links = ["Profile", "Navigation", "Account", "Settings"];

  return (
    <div className="tabContainer h-fit w-full">
      <div className="item-wrapper flex gap-8 relative h-fit">
        {links.map((item) => {
          console.log(SetLink === item);

          return (
            <div
              className={` ${
                SetLink === item ? active : passive
              } tab-item  duration-300 h-fit text-para pb-4  border-b-2  cursor-pointer`}
              onClick={(e) => SectionSelector(e)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="w-full border-b-2 border-general-40 absolute top-[40px] -z-10"></div>
    </div>
  );
}

export default NavTab;
