import React from "react";
import LineGraph from "../../../../Components/Graph/LineGraph";
import CustomerGraph from "./CustomerGraph";
import CardHeader from "../../../../Components/CardHeader/CardHeader";
import GraphIndicator from "./GraphIndicator";

function CustomerGrowth() {
  return (
    <div className="ordersOverTime p-7 border flex flex-col justify-between border-general-40 w-full rounded-md relative bg-white mt-8">
      <div className="header-section mb-7">
        <div className="Heading-duration-wrapper flex items-center mb-6 justify-between">
          <CardHeader Header={"Orders Over Time"} />
          <div className="date-range text-text2reg text-general-80">
            Last 12 months
          </div>
        </div>
        <div className="Graph-details w-full flex items-end justify-between">
          <GraphIndicator />
        </div>
      </div>
      <div className="graph-section relative w-full">
        <CustomerGraph />
      </div>
    </div>
  );
}

export default CustomerGrowth;
