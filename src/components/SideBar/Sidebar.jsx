import React from "react";
import {  Outlet } from "react-router-dom";
import { Navbar } from "../../datas/NavData";
import { SidebarC, NavItems } from "./style";

const Sidebar = () => {
  return (
    <SidebarC>
      <SidebarC.LogoName>
        <SidebarC.LogoName.Logo />
        <SidebarC.LogoName.Name>
          Fast Food
          <SidebarC.LogoName.Name.NameDef>
            Online maxsulot sotuvi
          </SidebarC.LogoName.Name.NameDef>
        </SidebarC.LogoName.Name>
      </SidebarC.LogoName>
      <SidebarC.Navbar>
        {
          Navbar.map(item => {
            return(
              <NavItems key={item.id} to={item.link}>
               <NavItems.Icon> {<item.icon/>}</NavItems.Icon>
                 {item.name}
              </NavItems>
            )
          })
        }
       
      </SidebarC.Navbar>
      <Outlet />
    </SidebarC>
  );
};

export default Sidebar;
