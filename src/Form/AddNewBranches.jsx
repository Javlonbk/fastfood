import React, { useState } from "react";
import { useBranches } from "../context/BranchesContext";
import { AddNew } from "./style";

const AddNewBranches = ({ id = undefined }) => {
  const { getBranchesById, addBranches, updateBranches } = useBranches();
  const [newBranches, setNewBranches] = useState(getBranchesById(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) addBranches(newBranches);
    else updateBranches({ id, ...newBranches });
  };
  const getNewBranches = (e) => {
    const { name, value } = e.target;
    setNewBranches((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <AddNew>
      <label htmlFor="nameUz">Filial UZ</label>
      <input
        value={newBranches.nameUz}
        name="nameUz"
        id="nameUz"
        placeholder="Filial nomi uz"
        onChange={getNewBranches}
        type="text"
      />
      <button onClick={handleSubmit}>Saqlash</button>
    </AddNew>
  );
};

export default AddNewBranches;
