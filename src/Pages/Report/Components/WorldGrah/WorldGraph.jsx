import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import CardHeader from "../../../../Components/CardHeader/CardHeader";
import GraphDetails from ".././WorldGrah/GraphDetails";
import GraphIndicators from "../WorldGrah/GraphIndicators";
import WorldChart from "../WorldGrah/WorldChart";

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

          <ComposableMap>
            <ZoomableGroup>
              <WorldChart data={{ setTooltipContent }} />
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
}

export default WorldGraph;
