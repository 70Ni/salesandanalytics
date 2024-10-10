import React from "react";
import TableCell from "./NewTable/TableCell";
import Table from "./NewTable/Table";
import SectionNav from "../Components/Navigation/SectionNav/SectionNav";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import sectionImage from "../Images/Illustration/customer.svg";
import NavBlocker from "../Components/NavFlat/NavBlocker";
import addButton from "../Images/IconComponents/AddIcon";

// const HeaderData = [
//   { header: "Products" },
//   { backlink: "" },
//   {
//     buttons: [
//       {
//         primary: false,
//         buttonText: "Export",
//         // icon: <Settings color={"#1E5EFF"} />,
//       },
//       {
//         primary: true,
//         buttonText: "Add Products",
//         icon: <AddIcon color={"#ffffff"} />,
//         action: {
//           type: "Navigation",
//           link: "/productsadd",
//         },
//       },
//     ],
//   },
// ];
const action = {
  type: "Navigation",
  link: "/Dashboard",
};

const tab = ["user", "UserInterface", "Files", "userscollection"];

function EmptyPage() {
  return (
    <div className=" outer-container w-full mx-10 box-border">
      <NavBlocker />
      <div className="Container-inner box-border">
        <div className="Header-action-section text-left my-[30px]">
          <div className="Header text-Heading5 text-general-100">
            Empty page
          </div>
        </div>
        <div className="Main-section border border-general-50 rounded-md p-7 w-full h-full box-border">
          <div className="order-empty-state gap-p24 flex flex-col items-center justify-center w-full h-full box-border">
            <img src={sectionImage} alt="" />
            <div className="content-wrapper">
              <div className="text-Heading6 mb-3 text-center">
                Nothing found
              </div>
              <div className="text-para text-general-80 max-w-[500px] text-center">
                This page might be temporarily disabled. Go back home
              </div>
            </div>
            <div className="order-wrapper w-fit">
              <PrimaryButton
                text="Back to dashboard"
                icon={addButton}
                action={action}
              />
              {/* <div className="text-para text-primary-100 mt-4  text-center cursor-pointer">
                Read More
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;
