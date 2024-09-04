import React, { useState } from "react";

const active = "bg-primary-100 duration-700 ease-in-out";
const passive = "bg-primary-40";
const transitionPassive = "ease-in-out duration-300";
const transitionActive = "translate-x-full ease-in-out duration-300";

function ToggleButton({ disable }) {
  const [Active, setActive] = useState();
  return (
    <div
      onClick={() => {
        !disable && setActive(!Active);
      }}
      className={`relative ${
        disable && "cursor-not-allowed"
      } wrapper relative cursor-pointer`}
    >
      <div
        className={`toggle-button h-7 w-12 rounded-full ${
          Active ? active : passive
        }`}
      >
        <div
          className={`${
            Active ? transitionActive : transitionPassive
          } round h-5 w-5 absolute m-1 shadow shadow-lg bg-white rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default ToggleButton;
