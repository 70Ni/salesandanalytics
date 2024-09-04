import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import world from "../../../api/world.json";
import CardHeader from "../../../Components/CardHeader/CardHeader";
import GraphDetails from "./WorldGrah/GraphDetails";
import GraphIndicators from "./WorldGrah/GraphIndicators";
import WorldChart from "./WorldGrah/WorldChart";

const highlighted = [
  "TLS",
  "CAF",
  "NGA",
  "GHA",
  "SLE",
  "AGO",
  "JAM",
  "PRY",
  "MWI",
  "TTO",
  "ZWE",
  "LBR",
];

const data = [
  { id: "USA", value: 100, color: "#336DFF" },
  { id: "AUS", value: 50, color: "#F99600" },
  { id: "UKR", value: 75, color: "#FFC700" },
  { id: "PRT", value: 75, color: "#FFC700" },
  { id: "EST", value: 75, color: "#FFC700" },
  { id: "ITA", value: 75, color: "#FFC700" },
  { id: "RMA", value: 75, color: "#FFC700" },
  { id: "SRB", value: 75, color: "#FFC700" },
  { id: "ROU", value: 75, color: "#FFC700" },
  { id: "BGR", value: 75, color: "#FFC700" },
  { id: "GRC", value: 75, color: "#FFC700" },
  { id: "XXK", value: 75, color: "#FFC700" },
  { id: "ALB", value: 75, color: "#FFC700" },
  { id: "MKD", value: 75, color: "#FFC700" },
  { id: "BIH", value: 75, color: "#FFC700" },
  { id: "MNE", value: 75, color: "#FFC700" },
  { id: "HRV", value: 75, color: "#FFC700" },
  // ... more regions
];

function WorldGraph() {
  const [TooltipContent, setTooltipContent] = useState("Hover over a country");
  return (
    <div className="outer-wrapper card basis-9/12">
      <CardHeader Header="Sales Goal" />
      <div className="data-wrapper flex items-start justify-between">
        <GraphDetails />
        <div className="map-list w-[590px] relative border">
          <GraphIndicators TooltipContent={TooltipContent} />

          {/* https://codesandbox.io/p/sandbox/zoom-controls-forked-nv2qr2?file=%2Fsrc%2FMapChart.js%3A14%2C2-17%2C4 */}
          <ComposableMap>
            <ZoomableGroup>
              {/* <Geographies geography={world}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const regionData = data.find(
                      //    (d)=> console.log(geo.properties.ISO_A3)
                      (d) => d.id === geo.id
                    );
                    console.log(geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${geo.properties.name}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("Hover over a country");
                        }}
                        // style={{
                        //   default: {
                        //     fill: "#D7DBEC",
                        //     outline: "none",
                        //   },

                        // }}

                        fill={regionData ? regionData.color : "#D7DBEC"}
                      />
                    );
                  })
                }
              </Geographies> */}
              <WorldChart
                data={{setTooltipContent }}
              />
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
}

export default WorldGraph;
