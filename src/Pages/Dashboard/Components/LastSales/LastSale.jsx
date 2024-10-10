import React from "react";
import Graph from "../Graph";
import CardHeader from "../../../../Components/CardHeader/CardHeader";

function LastSale() {
  return (
    <div className="card flex flex-col justify-between items-stretch basis-2/12 relative">
      <div className="content-wrapper">
       
        <CardHeader
          Header="Last 7 Days Sales"
        />
        <div className="det-wrapper flex flex-col gap-p20 mt-6">
          <div className="order-det-span flex flex-col items-start mr-10">
            <div className="subHeader">1,259</div>
            <div className="para">Items Sold </div>
          </div>
          <div className="order-det-span flex flex-col items-start mr-10">
            <div className="subHeader">$12,546</div>
            <div className="para">Revenue </div>
          </div>
        </div>
        <div className="border my-8"></div>
      </div>
      <div className="graph-wrapper h-full flex flex-col justify-end">
        <Graph />
      </div>
    </div>
  );
}

export default LastSale;
