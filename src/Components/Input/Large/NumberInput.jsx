import React from "react";

import AddIcon from "../../../Images/Icons/01 Actions/Increase.svg";
import RemIcon from "../../../Images/Icons/01 Actions/Decrease.svg";

function NumberInput({ title, id, name }) {
  const [Count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-start w-full min-w-[158px] relative">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <img
        src={AddIcon}
        alt={name}
        onClick={() => setCount(Count + 1)}
        className="absolute cursor-pointer top-[42px] left-4"
      />
      <img
        src={RemIcon}
        alt={name}
        onClick={() => setCount(Count - 1)}
        className="absolute cursor-pointer top-[42px] right-4"
      />
      <input
        type="Number"
        id={id}
        name={name}
        placeholder={Count}
        className="
        text-center
      px-p16 p-p12 
      pl-12
      border-2 
      border-general-50
      text-general-60
      text-para
      rounded
      focus:outline-primary-100
      w-full"
      />
    </div>
  );
}

export default NumberInput;
