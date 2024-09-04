import React from "react";
import data from "../../api/Products.json";
import TableCell from "./TableCell";

function Table() {
  return (
    <div className="Table w-full">
      {/* {Object.keys(data[0]).map((headers) => {
        return (
          <div className="tableCell">
            <TableCell cell={headers} />
          </div>
        );
      })} */}
      {data.map((y, i) => {
        return (
          <tbody className="flex w-full">
            <tr
              className="w-full border p-4 flex items-center justify-start"
              key={i}
            >
              <img src={y["product-image"]} className="h-14 w-14" />
              <tr className="flex flex-col">
                <tr
                  className="w-full   flex items-center justify-start"
                  key={i}
                >
                  {y["product-Name"]}
                </tr>
                <section
                  className="w-full   flex items-center justify-start"
                  key={i}
                >
                  {y.category}
                </section>
              </tr>
            </tr>
            <tr className="w-full border p-4  " key={i}>
              {y.color}
            </tr>
            <tr
              className="w-full flex items-center justify-start border p-4  "
              key={i}
            >
              {y.price}
            </tr>
            {/* {Object.entries(data[i]).map((x) => {
              if (x[0] === "product-image") {
                return null;
              }
              return <div className="w-full border p-7">{x[1]}</div>;
            })} */}
          </tbody>
        );
      })}
    </div>
  );
}

export default Table;
