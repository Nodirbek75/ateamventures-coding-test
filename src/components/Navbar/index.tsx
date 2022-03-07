import React, { useState } from "react";
import styled from "styled-components";

// components
import SideDrawer from "./SideDrawer";
import Toolbar from "./Toolbar";

export const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Nav>
      <Toolbar toggleDrawer={toggleDrawer} />
      <SideDrawer visible={drawerOpen} />
      {drawerOpen && <Backdrop onClick={toggleDrawer} />}
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 40px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  @media (max-width: 425px) {
    height: 44px;
    padding: 0 20px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
