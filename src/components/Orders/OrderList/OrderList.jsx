import React from 'react'
import OrderItem from '../OrderItem/OrderItem'
import { OrderListC } from './style'

const OrderList = () => {
  return (
       <OrderListC>
         <OrderItem/>
         <OrderItem/>
         <OrderItem/>
       </OrderListC>
  )
}

export default OrderList