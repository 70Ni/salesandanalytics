import React from "react";
import ProductImage from "./Images/48x48/ProductImage";
import CouponImg from "./Images/48x48/CouponImg";
import Avatar from "./Images/48x48/Avatar";

function TDImage({ ItemName, Name, subTxt, ProductImg, category }) {
  return (
    <div className="flex items-center py-3 px-2">
      {ProductImg ? <ProductImage ProductImg={ProductImg} /> : null}
      {category ? <CouponImg category={category} /> : null}
      {Name ? <Avatar Name={Name} /> : null}
      <div className="wrapper">
        <div className="text-text2med text-general-100">{ItemName}</div>
        <div className="text-text2reg text-general-80">{subTxt}</div>
      </div>
    </div>
  );
}

export default TDImage;
