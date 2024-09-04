import React from "react";
import { Bar, Line } from "react-chartjs-2";
import data from "../../../api/OrdersOvertime.json";

const CHARTOPTIONS = {
  maintainAspectRatio: false,
    responsive: true,
  layout: {},

  borderJoinStyle: "round",
  borderWidth: 4,
  pointRadius: 0.5,
  pointHoverRadius: 7,
  pointHoverBorderWidth: 4,
  pointHoverBorderColor: "#1E5EFF",
  pointHoverBackgroundColor: "#ffffff",
  //   borderColor:colors.general[1],
  borderColor: "#1E5EFF",
  plugins: {
    tooltip: {
      //   callbacks: {
      //     afterTitle: "Hello there",
      //   },
      titleColor: "#fff",
      titleAlign: "center",
      bodyAlign: "center",
      //   bodyFont: 14,
    },
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 24,
          weight: "bold",
        },
      },
    },
  },

  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
        color: "#A1A7C4",
      },

      // to remove the x-axis grid
      grid: {
        borderWidth: 0,
        drawOnChartArea: false,
        drawBorder: false,
        display: false,
      },
    },

    y: {
      display: false,
    //   border: { dash: [2, 4] }, // for the grid lines
    //   borderWidth: 1,
    //   ticks: {
    //     // stepSize: 10,
    //     padding: 14,
    //     // autoSkip: false,
    //     color: "#A1A7C4",
    //     font: {
    //       size: 12,
    //       weight: "Normal",
    //     },
    //   },
      grid: {
        borderWidth: 0,
        color: "#E6E9F4", // for the grid lines
        // tickColor: '#000', // for the tick mark
        // tickBorderDash: [2, 3], // also for the tick, if long enough
        // tickLength: 10, // just to see the dotted line
        // tickWidth: 2,
        // offset: true,
        // drawTicks: true, // true is default
        // drawOnChartArea: true // true is default
      },

    //   beginAtZero: true,
    },
    // to remove the y-axis labels
    //   y: {
    //     ticks: {
    //       display: false,
    //       beginAtZero: true,
    //     },
    //     // to remove the y-axis grid
    //     grid: {
    //       drawBorder: false,
    //       display: false,
    //     },
    //   },
  },
};

let array = [];
const arr = data.map((x) => {
  return x[21].slice(1, 5).map((y, i) => {
    array.push(y.orders);
  });
});

function Graph() {
  return (
    <div className="relative w-[200px] max-[994px]:w-auto graphwrapper">
      <Bar
      style={{
        width: 'auto',
        height: 200,
      }}
        data={{
          labels: ["12", "13", "14", "15", "16", "17","18"],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: "#1FD286",

              borderWidth: 0,
              barThickness: 8,
              borderRadius: 20,
            },
          ],
        }}
        options={CHARTOPTIONS}
      />
    </div>
  );
}

export default Graph;
