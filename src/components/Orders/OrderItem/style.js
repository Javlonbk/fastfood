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
   height: ${(props) => props.direction ? '350px' : '150px'};
   margin: 12px 0px;
   background-color: #fff;
   box-sizing: border-box;
   box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
   border-radius: 6px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: ${(props) => props.direction ? 'column' : 'row'};
   position: relative;
   padding: ${(props) => props.direction ? '20px' : null};
`
OrderItemC.Column = styled.div`
  height: ${(props) => props.direction ? 'auto' : '100%'};
  width: ${(props) => props.direction ? '100%' : '25%'};
  padding: 15px 0px;
  padding-top: ${(props) => props.direction ? '15px' : '15px'};
  color: #2D3A45;
  padding-left: ${(props) => props.direction ? '0px' : '35px'};
  display: ${(props) => props.direction ? 'flex' : null};
  flex-wrap: wrap;
  align-items: center;
  border-top: ${(props) => props.direction ? '1px solid #EDEFF3' : null};
  border-right: ${(props) => !props.direction ? '1px solid #EDEFF3' : null};
  :nth-child(4){
    border: none;
    border-top:  ${(props) => props.direction ? '1px solid #EDEFF3' :  null};;
  }
  :nth-child(1){
     width: ${(props) => props.direction ? '100%' : '20%'};
     border-top:  ${(props) => props.direction ? 'none' :  null};
     flex-wrap: nowrap;
     padding-top: ${(props) => props.direction ? '0px' : '15px'};
    }
  .id{
    padding:  5px 12px;
    background: #20D472;
    border-radius: 18px;
    letter-spacing: 0.6px;
    color: #FFFFFF;
    font-size: ${(props) => props.direction ? '12px' : '16px'};
  }
  .container{
    margin-left: 0px;
    display: flex;
    align-items: ${(props) => props.direction ? 'center' : null};
    padding: 0px;
  }
  p{
    font-size: ${(props) => props.direction ? '12px' : '16px'};
    color: #2D3A45;
    display: flex;
    align-items: center;
  }
  .time{
    margin: 0px;
    margin-top: ${(props) => props.direction ? null : '30px'}; 
    align-items: center;
    display: flex;
  }
  .customer{
    width: 100%;
    display: flex;
  }
  .customer p{
    font-size: ${(props) => props.direction ? '14px' : '18px'};
    font-weight: bold;
    line-height: 19px;
  }
  .phone{
    font-size: ${(props) => props.direction ? '10px' : '12px'};
    letter-spacing: 0.5px;
    margin-top: ${(props) => props.direction ? '-10px' : '10px'};
    margin-left: ${(props) => props.direction ? '30px' : '0px'};
    display: flex;
    align-items: center;
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
     display: ${(props) => !props.direction ? 'block' : 'none'};
  }
  .allPrice{
    margin-top: ${(props) => props.direction ? '0px' : '15px'};
    display: block;
    font-size: ${(props) => props.direction ? '14px' : '18px'};
    font-weight: bold;
    margin-bottom: 0px;
  }
  .allPrice span, .operator span{
    letter-spacing: 0.366667px;
    color: #8D9BA8;
    font-size: ${(props) => props.direction ? '10px' : '11px'};
    display: block;
    font-weight: normal;
  }
  .operator{
    display: block;
    font-size: ${(props) => props.direction ? '12px' : '14px'};
    font-weight: bold;
    :nth-child(1){
    margin-bottom: ${(props) => props.direction ? '10px' : '30px'};
    } 
  }
`
OrderItemC.BookmarkIconDiv = styled.div`
    background: #EDEFF3;
    border-radius: 18px;
    width: ${(props) => props.direction ? '30px' : '36px'};
    height: ${(props) => props.direction ? '30px' : '36px'};
    display: flex;
    justify-content: center;
    align-items: center !important;
    margin: ${(props) => props.direction ? '0px 10px' : '0px 0px  0px 20px'};
`
OrderItemC.BookmarkIcon = styled(bookmark)`
    width: ${(props) => props.direction ? '12px' : '15px'};
    height: ${(props) => props.direction ? '14px' : ' 18px'};
`
 OrderItemC.ClockIcon = styled(clock)`
    margin-right: ${(props) => props.direction ? '5px' : '12px'};
    width: ${(props) => props.direction ? '14px' : '18px'};
    height: ${(props) => props.direction ? '14px' : '18px'};
 `
 OrderItemC.UserIcon = styled(user)`
     margin-right: 20px;
 `
 OrderItemC.PathIcon = styled(Path)`
     margin-right: 12px;
     display: ${(props) => props.direction ? 'none' : 'block'};
 `
 OrderItemC.TruckIcon = styled(truck)``
 OrderItemC.ClipboardIcon = styled(clipboard)``

  OrderItemC.Action  = styled.div`
        position: absolute;
        width: 40px;
        height: 40px;
        right: -20px;
        top: ${props => props.deleter ? "25px" : "85px"};
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