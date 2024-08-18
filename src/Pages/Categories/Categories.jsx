import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Input from "../../Components/Input/Medium/Input";
import TextInput from "../../Components/Input/Large/TextInput";
import ProductEdits from "../../Components/ProductEdits/ProductEdits";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import AddIcon from "../../Images/IconComponents/AddIcon";
import VisibiltySection from "./Components/VisibiltySection";
import CategorySection from "./Components/CategorySection";

function Categories() {
  const addButton = <AddIcon color={"#1E5EFF"} />;

  return (
    <div className=" outer-container w-full mx-10">
      <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100">
          Add Product
        </div>
        <div className="Action-buttons-wrapper">
          <PrimaryButton text="Hello" />
          //button small and actions to add
        </div>
      </div>
      <div className="Container-inner flex gap-[30px]">
        <div className="Main-section border border-general-50 rounded-md p-7 basis-9/12">
          <div className="product-adder-card">
            <div className="header text-paraBold text-general-100 mb-6 text-left">
              Products{" "}
              <span className="text-general-80 text-para ml-2"> 12</span>
            </div>
            <div className="product-wrapper flex flex-col gap-3">
              <ProductEdits />
              <ProductEdits />
              <ProductEdits />
              <ProductEdits />
            </div>
            <div className="button-wrapper mt-5">
              <WhiteButton text="Add Product" icon={addButton} />
            </div>
          </div>
          {/* <div className="product-adder-card p-7">
          <div className="border border-general-50"></div>
        </div> */}
        </div>
        <div className="Side-section flex flex-col  basis-3/12 gap-[30px]">
          <VisibiltySection />
          <CategorySection />
        </div>
      </div>
    </div>
  );
}

export default Categories;
