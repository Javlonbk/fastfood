import React from "react";
import ProductAddCanvas from "../../offcanvas/ProductAddCanvas";
import ProductList from "./ProductList/ProductList";
import { ProductsC } from "./style";
import AddNewProduct from "../../Form/AddNewProduct.jsx";
import { FilterComponent, SearchComponent } from "../../Form/SearchInput";
import { useProduct } from "../../context/ProductContext";

const Products = () => {
  const menu = ["Mahsulot", "kategoriya", "narxi", "qo`shimcha", "action"];
  
  const {searchProduct} = useProduct()

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
        <SearchComponent>
          <SearchComponent.SearchInput onChange={(e) => searchProduct(e.target.value)} placeholder="Qidirish" />
          <SearchComponent.SearchIcon />
        </SearchComponent>
        <FilterComponent/>
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
