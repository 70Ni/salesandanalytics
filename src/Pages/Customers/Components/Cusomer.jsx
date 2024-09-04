import React from "react";
import Avatar from "../../../Components/Table/TableData/Images/48x48/Avatar";

function Customer() {
  return (
    <div className="cusomerinfo-card flex items-start mb-10 ">
      <Avatar Name={"Lenora Robinson"} Large />
      <div className="customer-content text-left ml-[18px]">
        <div className="text-paraBold mb-2">Lenora Robinson</div>
        <div className="text-text2reg text-general-80 flex flex-col">
          <span className="location">Ireland</span>
          <span className="Orders-history">5 Orders</span>
          <span className="cusomer-history">Customer for 2 years</span>
        </div>
      </div>
      /// star rating on the side link
      {/* https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/ */}
    </div>
  );
}

export default Customer;
