import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">description</div>
        <div className="descriptionbox-nav-box fade">reviews (105)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure praesentium cupiditate distinctio illum recusandae quam animi temporibus velit doloribus quibusdam nam, tempore, soluta
          officiis harum, deleniti omnis fuga laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint, voluptate, nemo tenetur ipsa fugiat voluptatibus alias eos non eius earum,
          nobis libero! Eligendi optio ullam adipisci cumque, laborum inventore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis fugiat cum iusto architecto pariatur! Ea minus corrupti magnam, repudiandae id animi maxime ipsam dicta qui, porro
          consectetur aliquam recusandae!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
