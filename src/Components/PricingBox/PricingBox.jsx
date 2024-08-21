import React from "react";
import planData from "../../api/Pricing";
// import activeIcon from "../../Images/Icons/";
import TickIcon from "../../Images/IconComponents/TickIcon";
import RemoveIcon from "../../Images/IconComponents/RemoveIcon";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import WhiteButton from "../Buttons/WhiteButton";

function PricingBox({ recommended }) {
  return (
    <div className="container flex items-center justify-center max-w-[340px]">
      <div className="pricing-card relative w-full">
        <div className="pricing-content  flex p-7 border border-general-40 rounded flex hover:border-primary-90 hover:border transition-all  ">
          {recommended ? (
            <div className="recommended-tag px-2 py-1 rounded text-white text-text2reg bg-primary-90 absolute -top-3 left-1/3">
              Recommended
            </div>
          ) : null}
          <div className="pricing-section flex flex-col items-start w-full">
            <div className="plan-price text-Heading4 text-left">
              $12
              <span className="price-duration ml-2 text-para text-general-80">
                /month
              </span>
            </div>
            <div className="plan-type pt-5 pb-7 border-b border-general-40">
              <div className="plantype text-Heading6 text-general-100 text-left">
                Basic Plan
              </div>
              <div className="business-tag mt-2 text-general-80 text-left">
                Start your business
              </div>
            </div>
            <div className="plan-details-section mb-7">
              {planData.map((item) => {
                return (
                  <div className="item-wrapper flex items-center my-3">
                    {/* <TickIcon color="#1FD286" /> */}
                    <RemoveIcon color="#7E84A3" />
                    <div className="text-para text-lefts text-general-80 px-3">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
            {recommended ? (
              <PrimaryButton text="Select Plan" />
            ) : (
              <WhiteButton text="Select Plan" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingBox;
