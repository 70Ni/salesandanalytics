import React from "react";

function GraphHeader() {
  return (
    <div className="graph-dtls flex items-center gap-p20">
      <div className="graph-details flex items-center">
        <div className="para mr-2">This Month</div>
        <div className="paraBold">$48.90</div>
      </div>
      <div className="graph-details flex items-center">
        <div className="para mr-2">Previous Month</div>
        <div className="paraBold">$58.20</div>
      </div>
    </div>
  );
}

export default GraphHeader;
