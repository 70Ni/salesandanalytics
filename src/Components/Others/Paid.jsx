import React from "react";

const Pay = "bg-green-40 text-green-100";
const Pending = "bg-general-40 text-general-80";
const existing = "";

function Paid({ status, name }) {
  return (
    <div
      className={`px-2 py-[2px] my-3 mx-2 para rounded text-center w-[70px] ${
        status === "Paid" ? Pay : Pending
      }`}
    >
      {status}
    </div>
  );
}

export default Paid;
