import React, { useEffect } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import VisibiltySection from "../Categories/Components/VisibiltySection";
import Avatar from "../../Components/Table/TableData/Images/48x48/Avatar";
import TextInput from "../../Components/Input/Large/TextInput";
import OverviewSection from "./Components/OverviewSection";
import TagSection from "../../Layouts/TagSection/TagSection";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import Settings from "../../Images/IconComponents/Settings";
import CustomerOrders from "./Components/CustomerOrders";
import apidata from "../../api/Orders.json";
import CustomerInformation from "./Components/CustomerInformation";
import FooterAction from "../../Components/FooterSave/FooterAction";
import CustomerNotes from "./Components/CustomerNotes";
import Cusomer from "./Components/Cusomer";
import NavBlocker from "../../Components/NavFlat/NavBlocker";

function CustomerInfo() {
  const HeaderData = [
    { header: "Customer Info" },
    { backlink: "/customers" },
    {
      buttons: [
        {
          primary: false,
          buttonText: "Cancel",
          // icon: <Settings color={"#1E5EFF"} />,
        },
        {
          primary: true,
          buttonText: "Save",
          // icon: <AddIcon color={"#ffffff"} />,
        },
      ],
    },
  ];

  // console.log(JSON.stringify(apidata));
  let file = JSON.stringify(apidata);
  let files = JSON.parse(file);
  // const file2 = JSON.parse(CustomerOrders);

  // console.log(files);
  const filteredOrders = apidata.splice(7, 5).map((order) => ({
    "Order-Id": order["Order-Id"],
    Date: order["Date"],
    Status: order["payment-status"],
    Price: order["price"],
  }));

  return (
    <div className="outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner Tabletinfo-reverse w-full flex gapping">
        <div className="Main-section  flex flex-col w-full basis-9/12">
          <div className="customer-section border border-general-50 rounded-md p-7  bg-white">
            <Cusomer />
            {/* https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/ */}
            <div className="border border-general-40"></div>
            <CustomerNotes />
          </div>

          {/* //customer order list */}
          <CustomerOrders data={filteredOrders} />
        </div>

        <div className="Side-section flex flex-col  basis-3/12 gapping">
          <OverviewSection />
          <TagSection taglist={["Vip Customer", "Europe"]} />
        </div>
      </div>
      <FooterAction />
    </div>
  );
}

export default CustomerInfo;
