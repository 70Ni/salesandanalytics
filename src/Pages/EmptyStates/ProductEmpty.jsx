import React from "react";
import sectionImage from "../../Images/Illustration/Product.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AddIcon from "../../Images/IconComponents/AddIcon";
import NavBlocker from "../../Components/NavFlat/NavBlocker";

function ProductEmpty() {
  const addButton = <AddIcon color={"#ffffff"} />;

  const action = {
    type: "Navigation",
    link: "/productsadd",
  };

  return (
    <div className=" outer-container w-full mx-10 box-border">
      <NavBlocker />
      <div className="Container-inner box-border">
        <div className="Header-action-section text-left my-[30px]">
          <div className="Header text-Heading5 text-general-100">Products</div>
        </div>
        <div className="Main-section border border-general-50 rounded-md p-7 w-full h-full bg-white box-border">
          <div className="order-empty-state gap-p24 flex flex-col items-center justify-center w-full h-full box-border">
            <img src={sectionImage} alt="" />
            <div className="content-wrapper">
              <div className="text-Heading6 mb-3 text-center">Add Products</div>
              <div className="text-para text-general-80 max-w-[500px] text-center">
                Start making sales by adding your products. You can import and
                manage your products at any time.
              </div>
            </div>
            <div className="order-wrapper w-fit">
              <PrimaryButton
                text="Add Product"
                icon={addButton}
                action={action}
              />
              <div className="text-para text-primary-100 mt-4  text-center cursor-pointer">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEmpty;
