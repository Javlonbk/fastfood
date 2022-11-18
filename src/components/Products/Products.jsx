import React, { useState } from 'react'
import { ProductsData } from '../../datas/ProductsData'
import ProductAddCanvas from '../../offcanvas/ProductAddCanvas'
import ProductList from './ProductList/ProductList'
import { ProductsC } from './style'

const Products = () => {

  const [products, setProducts] = useState(ProductsData)
  const menu = ['Mahsulot','kategoriya', 'narxi', 'qo`shimcha', 'action']

  const deleteProduct = (index) => {
    let restProducts = products.filter(item => {
      return item.id !== index
    })
    setProducts(restProducts)
  }

  const sendNewProduct = (newProduct) => {
    let newProductList = {id:products.length+1, image:products[0].image, ...newProduct}
    setProducts([...products, newProductList])
  }

  return (
    <ProductsC>
      <ProductsC.Header>
        <ProductsC.Add>
          <ProductAddCanvas sendNewProduct={sendNewProduct} />
             <p>Yangi maxsulot qo’shish</p>
        </ProductsC.Add>
      </ProductsC.Header>
      <ProductsC.Menu>
        {
          menu.map(item => {
            return(
              <p key={item}>{item.toUpperCase()}</p>
            )
          })
        }
      </ProductsC.Menu>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </ProductsC>

  )
}

export default Products