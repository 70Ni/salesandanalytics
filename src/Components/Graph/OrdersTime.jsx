import React from "react";
import LineGraph from "./LineGraph";
import image from "../../api/Products.json";
import Selection from "../../Components/Select/Select";
import CardHeader from "../CardHeader/CardHeader";

function OrdersTime() {
  return (
    <div className="ordersOverTime card basis-10/12">
      <div className="header-section">
        <div className="Heading-duration-wrapper flexbt ">
          {/* <div className="heading subHeader2">Orders Over Time</div> */}
          <CardHeader Header={"Orders Over Time"} />
          <div className="date-range para">
            <Selection
              placeholder={"Last 7 day"}
              options={["Last Day","Last 7 days"]}
            />
          </div>
        </div>
        <div className="Graph-details-dashboard flexbt mb-base">
          <div className="order-section flex">
            <div className="order-det-span flex flex-col items-start mr-10">
              <div className="subHeader ">645</div>
              <div className="para">Orders on May 22</div>
            </div>
            <div className="order-det-span flex flex-col items-start mr-5">
              <div className="subHeader">472</div>
              <div className="para">Orders on May 21</div>
            </div>
          </div>
          <div className="graph-indicators flex">
            <div className="graph-ind  flex items-center para mr-5">
              <div className="grph-item h-3 w-3 rounded-sm bg-primary-100 mr-2"></div>
              <div className="grph-name para">May 22</div>
            </div>
            <div className="graph-ind  flex items-center para ">
              <div className="grph-item h-3 w-3 rounded-sm bg-general-40 mr-2"></div>
              <div className="grph-name para">May 21</div>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-section relative">
        <LineGraph />
      </div>
    </div>
  );
}

export default OrdersTime;
