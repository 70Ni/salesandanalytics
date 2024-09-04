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
    <div className="outer-container w-full mx-10 mb-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      {/* <SumSection /> */}
      <div className="Graph-wrapper flex flex-col gap-[30px]">
        <CustomerGrowth />
        <SumSection />
      </div>
      <div className="world-graph flex">
        <WorldGraph />
        <div className="device-online basis-3/12">
          <Devices />
          <Online />
        </div>
      </div>
      <div className="orderStatus flex gap-[30px]">
        <div className="graph-wrapper basis-1/2 flex gap-[30px]">
          <RoundGraph />
          <RoundGraph />
        </div>
        <div className="graph-wrapper basis-1/2 flex gap-[30px]">
          <AverageGraph />
        </div>
      </div>
      {/* add graphs final */}
      <RecentTransaction />
    </div>
  );
}

export default ReportPage;
