import React from "react";

function FileInput({ title, placeholder, name }) {
  return (
    <div className="flex flex-col items-start w-full min-w-[158px]">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        placeholder={placeholder}
        className="
        px-p16 p-p12 
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

export default FileInput;
