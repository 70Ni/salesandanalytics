import React, { useState } from "react";
import arrow from "../../Images/Icons/08 Arrows/08 Down.svg";
import clear from "../../Images/Icons/01 Actions/08 Close.svg";

function Select({ options,title }) {
  const [select, setselect] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="text-general-80 mb-1 text-text2reg" for="fname">
        {title}
      </label>
      <div
        onClick={() => setOpen(!open)}
        className="relative w-full cursor-pointer px-4 py-2 rounded border border-general-50"
      >
        <div className="select flex justify-between items-center">
          <div
            className={`placeholder-text text-para text-general-60 ${
              select && "text-general-90"
            }`}
          >
            {select ? select : "Choose"}
          </div>
          <img src={arrow} alt="" className="arrow" />
        </div>
      </div>
      {open && (
        <div className="wrapper absolute top-10 w-full">
          <div className="drop-down-wrapper flex flex-col border rounded shadow shadow-lg">
            {options.map((items) => {
              return (
                <div
                  onClick={() => {
                    return setselect(items), setOpen(false);
                  }}
                  className="drop-item  px-4 py-2 hover:bg-primary-30 rounded text-general-70 hover:text-general-90"
                >
                  {items}
                </div>
              );
            })}
            <div
              onClick={() => {
                return setselect(""), setOpen(false);
              }}
              className="clear-wrapper flex items-center justify-between px-2  hover:bg-primary-30  hover:text-general-90"
            >
              <div className="drop-item  px-1 py-4 rounded text-general-70">
                Clear All
              </div>
              <img src={clear} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
