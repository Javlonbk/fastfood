import React, { useState } from "react";
import { ProductsData } from "../../datas/ProductsData";
import ProductAddCanvas from "../../offcanvas/ProductAddCanvas";
import ProductList from "./ProductList/ProductList";
import { ProductsC } from "./style";
import AddNewProduct from "../../Form/AddNewProduct.jsx";

const Products = () => {
  const menu = ["Mahsulot", "kategoriya", "narxi", "qo`shimcha", "action"];

  return (
    <ProductsC>
      <ProductsC.Header>
        <ProductsC.Add>
          <ProductAddCanvas
            componentTitle={"Yangi mahsulot qo`shish"}
            component={
              <AddNewProduct componentTitle={"Yangi mahsulot qo`shish "} />
            }
          />
          <p>Yangi maxsulot qo’shish</p>
        </ProductsC.Add>
      </ProductsC.Header>
      <ProductsC.Menu>
        {menu.map((item) => {
          return <p key={item}>{item.toUpperCase()}</p>;
        })}
      </ProductsC.Menu>
      <ProductList />
    </ProductsC>
  );
};

export default Products;
