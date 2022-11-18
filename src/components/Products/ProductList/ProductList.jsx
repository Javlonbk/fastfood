import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { ProductListC } from './style'

const ProductList = ({products, deleteProduct}) => {
  return (
    <ProductListC>
      {
        products.map(item => {
          return(
            <ProductItem deleteProduct={() => deleteProduct(item.id)}  key={item.id} image={<item.image/>} product={item.product} category={item.category} price={item.price} information={item.information} />
            )
          })
        }
    </ProductListC>
  )
}

export default ProductList