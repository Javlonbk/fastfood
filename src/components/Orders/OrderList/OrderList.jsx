import React from 'react'
import { useOrder } from '../../../context/OrderContext'
import OrderItem from '../OrderItem/OrderItem'
import { OrderListC } from './style'


const OrderList = () => {
  const {orders, deleteOrder} = useOrder();
  return (
       <OrderListC>
        {
          orders.map((order, index) => {
            return <OrderItem key={index} {...order} deleteOrder={() => deleteOrder(index)} />
          })
        }
         
       </OrderListC>
  )
}

export default OrderList