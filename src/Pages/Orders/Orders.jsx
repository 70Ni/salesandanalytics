import React from "react";
import IconInput from "../../Components/Input/Medium/IconInput";
import Icon from "../../Images/Icons/01 Actions/16 Search.svg";
import SearchInput from "../../Components/Input/Medium/SearchInput";
import Table from "../../Components/Table/TableFile";
import orders from "../../api/Orders.json";
import "./styles.css";

const tableouter =
  "tabelPadding px-7 pt-7 pb-5 border-general-40 border rounded-[6px]";
function Orders() {
  return (
    <div className=" outer-container w-full mx-10">
      <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100">
          Orders
        </div>
      </div>
      <div className="Container-inner">
        <div className="order-action-panel mb-4">
          <div className={tableouter}>
            <div className="searchinput w-[350px] mb-4">
              <SearchInput placeholder="Search" Icon={Icon} />
            </div>
            <Table data={orders} Header={"Orders"} check />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
