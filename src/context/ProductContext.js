import React, { useContext, useState } from "react";
import { ProductsData as productsExampleData } from "../datas/ProductsData";

const ProductContext = React.createContext();
export function useProduct() {
  return useContext(ProductContext);
}

const DEFAUL_PRODUCT = {
  product: "",
  category: "lavash",
  price: "",
  information: "",
};
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsExampleData);

   // <-----search the product by name function----->
   function searchProduct(value){
     let findedProducts = productsExampleData.filter(product => {
      return product.product.toLowerCase().includes(value.toLowerCase())
    })
    setProducts(findedProducts)
   }

  // <-----get the product's id function----->
  function getProductById(id) {
    const findedProduct = products.find((product) => product.id === id);
    if (!findedProduct) return DEFAUL_PRODUCT;
    return findedProduct;
  }
   
  // <-----add new product function----->
  function addProduct(newProduct) {
    // newProduct:{name,category,price,information}
    let newProductList = {
      id: products.length + 1,
      image: products[0].image,
      ...newProduct,
    };
    setProducts([...products, newProductList]);
  }

   // <-----delete the products function----->
  function deleteProduct(id) {
    const nextProductList = products.filter((product) => product.id !== id);
    setProducts(nextProductList);
  }

   // <-----update the products function----->
  function updateProduct({ id, name, category, price,        information }) {
    const currentProduct = products.find((product) => product.id === id);
    currentProduct.name = name;
    currentProduct.price = price;
    currentProduct.category = category;
    currentProduct.information = information;

    const nextProductList = products.map((product) => {
      if (product.id === id) return currentProduct;
      return product;
    });
    setProducts(nextProductList);
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        getProductById,
        searchProduct,
        addProduct,
        deleteProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
