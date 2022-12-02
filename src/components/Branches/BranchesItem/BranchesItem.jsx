import React from 'react'
import { BranchesItemC } from './style'
import { Action } from '../../../buttons/Action'
import EditCanvas from '../../../offcanvas/EditCanvas'
import { useBranches } from '../../../context/BranchesContext'
import AddNewBranches from '../../../Form/AddNewBranches'

const BranchesItem = ({id,nameUz, nameRu, target ,workingTime}) => {
  
  const {deleteBranches} = useBranches()

  return (
    <BranchesItemC>
        <BranchesItemC.Name>{nameUz}</BranchesItemC.Name>
        <BranchesItemC.Name>{nameRu}</BranchesItemC.Name>
      <BranchesItemC.Target>{target}</BranchesItemC.Target>
      <BranchesItemC.Time>{workingTime}</BranchesItemC.Time>
      <BranchesItemC.Action>
        <EditCanvas
        component={<AddNewBranches id={id} />}
          componentTitle={"Kategoriyani tahrirlash"}
        />
        <Action>
          <Action.Trash onClick={() => deleteBranches(id)} />
        </Action>
      </BranchesItemC.Action>
    </BranchesItemC>
  )
}

export default BranchesItem