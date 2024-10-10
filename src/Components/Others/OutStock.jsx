import React from "react";

function OutStock({ item, classn }) {
  return (
    <td className={classn}>
      {item ? (
        <div className="text-text2reg px-2 px-p16 text-general-100">{item}</div>
      ) : (
        <div
          className={`px-2 py-[2px] text-text2reg flex items-center justify-center text-general-80 bg-general-40 whitespace-nowrap w-fit rounded`}
        >
          Out Stock
        </div>
      )}
    </td>
  );
}

export default OutStock;
