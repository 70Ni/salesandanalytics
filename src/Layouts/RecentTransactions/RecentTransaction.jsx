import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/TableFile";
import Recent from "../../api/Recent.json";
import products from "../../api/Products.json";
import user from "../../api/Customers.json";
import unit from "../../api/Products.json";

const unitSold = unit.slice(1, -1).map((x) => {
  return {
    "product-image": x["product-image"],
    "product-Name": x["product-Name"],
    "unit-sold": x["unit-sold"],
    price: x.price,
  };
});

const Recenttransaction = Recent.map((x) => {
  return { Name: x.Name, Date: x.Date, Amount: x.Amount, Status: x.Status };
});

// let filteredObj;
// const keysToKeep = ["product-Name", "price", "unit-sold"];

// const obj = products;

// obj.map((x, i) => {
//   filteredObj = Object.fromEntries(
//     Object.entries(obj[i]).filter(([key]) => keysToKeep.includes(key))
//   );
// });

function RecentTransaction() {
  // const [filter, setfilter] = useState([
  //   {
  //     "product-Name": "Men Grey Hoodie",
  //     price: 34.9,
  //     unitsold: 155,
  //   },
  // ]);

  // useEffect(() => {
  //   return () => {
  //     obj.map((x, i) => {
  //       filteredObj = Object.fromEntries(
  //         Object.entries(obj[i]).filter(([key]) => keysToKeep.includes(key))
  //       );
  //     });
  //     setfilter([
  //       {
  //         productName: "Women Striped T-Shirt",
  //         price: 34.9,
  //         unitsold: 155,
  //       },
  //     ]);
  //   };
  // }, []);

  return (
    <div className="report-DashTable flex gapping ">
      <div className="card">
        <Table data={Recenttransaction} headerTrue Header={"Recent Transactions"} />
      </div>
      <div className="card">
        <Table data={unitSold} headerTrue Header={"Top Product by unit Sold"} />
      </div>
    </div>
  );
}

export default RecentTransaction;
