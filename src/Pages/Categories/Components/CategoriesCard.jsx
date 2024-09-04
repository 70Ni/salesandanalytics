import React from "react";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import EditIcon from "../../../Images/IconComponents/EditIcon";

const Icon = <EditIcon color="#1E5EFF" />;

const action = {
  type: "Navigation",
  link: "/categoriesedit",
};

function CategoriesCard({ data }) {
  return (
    <div className="category-card rounded-md bg-white w-[350px] flex-grow">
      <div className="imagesection w-full bg-black rounded-t-lg flex items-center justify-center relative">
        <div className="hover-slide  flexbt justify-center rounded-t-lg  w-full h-full bg-general-90 bg-opacity-50 absolute opacity-0 hover:opacity-100">
          <div className="hoverbutton">
            <WhiteButton text="Edit" icon={Icon} action={action} />
          </div>
        </div>
        <img
          src={data.images}
          alt="item image"
          className="image w-full  h-[240px]  object-cover rounded-t-md"
        />
      </div>
      <div className="text-section py-5 px-7">
        <div className="category-name text-paraBold">
          {data.Category}
        </div>
        <div className="category-count para">
          {data.itemCount} items
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
