import React from "react";
import Table from "../../../Components/Table/TableFile";
import customerOrders from "../../../api/Orders.json";


function CustomerOrders({ data }) {
  return (
    <div className="customer-Orders-section border border-general-50 rounded-md p-7 basis-9/12 mt-8 bg-white">
      <Table Header={"Customer orders"} check data={data} />
    </div>
  );
}

export default CustomerOrders;
