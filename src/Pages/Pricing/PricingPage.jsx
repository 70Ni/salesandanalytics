import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PricingBox from "../../Components/PricingBox/PricingBox";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import Accordion from "../../Components/Accordion/Accordion";
import pricingplan from "../../api/Pricing";
import FAQ from "../../api/FAQ.json";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function PricingPage() {
  const HeaderData = [
    { header: "Settings" },
    { backlink: "" },
    {
      buttons: [
        // {
        //   primary: false,
        //   buttonText: "Cancel",
        //   // icon: <Settings color={"#1E5EFF"} />,
        // },
        // {
        //   primary: true,
        //   buttonText: "Save",
        //   // icon: <AddIcon color={"#ffffff"} />,
        // },
      ],
    },
  ];
  const [Anually, setAnually] = useState(true);

  const uui = uuid();
  console.log(uui);

  return (
    <div className=" outer-container mb-4">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner flex gapping w-full">
        <div className="Main-section card flex flex-col items-center">
          <div className="cusomerinfo-card mb-10 flex flex-col items-center">
            <div className="subHeader mb-4">Pricing Plans</div>
            <div className="subHeader3 text-center max-w-[500px]">
              Familiarize yourself with the payment plans below. Pick best
              pracing plan to fit your needs.
            </div>
          </div>
          <div className="billig-buttons-wrapper flex justify-center outline-offset-2  items-center cursor-pointer para border border-general-50 rounded w-fit mb-10">
            {/* //set style and data <= data to send to the card should be set by state */}

            <div
              onClick={() => setAnually(false)}
              className={`bill-Monthly ${
                !Anually &&
                "border-primary-90 text-primary-100 border-2 rounded"
              } subHeader3 text-center px-[10px] py-2  mr-[10px] ring-offset-2 outline-offset-2`}
            >
              Bill Monthly
            </div>
            <div
              onClick={() => setAnually(true)}
              className={`bill-Monthly ${
                Anually && "border-primary-90 text-primary-100 border-2 rounded"
              } subHeader3 text-center px-[10px] py-2  ml-[10px] outline-offset-2`}
            >
              Bill Annually
            </div>
          </div>
          <div className="subscription-section flex items-center justify-center gap-p16 w-full max-[1120px]:flex-wrap ">
            {Anually
              ? pricingplan.annually.map((x) => {
                  return <PricingBox data={x} />;
                })
              : pricingplan.monthly.map((x) => {
                  return <PricingBox data={x} />;
                })}

            {/* <PricingBox recommended />
            <PricingBox /> */}
          </div>
          <div className="pricing-note subHeader3 mt-7">
            Cancel or upgrade your plan anytime
          </div>
        </div>

        {/* <div className="Side-section flex flex-col  basis-3/12 gapping">
       
        </div> */}
      </div>
      <div className="Faq-wrapper p-7 mt-[30px] bg-white border rounded-md border-general-50">
        <div className="Header subHeader text-general-100 pb-7">
          Frequently Asked Questions
        </div>
        {}
        {FAQ.map((x, i) => {
          return (
            <div className="accordion-wrapper">
              <Accordion
                header={x.question}
                content={x.answer}
                id={uui}
              />
            </div>
          );
        })}
      </div>
      {/* <div className="Faq-wrapper p-7 mt-[30px] bg-white border rounded-md border-general-50">
        <div className="Header text-Heading6 text-general-100 pb-7">
          Frequently Asked Questions
        </div>
        <div className="accordion-wrapper">
          <Accordion
            header={"Is there any discount for yearly subscription?"}
            content={
              "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing information."
            }
          />
        </div>
      </div> */}
    </div>
  );
}

export default PricingPage;
