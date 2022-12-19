import React, { useContext, useState } from "react";
import { branchesData as BranchesExampleData } from "../datas/BranchesData";

const BranchesContext = React.createContext();
export function useBranches(){
    return useContext(BranchesContext);
}

const DEFAUL_Branches = {
    nameUz:'',
    nameRu:'', 
    target:'',
    workingTime:''
};

export const BranchesProvider = ({children}) => {
    
    const[branches, setBranches] = useState(BranchesExampleData)
   
    // <-----get the Branches's id function----->
  function getBranchesById(id) {
    const findedBranches = branches.find((Branches) => Branches.id === id);
    if (!findedBranches) return DEFAUL_Branches;
    return findedBranches;
  }
   
  // <-----add new Branches function----->
  function addBranches(newBranches) {
    // newProduct:{nameUZ,nameRU,target, workingTime}
    let newBranchesList = {
      id: branches.length + 1,
      ...newBranches,
    };
    setBranches([...branches, newBranchesList]);
  }
    // <-----search the Branches by name----->
    function searchBranches(value){
        let findedBranches = BranchesExampleData.filter((Branches) => {
            return Branches.nameUz.toLowerCase().includes(value.toLowerCase())
        })
          setBranches(findedBranches)
    }
    // <-----delete the branches function----->
    function deleteBranches(id) {
        const nextBranchesList = branches.filter((Branches) => Branches.id !== id);
        setBranches(nextBranchesList);
    }
     // <-----update the branches function----->
  function updateBranches({ id, nameUz, nameRu, target, workingTime}) {
    const currentBranches = branches.find((Branches) => Branches.id === id);
    currentBranches.nameUz = nameUz;
    currentBranches.nameRu = nameRu;
    currentBranches.target = target;
    currentBranches.workingTime = workingTime;
    const nextBranchesList = branches.map((Branches) => {
      if (Branches.id === id) return currentBranches;
      return Branches;
    });
    setBranches(nextBranchesList);
  }


    return(
        <BranchesContext.Provider
        value={{
            branches,
            searchBranches,
            deleteBranches,
            getBranchesById,
            addBranches,
            updateBranches
        }}
        >
            {children}
        </BranchesContext.Provider>
    )
}