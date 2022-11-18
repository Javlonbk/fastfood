// <-----Sidebar---->

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    ReactComponent as Logo
} from '../../assets/icon/logo.svg'
import {ReactComponent as LogOut} from '../../assets/icon/log-out.svg'

export const SidebarC = styled.div `
  display: flex;
`
SidebarC.Menus = styled.div`
  width:300px;
  height:100vh;
  box-sizing:border-box;
  background-color:#fff;
  padding:28px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .active{
      cursor: pointer;
     background: #FCB600;
     border-radius: 0px 6px 6px 0px;
     color: #fff;
   }
`
SidebarC.LogoName = styled.div `
 display: flex;
 align-items: center;
 margin: 0px 24px;
`
SidebarC.LogoName.Logo = styled(Logo)
`
   width: 70px;
   height: 70px;
   border-radius: 50%;
`
SidebarC.LogoName.Name = styled.h3 `
   font-family: 'SFProDisplay';
   font-size: 16px;   
   line-height: 19px;
   color: #2D3A45;
   margin-left: 20px;
`
SidebarC.LogoName.Name.NameDef = styled.span `
   font-family: 'SFProDisplay';
   font-size: 12px;
   line-height: 14px;
   text-align: center;
   color: #2D3A45;
   mix-blend-mode: normal;
   opacity: 0.5;
   display: block;
   margin-top: 5px;
`
SidebarC.Navbar = styled.div `
   margin-right: 24px;
   margin-top: 38px;
   display: flex;
   flex-direction: column;
   border-left:2px solid #FCB600;;
`
export const NavItems = styled(NavLink)`
   font-family: 'SFProDisplay';
   height: 50px;
   font-size: 15px;
   line-height: 18px;
   color: #2D3A45;
   padding: 10px 40px;
   display: flex;
   align-items: center;
   box-sizing: border-box;
   
   :hover{
     cursor: pointer;
     background: #FCB600;
     border-radius: 0px 6px 6px 0px;
     color: #fff;
   }
`

NavItems.Icon = styled.div`
  color: black;
  padding: 8px;
  box-sizing: border-box;
  background: #F6F6F6;
  border-radius: 6px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
SidebarC.LogOut = styled.div`
  margin-right: 24px;
`
export const LogOutIcon = styled(LogOut)``
