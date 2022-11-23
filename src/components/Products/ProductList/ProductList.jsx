import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { ProductListC } from './style'

const ProductList = ({products, deleteProduct, editProduct, editIndex}) => {
  return (
    <ProductListC>
      {
        products.map(item => {
          return(
            <ProductItem editProduct={() => editProduct(item.id)} editIndex={editIndex}  deleteProduct={() => deleteProduct(item.id)}  key={item.id} image={<item.image/>} product={item.product} category={item.category} price={item.price} information={item.information} />
            )
          })
        }
    </ProductListC>
  )
}

export default ProductList