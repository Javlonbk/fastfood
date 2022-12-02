import React from "react";
import AddCanvas from "../../offcanvas/AddCanvas";
import ProductList from "./ProductList/ProductList";
import { ProductsC } from "./style";
import { Container } from "../Conatainer";
import AddNewProduct from "../../Form/AddNewProduct.jsx";
import { FilterComponent, SearchComponent } from "../../Form/SearchInput";
import { useProduct } from "../../context/ProductContext";

const Products = () => {
  const menu = ["Mahsulot", "kategoriya", "narxi", "qo`shimcha", "action"];

  const { searchProduct } = useProduct();

  return (
    <Container>
      <ProductsC>
        <Container.Header>
          <Container.Add>
            <AddCanvas
              componentTitle={"Yangi mahsulot qo`shish"}
              component={
                <AddNewProduct componentTitle={"Yangi mahsulot qo`shish "} />
              }
            />
            <p>Yangi maxsulot qo’shish</p>
          </Container.Add>
          <SearchComponent>
            <SearchComponent.SearchInput
              onChange={(e) => searchProduct(e.target.value)}
              placeholder="Qidirish"
            />
            <SearchComponent.SearchIcon />
          </SearchComponent>
          <FilterComponent />
        </Container.Header>
        <Container.Menu>
          {menu.map((item) => {
            return <p key={item}>{item.toUpperCase()}</p>;
          })}
        </Container.Menu>
        <ProductList />
      </ProductsC>
    </Container>
  );
};

export default Products;
