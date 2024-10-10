import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import CardHeader from "../../Components/CardHeader/CardHeader";
import RoundGraphDetails from "./Component/RoundGraphDetails";

function RoundGraph({ header, graphdata, data }) {
  console.log(data);
  return (
    <div className="outer-wrapper card">
      <CardHeader Header={header} />
      <div className="chartwrapper my-10 m-auto h-[112px]   w-[112px] relative flex items-center justify-center">
        <div className="Percentage absolute subHeader">
          {graphdata.graph[0]}
        </div>
        <Doughnut
          data={{
            labels: ["Sold For", "Left"],
            datasets: [
              {
                data: graphdata.graph,
                backgroundColor: graphdata.color,
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
      <RoundGraphDetails data={[data]} />
    </div>
  );
}

export default RoundGraph;
