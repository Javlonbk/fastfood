// <-------Container------>
import styled from "styled-components"
export const Container = styled.div`
   width: calc(100% - 300px);
   margin: 0px;
   box-sizing: border-box;
`
Container.Header = styled.div`
    width:100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    `
Container.Add = styled.div`
   width: 200px;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left:30px;
    box-sizing: border-box;
    border-left: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
    p{
      font-size: 12px;
      line-height: 16px;
      color: #2D3A45;
      margin-left: 12px;
    }

`
Container.Menu = styled.div`
   width: 100%;
   height: 35px;
   margin: 20px 0px;
   background-color: #fff;
   display: flex;
   justify-content: space-around;
   align-items: baseline; 
   font-size: 11px;
   padding: 7px 10px;
   box-sizing: border-box;   
   box-shadow: 0px  3px 6px rgba(141, 155, 168, 0.35895);
   p{
      color: #2D3A45;
      border-left: 1px solid #8D9BA8;
      padding-left: 10px;
      box-sizing: border-box;
      font-weight: bold;
      :nth-child(1){
        border: none;
      }
   }
   `