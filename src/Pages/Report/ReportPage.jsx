import React from "react";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import OrdersTime from "../../Components/Graph/OrdersTime";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import RecentTransaction from "../../Layouts/RecentTransactions/RecentTransaction";
import CustomerGrowth from "./Components/CustomerGrowth/CustomerGrowth";
import SumSection from "../../Layouts/Panel/SumSection";
import RoundGraph from "../../Layouts/RoundGraph/RoundGraph";
import AverageGraph from "./Components/AverageGraph";
import Devices from "./Components/Devices";
import Online from "./Components/Online";
import WorldGraph from "./Components/WorldGrah/WorldGraph";
import CustomerAndProducts from "./Components/ReportPageData";

const data = [
  {
    "Sold for": "$15.000",
    "Month goal": "$20.000",
    Left: "$5.000",
  },
  {
    "Cart:": "35%",
    "Checkout:": "29%",
    "Purchase:": "25%",
  },
];

const graphdata = [
  { graph: [75, 25], color: ["#FFC700", "#E6E9F4"] },
  { graph: [25, 75], color: ["#1FD286", "#E6E9F4"] },
];

const HeaderData = [
  { header: "Report" },
  { backlink: "" },
  {
    buttons: [
      // {
      //   primary: false,
      //   buttonText: "Cancel",
      //   // icon: <Settings color={"#1E5EFF"} />,
      // },
      {
        primary: true,
        buttonText: "Export",
        // icon: <AddIcon color={"#ffffff"} />,
      },
    ],
  },
];

function ReportPage() {
  return (
    <div className="outer-container mb-4">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      {/* <SumSection /> */}
      <div className="Page-Section flex flex-col gapping">
        <div className="report-Graph-wrapper flex flex-col gapping">
          <CustomerGrowth />
          <SumSection />
        </div>

        <div className="orderStatus flex gapping">
          <div className="report-round-graph-wrapper basis-1/2 flex gapping max-[442px]:flex-col">
            <RoundGraph
              graphdata={graphdata[0]}
              data={data[0]}
              header={"Sales Goal"}
            />
            <RoundGraph
              graphdata={graphdata[1]}
              data={data[1]}
              header={"Conversion Rate"}
            />
            {/* <RoundGraph /> */}
          </div>
          <div className="graph-wrapper basis-1/2 flex">
            <AverageGraph />
        
            {/* {String.fromCodePoint(0x1fbdd)} */}
          </div>
        </div>

        <div className="world-graph max-[1070px]:flex-col flex gapping">
          <div className="worldwrapper basis-9/12 ">
            <WorldGraph />
          </div>
          <div className="device-online category-tag-wrapper basis-3/12 flex flex-col gapping">
            <Devices />
            <Online />
          </div>
        </div>
        {/* add graphs final */}
        <CustomerAndProducts />
      </div>
    </div>
  );
}

export default ReportPage;
