import React from "react";
import data_product from "../assets/data";
import Item from "../item/Item";
import "./RelatedProducts.css";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>related products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
