import React from "react";
import { Line } from "react-chartjs-2";
import data from "../../../api/CustomerGrowth.json";
import CardHeader from "../../../Components/CardHeader/CardHeader";
import GraphDetails from "./WorldGrah/GraphDetails";
import GraphHeader from "./AverageGraph/GraphHeader";
const OPTIONS = {
  maintainAspectRatio: false,
  responsive: true,
  borderWidth: 4,
  pointRadius: 0.5,
  pointHoverRadius: 7,
  pointHoverBorderWidth: 0.5,
  pointHoverBorderColor: "#1E5EFF",
  pointHoverBackgroundColor: "#ffffff",
  //   borderColor:colors.general[1],
  borderColor: "#1E5EFF",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: false, // Set to true for stacked bar charts

      ticks: {
        padding: 14,
        display: true,
        color: "#A1A7C4",
      },

      grid: {
        borderWidth: 0,
        drawOnChartArea: false,
        drawBorder: false,
        display: false,
      },
    },
    y: {
      border: { dash: [4, 4] }, // for the grid lines
      borderWidth: 2,
      //   grace: '25%',
      ticks: {
        stepSize: 20,
        padding: 14,
        autoSkip: false,
        color: "#A1A7C4",
        font: {
          size: 12,
          weight: "Normal",
        },
      },
      grid: {
        borderWidth: 0,
        color: "#E6E9F4", // for the grid lines
      },

      beginAtZero: true,
    },
  },
};

function AverageGraph() {
  return (
    <div className="outer-wrapper card">
      <CardHeader Header={"Average  Order Value"} />
      <GraphHeader />
      <div className="chartwrapper graphwrapper my-4 h-[200px] relative flexbt">
        <Line
          data={{
            labels: ["4am", "8am", "12pm", "4pm", "8pm", "12am", "4am", "8am"],
            datasets: [
              {
                label: "My First Dataset",
                data: [20, 10, 40, 20, 30, 65, 25, 38],
                borderColor: "#1E5EFF",
              },
            ],
          }}
          options={OPTIONS}
        />
      </div>
    </div>
  );
}

export default AverageGraph;
