import React from "react";
import styled from "styled-components";

interface Props {
  toggleDrawer: () => void;
}

const Toolbar: React.FC<Props> = ({ toggleDrawer }) => {
  return (
    <Wrapper>
      <MenuButton onClick={toggleDrawer}>
        <MenuIcon src="assets/menu.svg" />
      </MenuButton>
      <Logo src="assets/Logo.png" style={{ objectFit: "contain" }} />
      <RightContainer>
        <LinkWrapper>
          <Link href="/">
            <Icon src="assets/Vector.svg" />A 가공 업체
          </Link>
        </LinkWrapper>
        <Divider />
        <LinkWrapper>
          <Link href="/">로그아웃</Link>
        </LinkWrapper>
      </RightContainer>
    </Wrapper>
  );
};

export default Toolbar;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 425px) {
    justify-content: flex-start;
  }
`;

const MenuButton = styled.button`
  display: none;
  height: 100%;
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
  @media (max-width: 425px) {
    display: block;
    margin-right: 20px;
  }
`;

const MenuIcon = styled.img``;

const Logo = styled.img`
  width: 153px;
  height: 20px;
  object-fit: contain;
  @media (max-width: 425px) {
    width: 91.8px;
    height: 12px;
  }
`;

const RightContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 425px) {
    display: none;
  }
`;

const LinkWrapper = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 14;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

const Divider = styled.div`
  height: 16px;
  width: 2px;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 32px;
`;
