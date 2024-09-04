import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import ProductEdits from "../../Components/ProductEdits/ProductEdits";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import InputFlex from "./Components/InputFlex";
import CustomerInformation from "./Components/CustomerInformation";
import CustomerAddress from "./Components/CustomerAdress";
import Input from "../../Components/Input/Medium/Input";
import CustomerNotes from "./Components/CustomerNotes";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import FooterAction from "../../Components/FooterSave/FooterAction";

function CustomerAdd() {
  const HeaderData = [
    { header: "Add Customer" },
    { backlink: "/customers" },
    {
      buttons: [
        {
          primary: false,
          buttonText: "Cancel",
          action: {
            type: "Navigation",
            link: "/customers",
          },
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
    <div className=" outer-container w-full mx-10">
      <NavBlocker />
      {/* <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100">
          Add Product
        </div>
        <div className="Action-buttons-wrapper">
          <PrimaryButton text="Hello" />
          //button small and actions to add
        </div>
      </div> */}
      <HeaderSection data={HeaderData} />
      <div className="Container-inner flex">
        <div className="Main-section border border-general-50 rounded-md p-7 w-full bg-white">
          <div className="product-adder-card flex  w-full flex-col gap-[30px]">
            <CustomerInformation />
            <CustomerAddress />
            <CustomerNotes />
          </div>
          {/* <div className="product-adder-card p-7">
          <div className="border border-general-50"></div>
        </div> */}
        </div>
        {/* <div className="Side-section flex flex-col  basis-3/12 gap-[30px]"></div> */}
      </div>
      <FooterAction />
    </div>
  );
}

export default CustomerAdd;
