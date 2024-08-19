import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import VisibiltySection from "../Categories/Components/VisibiltySection";
import Avatar from "../../Components/Table/TableData/Images/48x48/Avatar";
import TextInput from "../../Components/Input/Large/TextInput";
import OverviewSection from "./Components/OverviewSection";
import TagSection from "../../Layouts/TagSection/TagSection";

function CustomerInfo() {
  return (
    <div className=" outer-container w-full mx-10">
      <div className="Header-functions-wrapper">
        <div className="Header-section text-Heading5 text-general-100 text-left">
          Customer Information
        </div>
        <div className="Action-buttons-wrapper">
          <PrimaryButton text="Hello" />
          //button small and actions to add
        </div>
      </div>
      <div className="Container-inner flex gap-[30px]">
        <div className="Main-section border border-general-50 rounded-md p-7 basis-9/12">
          <div className="cusomerinfo-card flex items-start mb-10">
            <Avatar Name={"Lenora Robinson"} Large />
            <div className="customer-content text-left ml-[18px]">
              <div className="text-paraBold mb-2">Lenora Robinson</div>
              <div className="text-text2reg text-general-80 flex flex-col">
                <span className="location">Ireland</span>
                <span className="Orders-history">5 Orders</span>
                <span className="cusomer-history">Customer for 2 years</span>
              </div>
            </div>
            /// star rating on the side link
            {/* https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/ */}
          </div>
          {/* https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/ */}
          <div className="border border-general-40"></div>
          <div className="customer-notes mt-7">
            <div className="header text-paraBold text-general-100 mb-6 text-left">
              Customer Notes
            </div>
            <TextInput
              title={"Notes"}
              placeholder={"Add notes about customer"}
            />
          </div>
          //customer order list
        </div>

        <div className="Side-section flex flex-col  basis-3/12 gap-[30px]">
          <OverviewSection />
          <TagSection taglist={["Vip Customer", "Europe"]} />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
