import React from "react";
import styled from "styled-components";

const NoContent: React.FC = () => {
  return (
    <Wrapper>
      <NoContentText>조건에 맞는 견적 요청이 없습니다.</NoContentText>
    </Wrapper>
  );
};

export default NoContent;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 4;
  padding: 40px 0;
`;

const NoContentText = styled.text`
  font-family: Noto Sans KR Regular;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.gray};
`;
