import React from "react";

function ProductImage({ ProductImg }) {
  return (
    <div>
      <img src={ProductImg} alt="image" className="h-12 w-12" />
    </div>
  );
}

export default ProductImage;
