import React from "react";

function IconInput({ title, placeholder, id, name, Icon }) {
  return (
    <div className="flex flex-col items-start w-full relative min-w-[158px]">
      <label className="text-general-80 mb-1 text-text2reg">{title}</label>
      <img src={Icon} alt={name} className="absolute top-11 right-4" />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="
        px-4 py-2
        border-2 
        border-general-50
        text-general-60
        rounded
        text-para
        focus:outline-primary-100
        w-full"
      />
    </div>
  );
}

export default IconInput;
