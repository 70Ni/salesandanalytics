import React from "react";

const Ready = "bg-yellow-100 text-white";
const Shipped = "bg-general-80 text-white";
const Received = "bg-primary-100 text-white";

function OrderStatus({ status, name }) {
  return (
    <td>
      {status === "Received" ? (
        <div
          className={`orderStatus px-2 py-[2px] my-3 mx-2 para rounded text-center w-[70px] ${
            status === "Received" ? Received : null
          }`}
        >
          {status}
        </div>
      ) : (
        <div
          className={`orderStatus px-2 py-[2px] my-3 mx-2 para rounded text-center w-[70px] ${
            status === "Ready" ? Ready : Shipped
          }`}
        >
          {status}
        </div>
      )}
    </td>
  );
}

export default OrderStatus;
