import React from "react";
import { OrderItemC } from "./style";

const OrderItem = ({deleteOrder,id, time, customerName, customerPhone, cost, deliveryCost, operator, branch}) => {
 
   

  return (
    <OrderItemC>
      <OrderItemC.Column>
        <div>
          <span className="id">{id}</span>
          <OrderItemC.BookmarkIconDiv>
            <OrderItemC.BookmarkIcon />
          </OrderItemC.BookmarkIconDiv>
        </div>
        <p className="time">
          <OrderItemC.ClockIcon /> {time}
        </p>
      </OrderItemC.Column>
      <OrderItemC.Column>
        <div>
          <OrderItemC.UserIcon />
          <p className="customer">{customerName}</p>
        </div>
        <div className="phone">
          <OrderItemC.PathIcon /> {customerPhone}
        </div>
      </OrderItemC.Column>
      <OrderItemC.Column>
        <div className="price">
          <OrderItemC.ClipboardIcon /><span>{cost}</span>

        </div>
        <div className="price">
          <OrderItemC.TruckIcon /><span>{deliveryCost}</span>
        </div>
        <p className="allPrice">
          <span>Umumiy summa</span>
          40,400 UZS
        </p>
      </OrderItemC.Column>
      <OrderItemC.Column>
        <p className="operator">
          <span>Operator:</span>{operator}
        </p>
        <p className="operator">
          <span>Filial:</span>{branch}
        </p>
      </OrderItemC.Column>

      <OrderItemC.Action deleter onClick={deleteOrder}>
        < OrderItemC.DeleteOrderIcon/>
      </OrderItemC.Action>
    
      <OrderItemC.Action saver>
        <OrderItemC.SaveOrderIcon/>
      </OrderItemC.Action>
    </OrderItemC>
  );
};

export default OrderItem;
