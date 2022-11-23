// <------OrderItem------>

import styled from "styled-components";

export const OrderItemC = styled.div`
   width: 100%;
   height: 130px;
   margin: 12px 0px;
   background-color: #fff;
   box-sizing: border-box;
   box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
   border-radius: 6px;
   padding: 0px 20px;
   display: flex;
`
OrderItemC.Column = styled.div`
  border-right: 1px solid #EDEFF3;
  width: 25%;
  height: 100%;
  padding: 15px 0px;
  :nth-child(4){
   border: none;
  }
`