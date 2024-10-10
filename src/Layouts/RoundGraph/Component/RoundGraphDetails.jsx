import React from "react";

function RoundGraphDetails({ data }) {
  return (
    <div className="dataSet-wrapper">
      {data.map((x)=>Object.entries(x).map((y) => {
        console.log(y);
        return (
          <div className="item-wrapper flex justify-between my-2">
            <div className="label para">{y[0]}</div>
            <div className="label paraBold">
              {y[1]}
            </div>
          </div>
        );
      }))}
      
    </div>
  );
}

export default RoundGraphDetails;
