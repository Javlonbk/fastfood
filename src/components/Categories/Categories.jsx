import React from "react";
import { CategoriesC } from "./style";
import { Container } from "../Conatainer";
import { SearchComponent } from "../../Form/SearchInput";
import AddCanvas from "../../offcanvas/AddCanvas";
import CategoryList from "./CategoryList/CategoryList";
import { useCategory } from "../../context/CategoryContext";
import AddNewCategory from "../../Form/AddNewCategory";

const Categories = () => {
  const menu = ["Kategoriya(UZ)", "kategoriya(ru)", "bosh kategoriya", "action"];
  const {searchCategory} = useCategory();
  return (
    <Container>
      <CategoriesC>
        <Container.Header>
        <Container.Add>
            <AddCanvas
              component={<AddNewCategory componentTitle={"Yangi Kategoriya qo`shish "} />}
              componentTitle={"Yangi kategoriya qo`shish"}
            />
            <p>Yangi kategoriya qo’shish</p>
          </Container.Add>
          <SearchComponent>
            <SearchComponent.SearchInput
              placeholder="Qidirish" onChange={(e) => searchCategory(e.target.value)}
            />
            <SearchComponent.SearchIcon />
          </SearchComponent>
        </Container.Header>
        <Container.Menu>
          {menu.map((item) => {
            return <p key={item}>{item.toUpperCase()}</p>;
          })}
        </Container.Menu>
        <CategoryList/>
      </CategoriesC>
    </Container>
  );
};

export default Categories;
