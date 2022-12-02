// <------AddNewProduct------>

import styled from "styled-components";

export const AddNew = styled.div`
   width: 100%;
   height: 100%;
   padding: 10px;
   overflow-y: hidden;
   padding-top: 0px;
   box-sizing: border-box;
   position: relative;
   label{
    display: block;
    margin-bottom: 5px; 
    margin-top: 15px;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: #2D3A45;
    opacity: 0.6;     
   }
   input, select{
    width: 100%;
    border: 1px solid #EDEFF3;
    border-radius: 6px;
    padding: 10px 14px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: #2D3A45;
    ::placeholder{
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.4px;
        opacity: 0.6;
        color: #2D3A45;
    }
   }
   button{
    width: 115px;
    height: 35px;
    background: #20D472;
    border-radius: 4px;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    letter-spacing: 0.5px;
    border: none;
    position: absolute;
    bottom: 10px;
    left: 20px;
   }
   
` 
