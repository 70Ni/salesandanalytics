import React from "react";

function Input({ title, placeholder, id, name }) {
  return (
    <div className="flex flex-col items-start w-full min-w-[158px]">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="
        px-4 py-2 
        border-[1px] 
        border-general-50
        text-general-60
        rounded
        focus:text-general-80
        focus:outline-primary-100
        w-full
        text-para
        "
      />
    </div>
  );
}

export default Input;
