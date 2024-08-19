import React from "react";
import image from "../../Images/Image.jpg";
import edit from "../../Images/Icons/01 Actions/13 Edit.svg";
import remove from "../../Images/Icons/01 Actions/09 Delete.svg";
import move from "../../Images/move.svg";

function ProductEdits() {
  return (
    <div className="flex items-center justify-between py-4 px-4 rounded border [&_.actionicon]:hidden [&_.actionicon]:hover:block transition-opacity transition-transform">
      <div className="flex items-center">
        <img src={move} alt="" className="mr-4" />
        <img src={image} alt="" className="h-12 w-12 rounded" />
        <div className="text-text2med text-general-100 mx-3">
          Women Striped T-Shirt
        </div>
      </div>
      <div className="actions-wrapper flex gap-5 pr-3">
        <img src={edit} alt="" className="actionicon hover:block" />
        <img src={remove} alt="" className="actionicon hover:block" />
      </div>
    </div>
  );
}

export default ProductEdits;
