import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../datas/NavData";
import { SidebarC, NavItems, LogOutIcon } from "./style";

const Sidebar = () => {
  return (
    <SidebarC>
      <SidebarC.Menus>
        <div>
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
            {Navbar.map((item) => {
              return (
                <NavItems key={item.id} to={item.link}>
                  <NavItems.Icon> {<item.icon />}</NavItems.Icon>
                  {item.name}
                </NavItems>
              );
            })}
          </SidebarC.Navbar>
        </div>

        <SidebarC.LogOut>
          <NavItems to={'/'}>
          <NavItems.Icon><LogOutIcon/></NavItems.Icon> Chiqish
          </NavItems>
        </SidebarC.LogOut>
      </SidebarC.Menus>

      <Outlet />
    </SidebarC>
  );
};

export default Sidebar;
