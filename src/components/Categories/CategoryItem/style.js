// <------------CategoryItemC------->
import styled from "styled-components";

export const CategoryItemC = styled.div`
  width:100%;
  height: 60px;
  padding: 10px 20px;
  background-color: #fff;
  margin: 5px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: left; 
  font-size: 13px;
  line-height: 15px;
  color: #2D3A45;  
`
CategoryItemC.Name = styled.p`
  margin-left: 25px;
`
CategoryItemC.Category = styled.p``
CategoryItemC.Action = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   :hover{
    cursor: pointer;
   }

`