import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <button>check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
