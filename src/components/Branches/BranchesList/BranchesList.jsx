import React from 'react'
import { useBranches } from '../../../context/BranchesContext'
import BranchesItem from '../BranchesItem/BranchesItem'
import { BranchesListC } from './style'

const BranchesList = () => {
  const {branches} = useBranches()
  return (
    <BranchesListC>
      {
        branches.map((item) => {
          return <BranchesItem key={item.id} {...item} />
        })
      }
        
    </BranchesListC>
  )
}

export default BranchesList