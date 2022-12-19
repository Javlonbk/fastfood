// <------OrderItem------>

import styled from "styled-components";
import {ReactComponent as bookmark} from '../../../assets/icon/bookmark.svg'
import {ReactComponent as clock} from '../../../assets/icon/clock.svg'
import {ReactComponent as user} from '../../../assets/icon/user.svg'
import {ReactComponent as Path} from '../../../assets/icon/Path.svg'
import {ReactComponent as truck} from '../../../assets/icon/truck.svg'
import {ReactComponent as clipboard} from '../../../assets/icon/clipboard.svg'
import {ReactComponent as deleteOrder} from '../../../assets/icon/x.svg'
import {ReactComponent as saveOrder} from '../../../assets/icon/tick.svg'

export const OrderItemC = styled.div`
   width: ${(props) => props.direction ? '230px' : '100%'};
   height: ${(props) => props.direction ? 'auto' : '150px'};
   margin: 12px 0px;
   background-color: #fff;
   box-sizing: border-box;
   box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
   border-radius: 6px;
   display: flex;
   flex-direction: ${(props) => props.direction ? 'column' : null};
   position: relative;
`
OrderItemC.Column = styled.div`
  border-right: ${(props) => !props.direction ? '1px solid #EDEFF3' : null};
  border-top: ${(props) => props.direction ? '1px solid #EDEFF3' : null};
  height: ${(props) => props.direction ? '100%' : 'auto'};
  padding: 15px 0px;
  color: #2D3A45;
  padding-left: ${(props) => props.direction ? '0px' : '35px'};
  display: ${(props) => props.direction ? 'flex' : null};
  border: 1px solid red;
  
  
  :nth-child(1){
    width: ${(props) => props.direction ? '100px' : '22%'};
  }
  :nth-child(2){
    width: ${(props) => props.direction ? '100%' : '27%'};
  }
  :nth-child(3){
    width: ${(props) => props.direction ? '100%' : '27%'};
  }
  :nth-child(4){
    width: ${(props) => props.direction ? '100%' : '27%'};
   border: none;
  }
  .id{
    padding: ${(props) => props.direction ? '0px' : '5px 12px'};
    background: #20D472;
    border-radius: 18px;
    letter-spacing: 0.6px;
    color: #FFFFFF;
    font-size: 16px;
  }
  div{
    display: flex;
    /* align-items: center;  */
  }
  p{
    font-size: 16px;
    color: #2D3A45;
    display: flex;
    align-items: center;
  }
  .time{
    margin-top: 30px; 
  }
  .customer{
    font-size: 18px;
    font-weight: bold;
    line-height: 19px;
  }
  .phone{
     font-size: 12px;
     letter-spacing: 0.5px;
     margin-top: 10px !important;
  }
  .price span{
    margin-left: 10px;
  }
  .price{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
     font-size: 12px;
     letter-spacing: 0.5px;
  }
  .allPrice{
    margin-top: 15px !important;
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .allPrice span, .operator span{
    letter-spacing: 0.366667px;
    color: #8D9BA8;
    font-size: 11px;
    display: block;
    font-weight: normal;
  }
  .operator{
    display: block;
    font-size: 14px;
    font-weight: bold;
  }
`
OrderItemC.BookmarkIconDiv = styled.div`
    background: #EDEFF3;
    border-radius: 18px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`
OrderItemC.BookmarkIcon = styled(bookmark)``
 OrderItemC.ClockIcon = styled(clock)`
    margin-right: 12px;
 `
 OrderItemC.UserIcon = styled(user)`
     margin-right: 20px;
 `
 OrderItemC.PathIcon = styled(Path)`
     margin-right: 12px;
 `
 OrderItemC.TruckIcon = styled(truck)``
 OrderItemC.ClipboardIcon = styled(clipboard)``

  OrderItemC.Action  = styled.div`
        position: absolute;
        width: 40px;
        height: 40px;
        right: -20px;
        top: ${props => props.deleter ? "25px" : "85px"};;
        background: #FFFFFF;
        box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
        border-radius: 20px;  
        display:flex;
        justify-content:center;
        align-items: center;
        :hover{
          cursor: pointer;
        }
  `
  OrderItemC.DeleteOrderIcon = styled(deleteOrder)``
  OrderItemC.SaveOrderIcon = styled(saveOrder)``