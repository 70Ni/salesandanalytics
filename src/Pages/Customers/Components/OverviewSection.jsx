import React from "react";

function OverviewSection() {
  return (
    <div className="Category-Card border p-7 pb-5 border-general-50 rounded-md w-full bg-white">
      <div className="Header-wrapper flex items-center justify-between mb-6">
        <div className="header text-paraBold text-general-100 text-left">
          Overview
        </div>
        <div className="text-para text-primary-100 cursor-pointer"> Edit </div>
      </div>
      <div className="customer-content text-left">
        <div className="text-paraBold mb-2">Lenora Robinson</div>
        <div className="text-text2reg text-general-80 flex flex-col">
          <span className="location text-general-60 mb-2">Address</span>
          <span className="Location">831 Wilhelmine Glen</span>
          <span className="Phone">40583-2293</span>
          <span className="area">South Lelastad </span>
          <span className="Country">Ireland</span>
        </div>
        <div className="text-text2reg text-general-80 flex flex-col my-6">
          <span className="location text-general-60 mb-1">Email Address</span>
          <span className="Location">lenora_rob@yahoo.com</span>
        </div>
        <div className="text-text2reg text-general-80 flex flex-col my-6">
          <span className="location text-general-60 mb-1">Phone</span>
          <span className="Location">l636-458-4820</span>
        </div>
      </div>
      <div className="border border-general-40"></div>
      <div className="text-text2reg text-red-100 text-left mt-5 cursor-pointer">
        Delete Customer{" "}
      </div>
    </div>
  );
}

export default OverviewSection;
