import React from "react";
import OrderImage from "../../Images/Illustration/Category.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AddIcon from "../../Images/IconComponents/AddIcon";
import NavBlocker from "../../Components/NavFlat/NavBlocker";


const action = {
  type: "Navigation",
  link: "/categoriesedit",
};

function CategoryEmpty() {
  const addButton = <AddIcon color={"#ffffff"} />;

  return (
    <div className=" outer-container w-full mx-10 box-border">
      <NavBlocker />
      <div className="Container-inner box-border">
        <div className="Header-action-section text-left my-[30px]">
          <div className="Header text-Heading5 text-general-100">
            Categories
          </div>
        </div>
        <div className="Main-section border border-general-50 rounded-md p-7 w-full h-full box-border bg-white">
          <div className="order-empty-state gap-p24 flex flex-col items-center justify-center w-full h-full box-border">
            <img src={OrderImage} alt="" />
            <div className="content-wrapper text-center">
              <div className="text-Heading6 mb-3">Add Category</div>
              <div className="text-para text-general-80 max-w-[500px]">
                Organize all your items in stock by creating and adding them to
                categories. Categories helps to find items faster for your
                customers.{" "}
              </div>
            </div>
            <div className="order-wrapper w-fit">
              <PrimaryButton text="Add Category" icon={addButton} action={action} />
              <div className="text-para text-primary-100 mt-4 cursor-pointer text-center">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryEmpty;
