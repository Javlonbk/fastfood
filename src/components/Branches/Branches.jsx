import React from 'react'
import {Container} from '../Conatainer'
import {BranchesC} from './style'
import { SearchComponent } from '../../Form/SearchInput'
import AddCanvas from "../../offcanvas/AddCanvas";
import BranchesList from "./BranchesList/BranchesList";
import { useBranches } from "../../context/BranchesContext";
import AddNewBranches from "../../Form/AddNewBranches";

const Branches = () => {
  
  const menu = ["Filial nomi (UZ)", "Filial nomi (Ru)", "Mo’ljal",'Ish vaqti', "action"];
  const {searchBranches} = useBranches();
  return (
    <Container>
    <BranchesC>
      <Container.Header>
      <Container.Add>
          <AddCanvas
          component={<AddNewBranches componentTitle={"Yangi Kategoriya qo`shish "} />}
            componentTitle={"Yangi filial qo`shish"}
          />
          <p>Yangi filial qo’shish</p>
        </Container.Add>
        <SearchComponent>
          <SearchComponent.SearchInput
            placeholder="Qidirish" 
            onChange={(e) => searchBranches(e.target.value)}
          />
          <SearchComponent.SearchIcon />
        </SearchComponent>
      </Container.Header>
      <Container.Menu>
        {menu.map((item) => {
          return <p key={item}>{item.toUpperCase()}</p>;
        })}
      </Container.Menu>
      <BranchesList/>
    </BranchesC>
  </Container>
  )
}

export default Branches