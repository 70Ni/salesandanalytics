import React, { useEffect, useState } from "react";
import CategorySection from "../Products/Components/CategorySection";
import TagSection from "../../Layouts/TagSection/TagSection";
import ProductSection from "../Products/Components/ProductSection";
import Input from "../../Components/Input/Medium/Input";
import TextInput from "../../Components/Input/Large/TextInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import InputFlex from "../Customers/Components/InputFlex";
import ProfileDetails from "./Components/ProfileDetails";
import RegionalSetting from "./Components/RegionalSetting";
import NotificationSection from "./SettingsLayouts/NotificationSection";
import backArrow from "../../Images/Icons/08 Arrows/02 Left.svg";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import AddIcon from "../../Images/IconComponents/AddIcon";
import Settings from "../../Images/IconComponents/Settings";
import FooterAction from "../../Components/FooterSave/FooterAction";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import SectionNav from "../../Components/Navigation/SectionNav/SectionNav";
import ProfileLayout from "./SettingsLayouts/ProfileLayout";
import getNav from "../../utils/SectionNav";
import AccountSection from "./SettingsLayouts/AccountSection";
import SecuritySection from "./SettingsLayouts/SecuritySection";

const HeaderData = [
  { header: "Settings" },
  { backlink: "" },
  {
    buttons: [
      {
        primary: false,
        buttonText: "Cancel",
        // icon: <Settings color={"#1E5EFF"} />,
      },
      {
        primary: true,
        buttonText: "Save",
        // icon: <AddIcon color={"#ffffff"} />,
      },
    ],
  },
];

const Sections = ["Profile", "Notification", "Account", "Security"];
function SettingsPage() {
  const [Section, setSection] = useState("Profile");

  const getNavSection = (e) => {
    console.log(e);
    if (e) {
      return setSection(e);
    }
  };
  console.log(Section);
  return (
    <div className=" outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner flex gap-[30px]">
        <div className="Main-section border bg-white border-general-50 rounded-md p-7 w-full">
          <SectionNav Sections={Sections} action={getNavSection} />
          <div className="section-viewer">
            {Section === "Profile" && <ProfileLayout />}
            {Section === "Notification" && <NotificationSection />}
            {Section === "Account" && <AccountSection />}
            {Section === "Security" && <SecuritySection />}
          </div>

          {/* Notification section from below */}
        </div>
        {/* <div className="Side-section flex flex-col  basis-3/12 gap-[30px]">
          <CategorySection />
          <TagSection
            taglist={["T-Shirt", "Men Clothes", "Summer Collection"]}
          />
          <ProductSection />
        </div> */}
      </div>
      <FooterAction />
    </div>
  );
}

export default SettingsPage;
