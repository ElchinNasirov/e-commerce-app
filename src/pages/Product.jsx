import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import SelectedItem from "../components/selectedItem/SelectedItem";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <SelectedItem product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
