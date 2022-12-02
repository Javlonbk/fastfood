import React from 'react'
import { CategoryItemC } from './style'
import { Action } from '../../../buttons/Action'
import EditCanvas from '../../../offcanvas/EditCanvas'
import { useCategory } from '../../../context/CategoryContext'
import AddNewCategory from '../../../Form/AddNewCategory'

const CategoryItem = ({id,nameUz, nameRu, main}) => {
  
  const {deleteCategory} = useCategory()

  return (
    <CategoryItemC>
        <CategoryItemC.Name>{nameUz}</CategoryItemC.Name>
        <CategoryItemC.Name>{nameRu}</CategoryItemC.Name>
      <CategoryItemC.Category>{main}</CategoryItemC.Category>
      <CategoryItemC.Action>
        <EditCanvas
        component={<AddNewCategory id={id} />}
          componentTitle={"Kategoriyani tahrirlash"}
        />
        <Action>
          <Action.Trash onClick={() => deleteCategory(id)} />
        </Action>
      </CategoryItemC.Action>
    </CategoryItemC>
  )
}

export default CategoryItem