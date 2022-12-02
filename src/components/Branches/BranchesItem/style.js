// <------------BranchesItemC------->
import styled from "styled-components";

export const BranchesItemC = styled.div`
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
BranchesItemC.Name = styled.p`
  margin-left: 25px;
`
BranchesItemC.Branches = styled.p``
BranchesItemC.Target = styled.p``
BranchesItemC.Time = styled.p``
BranchesItemC.Action = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   :hover{
    cursor: pointer;
   }

`