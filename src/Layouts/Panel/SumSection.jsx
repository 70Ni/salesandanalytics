import React from "react";
import SumCard from "../../Components/SumCards/SumCard";
import summary from "../../api/Summary.json";

function SumSection() {
  return (
    <div>
      <div className="flex rounded-md border box-border max-[1128px]:flex-wrap bg-white">
        {summary[1].orders.slice(0, 2).map((x) => {
          return (
            <div className="w-full border-[0.5px] border-general-40">
              <SumCard data={x} />
            </div>
          );
        })}
        {summary[1].orders.slice(2, 4).map((x) => {
          return (
            <div className="w-full border-[0.5px] border-general-40">
              <SumCard data={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SumSection;
