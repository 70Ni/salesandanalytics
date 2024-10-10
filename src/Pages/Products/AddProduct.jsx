import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Input from "../../Components/Input/Medium/Input";
import TextInput from "../../Components/Input/Large/TextInput";
import CheckBox from "../../Components/Others/CheckBox";
import Tags from "../../Components/Tags/Tags";
import TagSection from "../../Layouts/TagSection/TagSection";
import CategorySection from "./Components/CategorySection";
import ProductSection from "./Components/ProductSection";
import Select from "../../Components/Select/Select";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import AddIcon from "../../Images/IconComponents/AddIcon";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import FileInput from "../../Components/FileInput/FileInput";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import FooterAction from "../../Components/FooterSave/FooterAction";
import InputFlex from "../../Layouts/InputFlex/InputFlex";

function AddProduct() {
  const HeaderData = [
    { header: "Products" },
    { backlink: "/products" },
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
  return (
    <div className=" outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner Tabletinfo flex gapping">
        <div className="Main-section border border-general-50 rounded-md p-7 basis-9/12 bg-white">
          <div className="product-adder-card">
            <div className="header text-paraBold text-general-100 mb-p24 text-left">
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
            <div className="image-uploader">
              <div className="header text-paraBold text-general-100 mt-7 mb-p24 text-left">
                Images
              </div>
              <FileInput />
              <div className="border-b-[1px] border-general-50 pt-10"></div>
            </div>
            <div className="header text-paraBold text-general-100 mb-p24 text-left mt-7">
              Price
            </div>
            <InputFlex
              title={["Product Price", "Discount Price"]}
              placeholder={["Enter price", "Price at Discount"]}
            />
            {/* <div className="price-input-wrapper flex gap-7">
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
            </div> */}
            <div className="tax-option-wrapper flex items-center mt-6">
              <ToggleButton />
              <div className="ml-3 text-para text-general-100">
                Add tax for this product
              </div>
            </div>
            <div className="border-b-[1px] border-general-50 pt-10"></div>
            {/* border for the above section */}
            <div className="variation-wrapper">
              <div className="header text-paraBold text-general-100 mb-p24 text-left mt-7">
                Different Options
              </div>
            </div>
            <div className="header text-paraBold text-general-100 mb-p24 text-left mt-7">
              Shipping{" "}
            </div>
            <div className="tax-option-wrapper flex items-center">
              <ToggleButton />
              <div className="ml-3 text-para text-general-100">
                This product has multiple options
              </div>
            </div>

            <div className="header text-paraBold text-general-100 mb-p20 text-left mt-7">
              Option 1{" "}
            </div>
            <div className="tax-option-wrapper flex items-center gap-7 max-[484px]:flex-wrap">
              <Select title="Size" />
              <Select title="Value" />
            </div>
            <div className="text-para text-primary-100 mt-5 cursor-pointer">
              Add More
            </div>
            <div className="border-b-[1px] border-general-50 pt-10"></div>

            <div className="shopping-input-wrapper">
              <div className="header text-paraBold text-general-100 mb-p20 text-left mt-7">
                Shipping
              </div>
              <InputFlex
                title={["Enter Weight", "Country"]}
                placeholder={["Weight", "Enter Country"]}
              />
              {/* <div className="input-wrapper flex gap-7">
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
              </div> */}
            </div>
          </div>
          <div className="tax-option-wrapper flex items-center mt-6">
            <ToggleButton />
            <div className="ml-3 text-para text-general-100">
              This is digital item
            </div>
          </div>
        </div>
        <div className="Side-section flex flex-col  basis-3/12 gapping">
          <div className="category-tag-wrapper flex flex-col gapping">
            <CategorySection />
            <TagSection
              taglist={["T-Shirt", "Men Clothes", "Summer Collection"]}
            />
          </div>
          <ProductSection />
        </div>
      </div>
      <FooterAction />
    </div>
  );
}

export default AddProduct;
