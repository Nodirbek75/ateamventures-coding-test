import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Nav>
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

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  background-color: #1565c0;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
`;

const Logo = styled.img``;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img``;

const Text = styled.text`
  /* font-family: Noto Sans KR Medium; */
  font-size: 14;
  font-weight: 500;
  color: #fff;
  margin-left: 8px;
`;

const Divider = styled.div`
  height: 16px;
  width: 2px;
  background-color: #fff;
  margin-left: 32px;
  margin-right: 32px;
`;
