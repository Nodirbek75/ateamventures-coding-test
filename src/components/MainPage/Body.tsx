import React from "react";
import styled from "styled-components";
import { ProjectRequst } from "types";
import Card from "./Card";

interface Props {
  data: Array<ProjectRequst>;
}

const Body: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item: any) => (
        <Card {...item} />
      ))}
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
