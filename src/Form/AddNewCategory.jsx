import React, { useState } from "react";
import { useCategory } from "../context/CategoryContext";
import { AddNew } from "./style";

const AddNewCategory = ({ id = undefined }) => {
  const { getCategoryById, addCategory, updateCategory } = useCategory();
  const [newCategory, setNewCategory] = useState(getCategoryById(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) addCategory(newCategory);
    else updateCategory({ id, ...newCategory });
  };
  const getNewCategory = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <AddNew>
      <label htmlFor="nameUz">Category UZ</label>
      <input
        value={newCategory.nameUz}
        name="nameUz"
        id="nameUz"
        placeholder="Category UZ"
        onChange={getNewCategory}
        type="text"
      />
      <label htmlFor="nameRu">Category RU</label>
      <input
        value={newCategory.nameRu}
        name="nameRU"
        id="nameRU"
        placeholder="Category RU"
        onChange={getNewCategory}
        type="text"
      />
      <label htmlFor="main">Bosh kategoriyani biriktirish</label>
      <select
        name="main"
        id="main"
        onChange={getNewCategory}
        value={newCategory.main}
      >
        <option value="-">-</option>
        <option value="ichimlik">Ichimlik</option>
      </select>
      
      <button onClick={handleSubmit}>Saqlash</button>
    </AddNew>
  );
};

export default AddNewCategory;
