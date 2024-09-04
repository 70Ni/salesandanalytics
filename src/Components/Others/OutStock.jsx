import React from "react";

function OutStock({ item }) {
  return (
    <td>
      {item ? (
        item
      ) : (
        <div
          className={`px-2 py-[2px] text-text2reg flex items-center justify-center text-general-80 bg-general-40 whitespace-nowrap w-fit rounded`}
        >
          Out of Stock
        </div>
      )}
    </td>
  );
}

export default OutStock;
