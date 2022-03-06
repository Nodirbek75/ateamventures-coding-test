import React from "react";
import styled from "styled-components";

// components
import { Navbar } from "..";
import { MainPage } from "../MainPage";

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainPage />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
