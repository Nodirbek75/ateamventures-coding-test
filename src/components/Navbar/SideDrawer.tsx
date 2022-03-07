import React from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
}

const SideDrawer: React.FC<Props> = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <LogoWrapper>
        <Logo src="assets/Logo_blue.png" />
      </LogoWrapper>
      <LinksWrapper>
        <LinkWrapper>
          <Link href="/">
            <Icon src="assets/Vector_black.svg" />A 가공 업체
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/">로그아웃</Link>
        </LinkWrapper>
      </LinksWrapper>
    </Wrapper>
  );
};

export default SideDrawer;

const Wrapper = styled.div<{ visible: boolean }>`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 280px;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${(props) =>
    props.visible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-out;
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 44px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.cardBorder};
  padding-left: 20px;
`;

const Logo = styled.img``;

const LinksWrapper = styled.ul`
  list-style: none;
  margin: 36px 32px;
`;

const LinkWrapper = styled.li`
  margin-bottom: 24px;
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
  color: ${(props) => props.theme.colors.textColor};
  text-decoration: none;
`;
