import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>들어온 요청</Title>
      <Subtitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</Subtitle>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: 900;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textColor};
`;

const Subtitle = styled.text`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.textColor};
`;
