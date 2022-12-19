import React, { useContext, useState } from 'react'
import { OrdersData } from '../datas/OrdersData';


const OrderContext = React.createContext();
export function useOrder() {
    return useContext(OrderContext)
}
const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState(OrdersData);

    // <-----delete the orders function----->
    function deleteOrder(id){
        const nextOrderList = orders.filter((order,index) => index !== id);
        setOrders(nextOrderList);
        console.log(nextOrderList)
    }
    // // <-----change to vertical orders-items function----->
    // function handleChangeToVertical() {
        
    // }

    return(
        <OrderContext.Provider value={{orders, deleteOrder}}>
            {children}
        </OrderContext.Provider>
    )


}
export default OrderProvider