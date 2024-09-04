import React from "react";
import SumSection from "../../Layouts/Panel/SumSection";
import LineGraph from "../../Components/Graph/LineGraph";
import OrdersTime from "../../Components/Graph/OrdersTime";
import RecentTransaction from "../../Layouts/RecentTransactions/RecentTransaction";
import "./styles.css";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import LastSale from "./Components/LastSales/LastSale";

function Dashboard() {
  const HeaderData = [
    { header: "Dashboard" },
    { backlink: "" },
    {
      buttons: [
        {
          primary: false,
          buttonText: "Cancel",
          // icon: <Settings color={"#1E5EFF"} />,
        },
        {
          primary: true,
          buttonText: "Save",
          // icon: <AddIcon color={"#ffffff"} />,
        },
      ],
    },
  ];
  return (
    <div className="outer-container w-full mx-10 mb-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Page-Section flex flex-col gap30">
        <SumSection />
        <div className="Graph-wrapper-dashboard flex gap30 horizonal-gap">
          <OrdersTime />
          <LastSale />
        </div>
        {/* add graphs final */}
        <RecentTransaction />
      </div>
    </div>
  );
}

export default Dashboard;
