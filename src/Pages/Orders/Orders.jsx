import React from "react";
import IconInput from "../../Components/Input/Medium/IconInput";
import Icon from "../../Images/Icons/01 Actions/16 Search.svg";
import SearchInput from "../../Components/Input/Medium/SearchInput";
import Table from "../../Components/Table/TableFile";
import orders from "../../api/Orders.json";
import "./styles.css";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import TableAction from "../../Layouts/TableActions/TableAction";
import AddIcon from "../../Images/IconComponents/AddIcon";

const HeaderData = [
  { header: "Orders" },
  { backlink: "" },
  {
    buttons: [
      {
        primary: false,
        buttonText: "Export",
        // icon: <Settings color={"#1E5EFF"} />,
      },
      {
        primary: true,
        buttonText: "Add Orders",
        icon: <AddIcon color={"#ffffff"} />,
      },
    ],
  },
];

function Orders() {
  return (
    <div className="outer-container">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner">
        <div className="order-action-panel mb-4">
          <div className="tabelPadding card pb-p20">
            <TableAction />
            <Table data={orders} Header={"Orders"} check />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
