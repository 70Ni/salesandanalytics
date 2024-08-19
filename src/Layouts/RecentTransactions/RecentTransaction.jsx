import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/TableFile";
import Recent from "../../api/Recent.json";
import products from "../../api/Products.json";
import user from "../../api/Customers.json";
import unit from "../../api/UnitSold.json";

let filteredObj;
const keysToKeep = ["product-Name", "price", "unit-sold"];

const obj = products;

obj.map((x, i) => {
  filteredObj = Object.fromEntries(
    Object.entries(obj[i]).filter(([key]) => keysToKeep.includes(key))
  );
});

function RecentTransaction() {
  const [filter, setfilter] = useState([
    {
      "product-Name": "Men Grey Hoodie",
      price: 34.9,
      unitsold: 155,
    },
  ]);

  useEffect(() => {
    return () => {
      obj.map((x, i) => {
        filteredObj = Object.fromEntries(
          Object.entries(obj[i]).filter(([key]) => keysToKeep.includes(key))
        );
      });
      setfilter([
        {
          productName: "Women Striped T-Shirt",
          price: 34.9,
          unitsold: 155,
        },
      ]);
    };
  }, []);
  const TopProduct = "max-[684px]:[&_.DateRecent]:hidden";

  return (
    <div className="DashTable flex gap-[30px] mt-[30px]">
      <Table data={Recent} Header={"Recent Transactions"} />
      <Table
        data={unit}
        Header={"Top Product by unit Sold"}
        styling={TopProduct}
      />
      {/* <Table /> */}
    </div>
  );
}

export default RecentTransaction;
