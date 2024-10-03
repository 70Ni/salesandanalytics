import React from "react";
import image from "../../Images/Image.jpg";
import edit from "../../Images/Icons/01 Actions/13 Edit.svg";
import remove from "../../Images/Icons/01 Actions/09 Delete.svg";
import move from "../../Images/move.svg";

function ProductEdits({thumb,name}) {
  return (
    <div className="flexbt px-p16 px-p16 rounded max-[352px]:flex-col relative border [&_.actionicon]:hidden [&_.actionicon]:hover:block transition-opacity transition-transform">
      {/* <div className="hover-wrapper w-full h-full bg-slate-900 opacity-25 absolute left-0 rounded"></div> */}
      <div className="flexbt items-center">
        <img src={move} alt="" className="mr-4 cursor-pointer" />
        <img src={thumb} alt="" className="h-12 w-12 rounded" />
        <div className="paraMed mx-3">{name}</div>
      </div>
      <div className="actions-wrapper flex items-center gap-p20 pr-3 max-[352px]:mt-5 max-[352px]:gap-0 max-[352px]:justify-between max-[352px]:w-full">
        <div className="icon-wrapper w-6 flex gap-2">
          <img
            src={edit}
            alt=""
            className="actionicon  hover:block cursor-pointer"
          />
          {/* <div className="para hidden max-[352px]:hover:block">Edit</div> */}
        </div>
        <div className="icon-wrapper w-6 flex gap-2">
          <img
            src={remove}
            alt=""
            className="actionicon  hover:block cursor-pointer"
          />
          {/* <div className="para hidden max-[352px]:hover:block">Remove</div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductEdits;
