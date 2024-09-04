import React from "react";
import { Geographies, Geography } from "react-simple-maps";
import world from "../../../../api/world.json";

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

const mapsList = [
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

function WorldChart({ data }) {
  return (
    <Geographies geography={world}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const regionData = mapsList.find((d) => d.id === geo.id);
          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                data.setTooltipContent(`${geo.properties.name}`);
              }}
              onMouseLeave={() => {
                data.setTooltipContent("Hover over a country");
              }}
              fill={regionData ? regionData.color : "#D7DBEC"}
            />
          );
        })
      }
    </Geographies>
  );
}

export default WorldChart;
