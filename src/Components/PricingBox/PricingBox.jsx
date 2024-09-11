import React from "react";
import planData from "../../api/Pricing";
// import activeIcon from "../../Images/Icons/";
import TickIcon from "../../Images/IconComponents/TickIcon";
import RemoveIcon from "../../Images/IconComponents/RemoveIcon";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import WhiteButton from "../Buttons/WhiteButton";

function PricingBox({ recommended, data }) {
  {
    // console.log(Object.values(data.features));
    Object.keys(data.features).forEach((key) => {
      // console.log(`${key}: ${data.features[key]}`);
    });
  }

  return (
    <div className="container flex items-center justify-center max-w-[340px] max-[1120px]:max-w-full">
      <div className="pricing-card relative w-full">
        <div className="pricing-content  card hover:border-primary-90 hover:border transition-all ">
          {data.recommended ? (
            <div className="recommended-tag px-2 py-1 rounded text-white text-text2reg bg-primary-90 absolute -top-p12 left-1/3">
              Recommended
            </div>
          ) : null}
          <div className="pricing-section flex flex-col items-start w-full max-[1120px]:items-center">
            <div className="plan-price text-Heading4 text-left">
              {data.plan}
              <span className="price-duration ml-2 text-para text-general-80">
                /month
              </span>
            </div>
            <div className="plan-type pt-5 pb-7 border-b border-general-40">
              <div className="plantype text-Heading6 text-general-100 text-left">
                {data.planType}
              </div>
              <div className="business-tag mt-2 text-general-80 text-left">
                Start your business
              </div>
            </div>
            <div className="plan-details-section mb-base w-full">
              {Object.keys(data.features).map((item) => {
                return (
                  <div className="item-wrapper flex items-center max-[1120px]:justify-between">
                    {data.features[item] ? (
                      <TickIcon color="#1FD286" />
                    ) : (
                      <RemoveIcon color="#7E84A3" />
                    )}
                    <div className="para p-p12">{item}</div>
                  </div>
                );
              })}
            </div>
            {data.recommended ? (
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

// {planData.map((item) => {
//   return (
//     <div className="item-wrapper flex items-center my-3 max-[1120px]:justify-between">
//       {/* <TickIcon color="#1FD286" /> */}
//       <RemoveIcon color="#7E84A3" />
//       <div className="text-para text-lefts text-general-80 p-p12">
//         {item}
//       </div>
//     </div>
//   );
// })}

export default PricingBox;
