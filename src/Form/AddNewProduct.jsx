import React, { useState } from 'react'

const AddNewProduct = ({sendNewProduct}) => {
    const [newProduct, setNewProduct] = useState({
        product: '',
        category: 'lavash',
        price: '',
        information: ''
    })
    
    const getNewProduct = (e) => {
    const {name, value} = e.target;
    setNewProduct(prevState => ({
        ...prevState,
        [name]: value
    }))
    }
  return (
         <div>
        <label htmlFor="">Maxsulot nomi</label>
            <input name='product' onChange={getNewProduct} type="text" />
            <label  htmlFor="">Kategoriya</label>
            <select name="category" onChange={getNewProduct} id="">
                   <option value="lavash">Lavash</option>
                   <option value="burger">Burger</option>
                   <option value="ichimlik">Ichimlik</option>
            </select>       
            <label htmlFor="">Narxi</label>
            <input name='price' onChange={getNewProduct} type="text" />
            <label htmlFor="">Qo’shimcha ma’lumot</label>
            <input name='information' onChange={getNewProduct} type="text" />
            <button onClick={() => sendNewProduct(newProduct)}>Saqlash</button>
          </div>
  )
}

export default AddNewProduct