import React from "react";
import SumSection from "../../Layouts/Panel/SumSection";
import LineGraph from "../../Components/Graph/LineGraph";
import OrdersTime from "../../Components/Graph/OrdersTime";
import RecentTransaction from "../../Layouts/RecentTransactions/RecentTransaction";
import "./styles.css";

function Dashboard() {
  return (
    <div className="outer-container w-full mx-10">
      <SumSection />
      {/* <OrdersTime />  */}
      {/* add graphs final */}
      <RecentTransaction />
    </div>
  );
}

export default Dashboard;
