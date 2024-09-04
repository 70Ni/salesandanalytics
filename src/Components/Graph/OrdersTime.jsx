import React from "react";
import LineGraph from "./LineGraph";
import image from "../../api/Products.json";

function OrdersTime() {
  return (
    <div className="ordersOverTime card basis-10/12">
      <div className="header-section">
        <div className="Heading-duration-wrapper flexbt mb-6">
          <div className="heading subHeader2">
            Orders Over Time
          </div>
          <div className="date-range para">
            last 7 days
          </div>
        </div>
        <div className="Graph-details-dashboard flexbt mb-7">
          <div className="order-section flex">
            <div className="order-det-span flex flex-col items-start mr-10">
              <div className="subHeader ">645</div>
              <div className="para">
                Orders on May 22
              </div>
            </div>
            <div className="order-det-span flex flex-col items-start mr-5">
              <div className="subHeader">472</div>
              <div className="para">
                Orders on May 21
              </div>
            </div>
          </div>
          <div className="graph-indicators flex">
            <div className="graph-ind  flex items-center text-text2reg mr-5">
              <div className="grph-item h-3 w-3 rounded-sm bg-primary-100 mr-2"></div>
              <div className="grph-name text-general-80">May 22</div>
            </div>
            <div className="graph-ind  flex items-center text-text2reg ">
              <div className="grph-item h-3 w-3 rounded-sm bg-general-40 mr-2"></div>
              <div className="grph-name text-general-80">May 21</div>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-section  relative">
        <LineGraph />
      </div>
    </div>
  );
}

export default OrdersTime;
