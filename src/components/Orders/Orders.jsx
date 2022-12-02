import React from 'react'
import AddCanvas from '../../offcanvas/AddCanvas'
import { Container } from '../Conatainer'
import OrderList from './OrderList/OrderList'
import { OrderC } from './style'

const Orders = () => {
  return (
    <Container>
      <OrderC>
        <Container.Header>
         <Container.Add>
           <AddCanvas componentTitle={'Yangi buyurtma qo`shish '} />
             <p>Yangi buyurtma qo'shish</p>
         </Container.Add>
        </Container.Header>
        <OrderList/>
      </OrderC>
    </Container>
  )
}

export default Orders