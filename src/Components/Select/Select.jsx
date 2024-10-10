import React, { useState } from "react";
import arrow from "../../Images/Icons/08 Arrows/08 Down.svg";
import clear from "../../Images/Icons/01 Actions/08 Close.svg";

function Select({ options, title, placeholder }) {
  console.log(options,placeholder)
  const [select, setselect] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-w-[150px]">
      {title && (
        <label className="para mb-1" for="fname">
          {title}
        </label>
      )}
      <div
        onClick={() => setOpen(!open)}
        className="relative w-full cursor-pointer px-p16 py-2 rounded border border-general-50"
      >
        <div className="select w-full flex justify-between items-center">
          <div
            className={`placeholder-text text-para text-general-60 ${
              select && "text-general-90"
            }`}
          >
            {select ? select : placeholder ? placeholder : "Choose"}
          </div>
          <div className="drop-down-icon-wrapper flex w-6">
            <img src={arrow} alt="" className="arrow" />
          </div>
        </div>
      </div>
      {open && (
        <div className="wrapper absolute top-10 w-full">
          <div className="drop-down-wrapper cursor-pointer flex flex-col border rounded shadow z-10 bg-white shadow-lg">
            {options.map((items) => {
              return (
                <div
                  onClick={() => {
                    return setselect(items), setOpen(false);
                  }}
                  className="drop-item  px-p16 py-2 hover:bg-primary-30 rounded text-general-70 hover:text-general-90"
                >
                  {items}
                </div>
              );
            })}
            <div
              onClick={() => {
                return setselect(""), setOpen(false);
              }}
              className="clear-wrapper flex items-center bg-white z-20 cursor-pointer  justify-between px-2  hover:bg-primary-30  hover:text-general-90 "
            >
              <div className="drop-item  py-1 px-p16 rounded text-general-70">
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
