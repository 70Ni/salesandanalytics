import React from "react";
import LineGraph from "../../../../Components/Graph/LineGraph";
import CustomerGraph from "./CustomerGraph";
import CardHeader from "../../../../Components/CardHeader/CardHeader";
import GraphIndicator from "./GraphIndicator";
import Select from "../../../../Components/Select/Select";

function CustomerGrowth() {
  return (
    <div className="ordersOverTime card">
      <div className="header-section mb-p24">
        <div className="Heading-duration-wrapper flexbt mb-p24 ">
          <CardHeader Header={"Customer Growth"} />
          <div className="w-fit">
            <Select
              placeholder={"Last 12 months"}
              options={["Last 6 Months", "Previous year"]}
            />
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
