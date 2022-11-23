import React from 'react'
import { Action } from '../../../buttons/Action'
import AddNewProduct from '../../../Form/AddNewProduct'
import ProductEditCanvas from '../../../offcanvas/ProductEditCanvas'
import { ProductItemC } from './style'

const ProductItem = ({deleteProduct, editProduct,  editIndex, product, image, category, price, information}) => {
 
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
        {/* <Action onClick={editProduct}>
             <Action.Edit/>
        </Action> */}
        <ProductEditCanvas editProduct={editProduct} component={<AddNewProduct editIndex={editIndex} />} componentTitle={'Mahsulotni tahrirlash'} />
        <Action onClick={deleteProduct}>
          <Action.Trash />
        </Action>
      </ProductItemC.Action>
    </ProductItemC>

  )
}

export default ProductItem