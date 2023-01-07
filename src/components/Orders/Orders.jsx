import React, { useState } from "react";
import AddNewOrder from "../../Form/AddNewOrder";
import AddCanvas from "../../offcanvas/AddCanvas";
import ControlStateTab from "../../tabs/ControlStateTab";
import StatusTab from "../../tabs/StatusTab";
import { Container } from "../Conatainer";
import OrderList from "./OrderList/OrderList";
import {OrderC } from "./style";

const Orders = () => {
  const [changeTab, setChangeTab] = useState(0)

  const handleChangeTab = (data) => {
    setChangeTab(data)
  }
  
  return (
    <Container>
      <OrderC>
        <Container.Header>
          <Container.Add>
            <AddCanvas    component={<AddNewOrder/>} componentTitle={"Yangi buyurtma qo`shish "} />
            <p>Yangi buyurtma qo'shish</p>
          </Container.Add>
          <StatusTab/>
          <ControlStateTab handleChangeTab={handleChangeTab} changeTab={changeTab} />
        </Container.Header>
        <OrderList changeTabValue={changeTab} />
      </OrderC>
    </Container>
  );
};

export default Orders;
