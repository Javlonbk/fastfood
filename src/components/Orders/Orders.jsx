import React from 'react'
import ProductAddCanvas from '../../offcanvas/ProductAddCanvas'
import OrderList from './OrderList/OrderList'
import { OrderC } from './style'

const Orders = () => {
  return (
    <OrderC>
        <OrderC.Header>
         <OrderC.Add>
           <ProductAddCanvas componentTitle={'Yangi buyurtma qo`shish '} />
             <p>Yangi buyurtma qo'shish</p>
         </OrderC.Add>
        </OrderC.Header>
        <OrderList/>
    </OrderC>
  )
}

export default Orders