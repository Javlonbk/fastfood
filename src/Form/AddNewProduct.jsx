import React, { useState } from "react";
import { AddNewProductC } from "./style";
import { useProduct } from "./../context/ProductContext";

const AddNewProduct = ({ id = undefined }) => {
  const { getProductById, addProduct, updateProduct } = useProduct();
  const [newProduct, setNewProduct] = useState(getProductById(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) addProduct(newProduct);
    else updateProduct({ id, ...newProduct });
  };
  const getNewProduct = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <AddNewProductC>
      <label htmlFor="product">Maxsulot nomi</label>
      <input
        value={newProduct.product}
        name="product"
        id="product"
        placeholder="Mahsulot nomi"
        onChange={getNewProduct}
        type="text"
      />
      <label htmlFor="category">Kategoriya</label>
      <select
        name="category"
        id="category"
        onChange={getNewProduct}
        value={newProduct.category}
      >
        <option value="lavash">Lavash</option>
        <option value="burger">Burger</option>
        <option value="ichimlik">Ichimlik</option>
      </select>
      <label htmlFor="price">Narxi</label>
      <input
        value={newProduct.price}
        name="price"
        id="price"
        placeholder=",UZS"
        onChange={getNewProduct}
        type="text"
      />
      <label htmlFor="information">Qo’shimcha ma’lumot</label>
      <input
        value={newProduct.information}
        name="information"
        id="information"
        placeholder="Qo`shimcha ma`lumot"
        onChange={getNewProduct}
        type="text"
      />
      <button onClick={handleSubmit}>Saqlash</button>
    </AddNewProductC>
  );
};

export default AddNewProduct;
