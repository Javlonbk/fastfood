import React from 'react'
import { useCategory } from '../../../context/CategoryContext'
import CategoryItem from '../CategoryItem/CategoryItem'
import { CategoryListC } from './style'

const CategoryList = () => {
  const {categories} = useCategory()
  return (
    <CategoryListC>
      {
        categories.map((item) => {
          return <CategoryItem key={item.id} {...item} />
        })
      }
        
    </CategoryListC>
  )
}

export default CategoryList