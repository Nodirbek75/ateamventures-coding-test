import React from "react";
import styled from "styled-components";

// types
import { ProjectRequst } from "types";

const Card: React.FC<ProjectRequst> = ({
  id,
  title,
  client,
  due,
  count,
  amount,
  method,
  material,
  status,
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        {status === "상담중" && <Status>{status}</Status>}
      </TitleWrapper>
      <Customer>{client}</Customer>
      <Deadline>{due}</Deadline>
      <Seperator />
      <RowWrapper>
        <Key>도면개수</Key>
        <Value>{count}게</Value>
      </RowWrapper>
      <RowWrapper>
        <Key>총 수량</Key>
        <Value>{amount}게</Value>
      </RowWrapper>
      <RowWrapper>
        <Key>가공방식</Key>
        <Value>{method.join(", ")}</Value>
      </RowWrapper>
      <RowWrapper>
        <Key>재료</Key>
        <Value>{material.join(", ")}</Value>
      </RowWrapper>
      <ButtonsWrapper>
        <Button active={true}>요청 내역 보기</Button>
        <Button>채팅하기</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: calc(100% / 3 - 16px);
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 4px;
  margin: 0 8px 16px 8px;
  padding: 24px 16px;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.secondaryColor};
  }
  @media (max-width: 768px) {
    width: calc(100% / 2 - 16px);
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
`;

const Status = styled.div`
  border: 1px solid ${(props) => props.theme.colors.orange};
  border-radius: 12px;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors.orange};
  font-size: 12px;
  font-weight: 500;
`;

const Customer = styled.text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

const Deadline = styled.text`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.gray};
`;

const Seperator = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.cardBorder};
  margin-top: 16px;
  margin-bottom: 32px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 0;
`;

const Key = styled.text`
  display: flex;
  flex: 1;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

const Value = styled.text`
  display: flex;
  flex: 2;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 28px;
`;

const Button = styled.button<{ active?: boolean }>`
  font-size: 14;
  font-weight: 500;
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      props.active ? "transparent" : props.theme.colors.secondaryColor};
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondaryColor : "transparent"};
  color: ${(props) =>
    props.active
      ? props.theme.colors.white
      : props.theme.colors.secondaryColor};
`;
