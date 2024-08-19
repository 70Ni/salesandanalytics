import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Input from "../../Components/Input/Medium/Input";
import TextInput from "../../Components/Input/Large/TextInput";
import CheckBox from "../../Components/Others/CheckBox";
import Tags from "../../Components/Tags/Tags";
import TagSection from "../../Layouts/TagSection/TagSection";
import CategorySection from "./Components/CategorySection";
import ProductSection from "./Components/ProductSection";

function Products() {
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
              Information
            </div>
            <div className="product-name-input pb-6">
              <Input
                placeholder="Summer T-Shirt"
                title="Product Name"
                id="Product-Name-input"
                Name="product"
              />
            </div>
            <div className="product-description-input mb-10">
              <TextInput
                placeholder="Product description"
                title="Product Description"
                id="Product description"
                Name="product description"
              />
            </div>
            <div className="border-[0.5px] border-general-50"></div>
            ///Image adder section
            <div className="header text-paraBold text-general-100 mb-6 text-left mt-7">
              Price
            </div>
            <div className="price-input-wrapper flex gap-7">
              <div className="product-name-input pb-6 w-full">
                <Input
                  placeholder="Enter price"
                  title="Product Price"
                  id="Product-Name-input"
                  Name="product"
                />
              </div>
              <div className="product-name-input pb-6 w-full">
                <Input
                  placeholder="Price at Discount"
                  title="Discount Price"
                  id="Product-Name-input"
                  Name="product"
                />
              </div>
            </div>
            ///Diffrent options
            <div className="header text-paraBold text-general-100 mb-6 text-left mt-7">
              Shipping{" "}
            </div>
            <div className="price-input-wrapper flex gap-7">
              <div className="product-name-input pb-6 w-full">
                <Input
                  placeholder="Weight"
                  title="Enter Weight"
                  id="Product-Name-input"
                  Name="product"
                />
              </div>
              <div className="product-name-input pb-6 w-full">
                <Input
                  placeholder="Enter Country"
                  title="Country"
                  id="Product-Name-input"
                  Name="product"
                />
              </div>
            </div>
          </div>
          ///toggle button
          {/* <div className="product-adder-card p-7">
            <div className="border border-general-50"></div>
          </div> */}
        </div>
        <div className="Side-section flex flex-col  basis-3/12 gap-[30px]">
          <CategorySection />
          <TagSection
            taglist={["T-Shirt", "Men Clothes", "Summer Collection"]}
          />
          <ProductSection />
        </div>
      </div>
    </div>
  );
}

export default Products;
