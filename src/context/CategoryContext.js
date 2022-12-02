import React, { useContext, useState } from "react";
import { categoriesData as categoryExampleData } from "../datas/CategoriesData";

const CategoryContext = React.createContext();
export function useCategory(){
    return useContext(CategoryContext);
}

const DEFAUL_CATEGORY = {
    nameUz:'',
    nameRu:'',
    main:'-'
};

export const CategoryProvider = ({children}) => {
    
    const[categories, setCategories] = useState(categoryExampleData)
   
    // <-----get the category's id function----->
  function getCategoryById(id) {
    const findedCategory = categories.find((category) => category.id === id);
    if (!findedCategory) return DEFAUL_CATEGORY;
    return findedCategory;
  }
   
  // <-----add new category function----->
  function addCategory(newCategory) {
    // newProduct:{nameUZ,nameRU,mainCategory}
    let newCategoryList = {
      id: categories.length + 1,
      ...newCategory,
    };
    setCategories([...categories, newCategoryList]);
  }
    // <-----search the category by name----->
    function searchCategory(value){
        let findedCategory = categoryExampleData.filter((category) => {
            return category.nameUz.toLowerCase().includes(value.toLowerCase())
        })
          setCategories(findedCategory)
    }
    // <-----delete the categories function----->
    function deleteCategory(id) {
        const nextCategoryList = categories.filter((category) => category.id !== id);
        setCategories(nextCategoryList);
    }
     // <-----update the categories function----->
  function updateCategory({ id, nameUz, nameRu, main}) {
    const currentCategory = categories.find((category) => category.id === id);
    currentCategory.nameUz = nameUz;
    currentCategory.nameRu = nameRu;
    currentCategory.main = main;

    const nextCategoryList = categories.map((category) => {
      if (category.id === id) return currentCategory;
      return category;
    });
    setCategories(nextCategoryList);
    console.log(nextCategoryList)
  }


    return(
        <CategoryContext.Provider
        value={{
            categories,
            searchCategory,
            deleteCategory,
            getCategoryById,
            addCategory,
            updateCategory
        }}
        >
            {children}
        </CategoryContext.Provider>
    )
}