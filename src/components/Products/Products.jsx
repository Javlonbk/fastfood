import React, { useState } from 'react'
import { ProductsData } from '../../datas/ProductsData'
import ProductAddCanvas from '../../offcanvas/ProductAddCanvas'
import ProductList from './ProductList/ProductList'
import { ProductsC } from './style'
import AddNewProduct from '../../Form/AddNewProduct.jsx'

const Products = () => {

  const [products, setProducts] = useState(ProductsData)
  const menu = ['Mahsulot','kategoriya', 'narxi', 'qo`shimcha', 'action']
  const [editIndex, setEditIndex] = useState(0)

  // <-----delete products----->
  const deleteProduct = (index) => {
    let restProducts = products.filter(item => {
      return item.id !== index
    })
    setProducts(restProducts)
  }
  
  // <------add products------->
  const sendNewProduct = (newProduct) => {
    let newProductList = {id:products.length+1, image:products[0].image, ...newProduct}
    setProducts([...products, newProductList])
  }
  
  // <------edit products------->
  const editProduct = (index) => {
    
    setEditIndex(prevState => (
      prevState, index
    ))
  }
  
  return (
    <ProductsC>
      <ProductsC.Header>
        <ProductsC.Add>
          <ProductAddCanvas componentTitle={'Yangi mahsulot qo`shish'} component={<AddNewProduct sendNewProduct={sendNewProduct} componentTitle={'Yangi mahsulot qo`shish '} />} />
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
      <ProductList products={products} editProduct={editProduct} editIndex={editIndex}  deleteProduct={deleteProduct} />
    </ProductsC>

  )
}

export default Products