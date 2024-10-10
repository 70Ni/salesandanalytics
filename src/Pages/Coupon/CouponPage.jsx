import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import CouponInformation from "./Components/CouponInformation";
import CouponType from "./Components/CouponType";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import FooterAction from "../../Components/FooterSave/FooterAction";

function CouponPage() {
  const HeaderData = [
    { header: "Create Coupon" },
    { backlink: "/coupons" },
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
          // action: {
          //   type: "Navigation",
          //   link: "/customersadd",
          // },
          // icon: <AddIcon color={"#ffffff"} />,
        },
      ],
    },
  ];
  return (
    <div className="containerlg">
      {/* <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100">
          Add Product
        </div>
        <div className="Action-buttons-wrapper">
          <PrimaryButton text="Hello" />
          //button small and actions to add
        </div>
      </div> */}
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner">
        <div className="Main-section card">
          <div className="product-adder-card flex flex-col gapping">
            <CouponInformation />
            <div className="border"></div>
            <CouponType />
            {/* <CustomerAddress />
            <CustomerNotes /> */}
          </div>
          {/* <div className="product-adder-card p-7">
          <div className="border border-general-50"></div>
        </div> */}
        </div>
        {/* <div className="Side-section flex flex-col  basis-3/12 gapping"></div> */}
      </div>
      <FooterAction />
    </div>
  );
}

export default CouponPage;
