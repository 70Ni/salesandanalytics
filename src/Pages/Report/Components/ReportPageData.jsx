import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/TableFile";
import Recent from "../../../api/Customers.json";
import products from "../../../api/Products.json";
import user from "../../../api/Customers.json";
import unit from "../../../api/Products.json";

const unitSold = unit.slice(1, -1).map((x) => {
  return {
    "product-image": x["product-image"],
    "product-Name": x["product-Name"],
    "Clicks": x["unit-sold"],
    price: x.price,
  };
});

const Recenttransaction = Recent.slice(0, 4).map((x) => {
  return {
    User: x["user-name"],
    Orders: x.order,
    "Total-Spent": x["total-spent"],
  };
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
        <Table data={Recenttransaction} headerTrue Header={"Top Customers"} />
      </div>
      <div className="card">
        <Table data={unitSold} headerTrue Header={"Top Products"} />
      </div>
    </div>
  );
}

export default RecentTransaction;
