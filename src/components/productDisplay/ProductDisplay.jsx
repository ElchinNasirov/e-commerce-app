import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-right"></div>
    </div>
  );
};

export default ProductDisplay;
