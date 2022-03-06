import React from "react";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <Menu src="assets/menu.svg" />
      <Logo src="assets/Logo.svg" />
      <RightContainer>
        <Icon src="assets/Vector.svg" />
        <Text>A 가공 업체</Text>
        <Divider />
        <Text>로그아웃</Text>
      </RightContainer>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 425px) {
    height: 44px;
    padding: 0 20px;
    justify-content: flex-start;
  }
`;

const Menu = styled.img`
  display: none;
  @media (max-width: 425px) {
    display: block;
    margin-right: 20px;
  }
`;

const Logo = styled.img`
  @media (max-width: 425px) {
    width: 91.8px;
    height: 12px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

const Icon = styled.img``;

const Text = styled.text`
  font-size: 14;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin-left: 8px;
`;

const Divider = styled.div`
  height: 16px;
  width: 2px;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: 32px;
  margin-right: 32px;
`;
