import React from "react";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import AddIcon from "../../Images/IconComponents/AddIcon";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import categories from "../../api/Categories.json";
import CategoriesCard from "./Components/CategoriesCard";
import image from "../../../src/Images/Image.jpg";

console.log(categories);

function CategorieSection() {
  const HeaderData = [
    { header: "Customer Info" },
    { backlink: "" },
    {
      buttons: [
        // {
        //   primary: false,
        //   buttonText: "Cancel",
        //   // icon: <Settings color={"#1E5EFF"} />,
        // },
        {
          primary: true,
          buttonText: "Add Categories",
          icon: <AddIcon color={"#ffffff"} />,
          action: {
            type: "Navigation",
            link: "/categoriesedit",
          },
        },
      ],
    },
  ];
  
  return (
    <div className=" outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner flex">
        <div className="categories-wrapper flex flex-wrap gap30 mb-10">
          {categories.map((item) => {
            return <CategoriesCard data={item} />;
          })}
          {/* <div className="category-card rounded-md bg-white w-auto">
            <div className="imagesection">
              <img
                src={categories[0].image}
                alt="item image"
                className=" w-full max-w-96  object-cover"
              />
            </div>
            <div className="text-section py-5 px-7">
              <div className="category-name text-paraBold text-general-100">
                Item name
              </div>
              <div className="category-count text-text2reg text-general-80">
                count items
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="Side-section flex flex-col  basis-3/12 gap-[30px]"></div> */}
      </div>
    </div>
  );
}

export default CategorieSection;
