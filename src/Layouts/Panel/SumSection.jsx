import React from "react";
import SumCard from "../../Components/SumCards/SumCard";
import summary from "../../api/Summary.json";

function SumSection() {
  console.log(summary[1].orders.map((x) => x));
  return (
    <div>
      <div className="flex m-7 rounded-md border box-border max-[1128px]:flex-wrap flexNfifty">
        {summary[1].orders.slice(0, 2).map((x) => {
          return (
            <div className="w-full  border" id="firstitem" >
              <SumCard data={x} />
            </div>
          );
        })}
        {summary[1].orders.slice(2, 4).map((x) => {
          return (
            <div className="w-full max-[1128px]:border-t border">
              <SumCard data={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SumSection;
