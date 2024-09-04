import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SearchInput from "../../Components/Input/Large/SearchInput";
import KnowledgeBaseCard from "./Components/KnowledgeBaseCard";
import DefaultCard from "./Components/DefaultCard";
import Contact from "./Components/Contact";
import NavBlocker from "../../Components/NavFlat/NavBlocker";

const defaultCardContent = [
  {
    header: "Community Forum",
    content:
      "Get help from community members, ask any questions and get answers faster.",
    cta: "Join Community",
    link: "/",
  },
  {
    header: "Webinars",
    content:
      "Join our series of webinars where you can ask questions live and see a presentation.",
    cta: "Register",
    link: "/",
  },
];

function KnowledgeBase() {
  return (
    <div className=" outer-container w-full mx-10 box-border">
      <NavBlocker />
      <div className="Container-inner box-border">
        <div className="Header-action-section text-left my-[30px]">
          <div className="Header text-Heading5 text-general-100">
            Knowledge Base
          </div>
        </div>
        <div className="Main-section w-full">
          <div className="Knowledge-wrapper gap-6 flex flex-col items-center justify-between max-w-[1200px]">
            {/* <img src={OrderImage} alt="" /> */}
            <div className="content-wrapper w-full">
              <div className="Search-wrapper w-full mb-[6px]">
                <SearchInput placeholder={"Search..."} />
              </div>
              <div className="knowledge-base-cards-cont flex gap-[30px] w-full">
                <KnowledgeBaseCard />
                <KnowledgeBaseCard />
                <KnowledgeBaseCard />
                <KnowledgeBaseCard />
              </div>  
            </div>
            <div className="default-card-wrapper flex gap-[30px] w-full">
              {defaultCardContent.map((x) => {
                return (
                  <DefaultCard
                    header={x.header}
                    content={x.content}
                    cta={x.cta}
                    link={x.link}
                  />
                );
              })}
            </div>
            <div className="border-[0.5px] border-general-50 w-full"></div>
          </div>
          <div className="contact-wrapper m-auto my-[30px]">
            {/* <PrimaryButton text="Add Category" icon={addButton} /> */}
            {/* <div className="text-para text-primary-100 mt-4 cursor-pointer">
                Read More
              </div> */}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeBase;
