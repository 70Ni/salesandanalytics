import React from "react";
import OrderImage from "../../Images/Illustration/order.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AddIcon from "../../Images/IconComponents/AddIcon";
import NavBlocker from "../../Components/NavFlat/NavBlocker";

function OrderEmpty() {
  const addButton = <AddIcon color={"#ffffff"} />;

  return (
    <div className=" outer-container w-full mx-10 box-border">
      <NavBlocker />
      <div className="Container-inner box-border">
        <div className="Header-action-section text-left my-[30px]">
          <div className="Header text-Heading5 text-general-100">Orders</div>
        </div>
        <div className="Main-section border bg-white border-general-50 rounded-md p-7 w-full h-full box-border">
          <div className="order-empty-state gap-p24 flex flex-col items-center justify-center w-full h-full box-border">
            <img src={OrderImage} alt="" />
            <div className="content-wrapper">
              <div className="text-Heading6 mb-3 text-center">No Order Yet</div>
              <div className="text-para text-general-80 max-w-[500px] text-center">
                All the upcoming orders from your store will be visible in this
                page. You can add orders by yourself if you sell offline.
              </div>
            </div>
            {/* <div className="order-wrapper w-fit text-center">
              <PrimaryButton text="Add Order" icon={addButton} />
              <div className="text-para text-primary-100 mt-4 cursor-pointer">
                Read More
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderEmpty;
