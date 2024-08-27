import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PricingBox from "../../Components/PricingBox/PricingBox";

function PricingPage() {
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
      <div className="Container-inner flex gap-[30px] w-full">
        <div className="Main-section border border-general-50 rounded-md p-7 w-full flex flex-col items-center  ">
          <div className="cusomerinfo-card mb-10 flex flex-col items-center">
            <div className="text-Heading6 mb-4">Pricing Plans</div>
            <div className="text-para text-center text-general-80 max-w-[500px]">
              Familiarize yourself with the payment plans below. Pick best
              pracing plan to fit your needs.
            </div>
          </div>
          <div className="billig-buttons-wrapper flex justify-center items-center cursor-pointer text-para text-general-80 border border-general-50 rounded w-fit mb-10">
            {/* //set style and data <= data to send to the card should be set by state */}

            <div className="bill-Monthly  px-[10px] py-2 rounded mr-[10px]">
              Bill Monthly
            </div>
            <div className="bill-Monthly text-para px-[10px] py-2 border-2 border-primary-90 rounded text-primary-100">
              Bill Annually
            </div>
          </div>
          <div className="subscription-section flex items-center justify-center gap-4 w-full">
            <PricingBox />
            <PricingBox recommended />
            <PricingBox />
          </div>
        <div className="pricing-note text-para text-general-80 mt-7">
          Cancel or upgrade your plan anytime
        </div>
        </div>

        {/* <div className="Side-section flex flex-col  basis-3/12 gap-[30px]">
       
        </div> */}
      </div>
      /// accordion and FAQ
    </div>
  );
}

export default PricingPage;
