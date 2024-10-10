import React from "react";
import ProductImage from "./Images/48x48/ProductImage";
import CouponImg from "./Images/48x48/CouponImg";
import Avatar from "./Images/48x48/Avatar";

function TDImage({ ItemName, Name, subTxt, ProductImg, category,classn }) {
  return (
    <div className="flex items-center p-p12 px-2">
      {ProductImg ? <ProductImage classn={classn} ProductImg={ProductImg} /> : null}
      {category ? <CouponImg classn={classn} category={category} /> : null}
      {Name ? <Avatar classn={classn} Name={Name} /> : null}
      <div className={`${classn + "wrapper"} wrapper `}>
        <div className="paraBold">{ItemName}</div>
        <div className="para">{subTxt}</div>
      </div>
    </div>
  );
}

export default TDImage;
