import React, { useState } from "react";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import AddIcon from "../../Images/IconComponents/AddIcon";
import Table from "../../Components/Table/TableFile";
import coupons from "../../api/Coupon.json";
import TableAction from "../../Layouts/TableActions/TableAction";
import NavTab from "../Inbox/Components/NavTab/NavTab";
import FooterAction from "../../Components/FooterSave/FooterAction";
import SectionNav from "../../Components/Navigation/SectionNav/SectionNav";

function Coupons() {
  const [Section, setSection] = useState("All Coupons");

  const getNavSection = (e) => {
    console.log(e);
    if (e) {
      return setSection(e);
    }
  };

  const Sections = ["All Coupons", "Active Coupons", "Expired Coupons"];

  const HeaderData = [
    { header: "Create Coupon" },
    { backlink: "" },
    {
      buttons: [
        // {
        //   primary: true,
        //   buttonText: "Cancel",

        //   // icon: <Settings color={"#1E5EFF"} />,
        // },
        {
          primary: true,
          buttonText: "Create",
          action: {
            type: "Navigation",
            link: "/createCoupon",
          },
          icon: <AddIcon color={"#ffffff"} />,
        },
      ],
    },
  ];

  return (
    <div className="outer-container">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner">
        <div className="order-action-panel mb-4">
          <div className="tabelPadding card pb-p20">
            <SectionNav Sections={Sections} action={getNavSection} />
            <TableAction />
            <div className="coupon-list-card flex flex-col gapping"></div>
            {/* <Table data={coupons} /> */}
            {Section === "All Coupons" && <Table data={coupons} />}
            {Section === "Active Coupons" && (
              <Table data={coupons.slice(1, 7)} />
            )}
            {Section === "Expired Coupons" && (
              <Table data={coupons.slice(5, 10)} />
            )}
          </div>
        </div>

        {/* <div className="Side-section flex flex-col  basis-3/12 gapping"></div> */}
      </div>
    </div>
  );
}
//
export default Coupons;
