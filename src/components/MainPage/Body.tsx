import React from "react";
import styled from "styled-components";

// components
import Card from "./Card";
import NoContent from "./NoContent";

// types
import { ProjectRequst } from "types";

interface Props {
  data: Array<ProjectRequst>;
}

const Body: React.FC<Props> = ({ data }) => {
  if (data.length > 0) {
    return (
      <Wrapper>
        {data.map((item: any) => (
          <Card key={item.id} {...item} />
        ))}
      </Wrapper>
    );
  } else {
    return <NoContent />;
  }
};

export default Body;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
