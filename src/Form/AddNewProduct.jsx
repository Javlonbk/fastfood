import React, { useState } from 'react'
import { AddNewProductC } from './style'

const AddNewProduct = ({sendNewProduct, editIndex}) => {
    const [newProduct, setNewProduct] = useState({
        product: '',
        category: 'lavash',
        price: '',
        information: ''
    });
    
    const getNewProduct = (e) => {
    const {name, value} = e.target;
    setNewProduct(prevState => ({
        ...prevState,
        [name]: value
    }))
    }
    console.log(editIndex)
  return (
         <AddNewProductC>
            <label htmlFor="product">Maxsulot nomi</label>
            <input  name='product' id='product' placeholder='Mahsulot nomi' onChange={getNewProduct} type="text" />
            <label  htmlFor="category">Kategoriya</label>
            <select name="category" id='category' onChange={getNewProduct}>
                   <option value="lavash">Lavash</option>
                   <option value="burger">Burger</option>
                   <option value="ichimlik">Ichimlik</option>
            </select>       
            <label htmlFor="price">Narxi</label>
            <input name='price' id='price' placeholder=',UZS' onChange={getNewProduct} type="text" />
            <label htmlFor="information">Qo’shimcha ma’lumot</label>
            <input name='information'id='information' placeholder='Qo`shimcha ma`lumot' onChange={getNewProduct} type="text" />
            <button onClick={() => sendNewProduct(newProduct)}>Saqlash</button>
          </AddNewProductC>
  )
}

export default AddNewProduct