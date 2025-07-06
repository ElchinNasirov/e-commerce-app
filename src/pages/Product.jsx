import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
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
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
