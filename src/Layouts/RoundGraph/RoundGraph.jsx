import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import CardHeader from "../../Components/CardHeader/CardHeader";
import RoundGraphDetails from "./Component/RoundGraphDetails";

const data = [
  {
    "Sold for": "$15.000",
    "Month goal": "$20.000",
    Left: "$5.000",
  },
];

function RoundGraph({ header }) {
  return (
    <div className="outer-wrapper card">
      <CardHeader Header="Sales Goal" />
      <div className="chartwrapper my-10 m-auto h-[112px]   w-[112px] relative flex items-center justify-center">
        <div className="Percentage absolute text-Heading6">75%</div>
        <Doughnut
          data={{
            labels: ["Sold For", "Left"],
            datasets: [
              {
                data: [75, 25],
                backgroundColor: ["#FFC700", "#D7DBEC"],
                hoverOffset: 4,
                borderWidth: 0,
              },
            ],
          }}
          options={{
            cutout: "80%",
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      {data.map((x) => {
        return <RoundGraphDetails data={data} x={x.Left} />;
      })}
    </div>
  );
}

export default RoundGraph;
