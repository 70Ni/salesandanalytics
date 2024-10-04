import React from "react";

function TextInput({ title, placeholder, id, name }) {
  return (
    <div className="flex flex-col items-start  w-full min-w-[158px]">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <textarea
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="
        px-p16 p-p12 
        border
        border-general-50
        text-general-60
        rounded
        focus:outline-primary-100
        w-full
        min-h-24"
      />
    </div>
  );
}

export default TextInput;
