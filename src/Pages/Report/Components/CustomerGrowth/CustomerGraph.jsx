import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import data from "../../../../api/CustomerGrowth.json";

const CHARTOPTIONS = {
  maintainAspectRatio: false,
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      stacked: false, // Set to true for stacked bar charts

      ticks: {
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
        stepSize: 100,
        padding: 0,
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

let array = ["1", "2", "3", "4"];
// const arr = data.map((x) => {
//   return x[21].map((y, i) => {
//     array.push(y.orders);
//   });
// });

function CustomerGraph() {
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   // height: window.innerHeight,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [windowSize]);
  // console.log(windowSize);

  return (
    <div className={`graphwrapper relative h-[204px]`}>
      <Bar
        data={{
          labels: data.map((x) => x.month),
          datasets: [
            {
              label: "Moth",
              data: data.map((x) => {
                return x.returning;
              }),
              backgroundColor: "#D7DBEC",
              //   barThickness: 8,
              borderRadius: 8,
              borderWidth: 0,
              barPercentage: 0.8,
              categoryPercentage: 0.3, // Adjust the spacing between categories
            },
            {
              label: "Moth",

              data: data.map((x) => {
                return x.new;
              }),
              backgroundColor: "#1E5EFF",
              //   barThickness: 8,
              borderRadius: 20,
              borderWidth: 0,
              barPercentage: 0.8,
              categoryPercentage: 0.3, // Adjust the spacing between categories
            },
          ],
        }}
        options={CHARTOPTIONS}
      />
    </div>
  );
}

export default CustomerGraph;
