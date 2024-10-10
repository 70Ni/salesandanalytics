import React from "react";

const demoGraphDetails = [
  {
    country: "United States",
    count: "29.051",
    color: "bg-primary-80",
  },
  {
    country: "Europe",
    count: "18.041",
    color: "#FFC700",
  },
  {
    country: "Australia",
    count: "10.430",
    color: "#F99600",
  },
  {
    country: "Other",
    count: "5.420",
    color: "#D7DBEC",
  },
];

function GraphDetails() {
  return (
    <div className="data-list max-[1080px]:w-full">
      <div className="wrper mr-5 max-[1080px]:flex max-[1080px]:mb-4 w-full justify-between flex-wrap max-[452px]:[&_.wrldgraphitem]:basis-1/2">
        {demoGraphDetails.map((data) => {
          return (
            <div className="wrldgraphitem max-[452px]:[&:nth-child(even)]:items-end flex flex-col">
              <div className="country-wrapper flex items-start mt-5">
                <div className="h-3 w-3 mr-2 mt-1">
                  <div
                    className="color h-3 w-3 rounded-sm  bg-primary-100"
                    style={{ backgroundColor: data.color }}
                  ></div>
                </div>
                <div className="country para">{data.country}</div>
              </div>
              <div className="subHeader max-[1080px]:ml-0 mt-1 ml-5">
                {data.count}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraphDetails;
