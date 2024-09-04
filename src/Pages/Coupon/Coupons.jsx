import React from "react";
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
  const Sections = [
    "All Customers",
    "New Customers",
    "Returning Customers",
    "From Europe",
  ];

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
    <div className="containerlg">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner flex w-full">
        <div className="Main-section border border-general-50 rounded-md p-7 w-full bg-white">
          <SectionNav Sections={Sections} action={null} />
          <TableAction />
          <div className="coupon-list-card flex flex-col gap-[30px]"></div>
          <Table data={coupons} />
        </div>
        {/* <div className="Side-section flex flex-col  basis-3/12 gap-[30px]"></div> */}
      </div>
    </div>
  );
}

export default Coupons;
