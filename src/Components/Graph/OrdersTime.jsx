import React from "react";
import LineGraph from "./LineGraph";
import image from "../../api/Products.json";

function OrdersTime() {
  return (
    <div className="ordersOverTime p-7 border border-general-40 rounded-md w-full relative">
      <div className="header-section mb-7">
        <div className="Heading-duration-wrapper flex items-center mb-6 justify-between">
          <div className="heading text-paraBold text-general-100">
            Orders Over Time
          </div>
          <div className="date-range text-text2reg text-general-80">
            last 7 days
          </div>
        </div>
        {/* <div className="Graph-details w-full flex items-end justify-between">
          <div className="order-section flex">
            <div className="order-det-span flex flex-col items-start mr-10">
              <div className="text-Heading6 ">645</div>
              <div className="text-text2reg text-general-80">
                Orders on May 22
              </div>
            </div>
            <div className="order-det-span flex flex-col items-start mr-5">
              <div className="text-Heading6 ">472</div>
              <div className="text-text2reg text-general-80">
                Orders on May 21
              </div>
            </div>
          </div>
          <div className="graph-indicators flex">
            <div className="graph-ind  flex items-center text-text2reg mr-5">
              <div className="grph-item h-3 w-3 rounded-sm bg-primary-100 mr-2"></div>
              <div className="grph-name text-general-80">May 21</div>
            </div>
            <div className="graph-ind  flex items-center text-text2reg ">
              <div className="grph-item h-3 w-3 rounded-sm bg-general-40 mr-2"></div>
              <div className="grph-name text-general-80">May 22</div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="graph-section relative">
        <LineGraph />
      </div>
    </div>
  );
}

export default OrdersTime;
