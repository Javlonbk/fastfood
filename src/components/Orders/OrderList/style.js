// <--------OrderList-------->

import styled from "styled-components";

export const OrderListC = styled.div`
   width: 100%;
   height: calc(100vh - 150px);
   padding: 30px 35px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: ${(props) => props.direction ? 'row' : 'comumn'};
   justify-content: ${(props) => !props.direction ? 'space-between' : null};
`
