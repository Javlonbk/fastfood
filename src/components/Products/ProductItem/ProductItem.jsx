import React from 'react'
import { Action } from '../../../buttons/Action'
import { ProductItemC } from './style'

const ProductItem = ({deleteProduct, product, image, category, price, information}) => {
 
  return (
    <ProductItemC>
      <div style={{'display':'flex', 'alignItems':'baseline'}}>
        <ProductItemC.Image>{image}</ProductItemC.Image>
        <ProductItemC.Name>{product}</ProductItemC.Name>
      </div>
      <ProductItemC.Category>{category}</ProductItemC.Category>
      <ProductItemC.Price>{price}</ProductItemC.Price>
      <ProductItemC.Info>{information}</ProductItemC.Info>
      <ProductItemC.Action>
        <Action>
          <Action.Edit/>
        </Action>
        <Action>
          <Action.Trash onClick={deleteProduct} />
        </Action>
      </ProductItemC.Action>
    </ProductItemC>

  )
}

export default ProductItem