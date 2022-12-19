import React from "react";
import { OrderItemC } from "./style";

const OrderItem = ({changeTabValue ,deleteOrder,id, time, customerName, customerPhone, cost, deliveryCost, operator, branch}) => {
  return (
    <OrderItemC direction={changeTabValue}>
      <OrderItemC.Column direction={changeTabValue}>
        <div  className="container">
          <span className="id">{id}</span>
          <OrderItemC.BookmarkIconDiv direction={changeTabValue}>
            <OrderItemC.BookmarkIcon direction={changeTabValue} />
          </OrderItemC.BookmarkIconDiv>
        </div>
        <p className="time">
          <OrderItemC.ClockIcon direction={changeTabValue}  /> {time}
        </p>
      </OrderItemC.Column>
      <OrderItemC.Column direction={changeTabValue}>
        <div className="customer">
          <OrderItemC.UserIcon />
          <p >{customerName}</p>
        </div>
        <div className="phone">
          <OrderItemC.PathIcon direction={changeTabValue} /> {customerPhone}
        </div>
      </OrderItemC.Column>
      <OrderItemC.Column direction={changeTabValue}>
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
      <OrderItemC.Column direction={changeTabValue}>
        <p className="operator">
          <span>Operator:</span>{operator}
        </p>
        <p className="operator">
          <span>Filial:</span>{branch}
        </p>
      </OrderItemC.Column>

      <OrderItemC.Action direction={changeTabValue} deleter onClick={deleteOrder}>
        < OrderItemC.DeleteOrderIcon/>
      </OrderItemC.Action>
    
      <OrderItemC.Action saver>
        <OrderItemC.SaveOrderIcon/>
      </OrderItemC.Action>
    </OrderItemC>
  );
};

export default OrderItem;
