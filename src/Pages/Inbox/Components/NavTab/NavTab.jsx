import React, { useState } from "react";
import Select from "../../../../Components/Select/Select";
import ToggleButton from "../../../../Components/ToggleButton/ToggleButton";
import Accordion from "../../../../Components/Accordion/Accordion";
import WhiteButton from "../../../../Components/Buttons/WhiteButton";

const options = ["Dropdown", "youtube", "facebook"];

const content = [
  {
    content: "Hell there",
    para: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing infomation.",
  },
  {
    content: "Hell there",
    para: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing infomation.",
  },
  {
    content: "Hell there",
    para: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing infomation.",
  },
];
function NavTab() {
  const [SetLink, setSetLink] = useState("Settings");
  const SectionSelector = (e) => {
    setSetLink(e.target.innerHTML);
  };
  console.log(SetLink);
  const active = "text-primary-100 border-primary-100";
  const passive = "text-general-80";
  const links = ["Profile", "Navigation", "Account", "Settings"];

  return (
    // <div className="tabContainer h-fit overflow-x-scroll no-scrollbar ">
    //   <div className="item-wrapper flex gap-8 relative h-fit w-full">
    //     {links.map((item) => {
    //       console.log(SetLink === item);

    //       return (
    //         <div
    //           className={` ${
    //             SetLink === item ? active : passive
    //           } tab-item  duration-300 h-fit text-para pb-4  border-b-2  cursor-pointer`}
    //           onClick={(e) => SectionSelector(e)}
    //         >
    //           {item}
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className="w-full border-b-2 border-general-40 absolute top-[40px] -z-10"></div>
    // </div>
    // <form class="flex items-center space-x-6">
    //   <label class="block">
    //     <span class="sr-only">Choose profile photo</span>
    //     <input
    //       type="file"
    //       class="block w-full text-sm text-slate-500
    //   file:mr-4 file:py-2 file:px-4
    //   file:rounded-full file:border-0
    //   file:text-sm file:font-semibold
    //   file:bg-violet-50 file:text-violet-700
    //   hover:file:bg-violet-100

    //   block w-full text-para text-general-500
    //    file:py-2 file:px-6
    //   file:rounded file:border-0 border rounded file:border-general-50
    //   file:text-para file:font-para
    //   file:bg-white file:text-primary-100
    //   hover:file:bg-primary-30
    // "
    //     />
    //   </label>
    //   {/* <div className="margin mt-20 w-full ">
    //     <Select options={options} />
    //   </div>
    //   <div className="toggle-button">
    //     <ToggleButton />
    //   </div> */}
    //   {}

    //   {/* <div className="accordion-wrapper w-full">
    //     {content.map((x) => {
    //       return <Accordion content={x.para} header={x.content} />;
    //     })}
    //   </div> */}
    // </form>
    <div className="fileWrapper m-80 w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full border border-general-60 border-dashed rounded cursor-pointer "
      >
        <div class="flex flex-col items-center justify-center py-7 px-2">
          <WhiteButton text="Add file " />
          <p class="text-text2reg text-general-80 text-center mt-3">
            Or drag and drop files
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
}

export default NavTab;
