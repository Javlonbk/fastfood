import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { ProductListC } from "./style";
import { useProduct } from "./../../../context/ProductContext";

const ProductList = () => {
  const { products } = useProduct();
  return (
    <ProductListC>
      {products.map((item) => {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            image={<item.image />}
            product={item.product}
            category={item.category}
            price={item.price}
            information={item.information}
          />
        );
      })}
    </ProductListC>
  );
};

export default ProductList;
