import React from "react";

function GraphIndicator() {
  return (
    <div className="graph-indicators flex">
      <div className="graph-ind  flex items-center text-text2reg mr-5">
        <div className="grph-item h-3 w-3 rounded-sm bg-primary-100 mr-2"></div>
        <div className="grph-name para">New customers</div>
      </div>
      <div className="graph-ind  flex items-center text-text2reg ">
        <div className="grph-item h-3 w-3 rounded-sm bg-general-40 mr-2"></div>
        <div className="grph-name para">Returning customers</div>
      </div>
    </div>
  );
}

export default GraphIndicator;
