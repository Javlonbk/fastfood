// <------Add new------>
import styled from "styled-components";
import {ReactComponent as plus} from '../assets/icon/plus.svg'

export const AddBtn = styled.div`
  width: 36px;
  height: 36px;
  left: 338px;
  top: 22px;
  background: #20D472;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
  }
  `
AddBtn.Plus = styled(plus)``