import React from "react";
import searchIcon from "../../../Images/Icons/01 Actions/16 Search.svg";

function SearchInput({ title, placeholder, id, name }) {
  return (
    <div className="flex flex-col items-start w-full min-w-[158px] relative">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <img src={searchIcon} alt={name} className="absolute top-[14px] left-4" />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={"Search"}
        className="
      px-4 py-2 
      pl-12
      border
      border-general-50
      text-general-100
      rounded
      focus:outline-primary-100
      w-full
      "
      />
    </div>
  );
}

export default SearchInput;
