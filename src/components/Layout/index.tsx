import React from "react";
import styled from "styled-components";

// components
import { Navbar } from "..";

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
