import React from "react";
import Item from "../item/Item";
import new_collections from "../assets/new_collections";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>new collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
