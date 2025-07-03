import "./SelectedItem.css";
import arrow_icon from "../assets/breadcrum_arrow.png";
import React from "react";

const SelectedItem = (props) => {
  const { product } = props;

  return (
    <div className="selected-item">
      home
      <img src={arrow_icon} alt="" />
      shop
      <img src={arrow_icon} alt="" />
      {product.category || "Unknown Category"}
      <img src={arrow_icon} alt="" />
      {product.name || "Unknown name"}
    </div>
  );
};

export default SelectedItem;
