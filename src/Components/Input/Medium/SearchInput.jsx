import React, { useState } from "react";
import searchIcon from "../../../Images/Icons/01 Actions/16 Search.svg";
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import filteredKeys from "../../../Actions/searchAction";

function SearchInput({ title, placeholder, id, name }) {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-start w-full min-w-[158px] relative">
      {title && (
        <label className="text-general-80 mb-1 text-text2reg" for="fname">
          {title}
        </label>
      )}
      <img src={searchIcon} alt={name} className="absolute top-[10px] left-4" />
      <input
        onChange={(e) =>
          // dispatch((filteredKeys)=>({ type: "SEARCH", payload: e.target.value }))
          dispatch({
            type: "SEARCH",
            payload: e.target.value,
          })
        }
        type="text"
        id={id}
        name={name}
        placeholder={"Search"}
        className="
      px-p16 py-2 
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
