import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Input from "../../Components/Input/Medium/Input";
import TextInput from "../../Components/Input/Large/TextInput";
import ProductEdits from "../../Components/ProductEdits/ProductEdits";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import AddIcon from "../../Images/IconComponents/AddIcon";
import VisibiltySection from "./Components/VisibiltySection";
import CategorySection from "./Components/CategorySection";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import Subject from "../../api/Products.json";

function Categories() {
  const HeaderData = [
    { header: "Products" },
    { backlink: "/categories" },
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
          // action: {
          //   type: "Navigation",
          //   link: "/customers",
          // },
        },
      ],
    },
  ];
  const addButton = <AddIcon color={"#1E5EFF"} />;
  return (
    <div className=" outer-container">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner Tabletinfo flex gapping">
        <div className="Main-section card basis-9/12">
          <div className="product-adder-card">
            <div className="subHeader2 mb-p24 text-left">
              Products <span className="para ml-2"> 12</span>
            </div>
            <div className="product-wrapper flex flex-col gap-p12">
              {Subject.map((item) => {
                return (
                  <ProductEdits
                    thumb={item["product-image"]}
                    name={item["product-Name"]}
                  />
                );
              })}
            
            </div>
            <div className="button-wrapper mt-5">
              <WhiteButton text="Add Product" icon={addButton} />
            </div>
          </div>
          {/* <div className="product-adder-card p-7">
          <div className="border border-general-50"></div>
        </div> */}
        </div>
        <div className="Side-section flex flex-col category-tag-wrapper  basis-3/12 gapping">
          <VisibiltySection />
          <CategorySection />
        </div>
      </div>
    </div>
  );
}

export default Categories;
