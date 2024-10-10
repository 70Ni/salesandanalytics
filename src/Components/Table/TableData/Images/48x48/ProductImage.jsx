import React from "react";

function ProductImage({ ProductImg }) {
  return (
    <div className="w-12 h-12 mr-4 max-[520px]:mr-2">
      <div className="w-12 h-12 mr-4 max-[520px]:mr-2">
        <img src={ProductImg} alt="image" className="" />
      </div>
    </div>
  );
}

export default ProductImage;
