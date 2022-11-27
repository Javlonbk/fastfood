import React, { useContext, useState } from 'react'
import { OrdersData } from '../datas/OrdersData';


const OrderContext = React.createContext();
export function useOrder() {
    return useContext(OrderContext)
}
const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState(OrdersData);

    function deleteOrder(id){
        const nextOrderList = orders.filter((order,index) => index !== id);
        setOrders(nextOrderList);
        console.log(nextOrderList)
    }

    return(
        <OrderContext.Provider value={{orders, deleteOrder}}>
            {children}
        </OrderContext.Provider>
    )

}
export default OrderProvider