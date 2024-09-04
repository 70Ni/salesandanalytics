import React from "react";

function RoundGraphDetails({ data }) {
  return (
    <div className="dataSet-wrapper">
      {data.map((x) => {
        return (
          <div className="item-wrapper flex justify-between">
            <div className="label text-text2reg text-general-80">Sold for:</div>
            <div className="label text-text2Bold text-general-100">
              {x.Left}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoundGraphDetails;
