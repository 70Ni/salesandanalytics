import React from "react";
import { NavContext, SideNav } from "react-sidenav";

function SideNavigation() {
  return (
    <>
      <SideNav
        onSelection={(selected) => {
        }}
      >
        <SideNav.Nav defaultSelected="home">
          {/* <Navite>
            <NavContext>Hello there</NavContext>
          </Navitem> */}
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default SideNavigation;
