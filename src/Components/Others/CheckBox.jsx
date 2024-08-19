import React from "react";

function CheckBox() {
  return (
    <span>
      <input
        type="checkbox"
        className="w-5 h-5 border text-paraBold border-general-40 rounded bg-white checked:bg-blue-500 checked:border-0 flex justify-center items-center my-3 mx-2"
      />
      {/* <input
        type="checkbox"
        className="relative appearance-none shrink-0 w-5 h-5 border-[1px] border-general-50 rounded bg-white checked:bg-blue-500 checked:border-0"
      /> */}
    </span>
  );
}

export default CheckBox;
