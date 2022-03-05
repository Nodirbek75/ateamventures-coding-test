import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { GlobalStyles, theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navbar />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* flex: 1; */
  /* flex-direction: column; */
  /* align-items: center;
  justify-content: center; */
`;

const Text = styled.text`
  font-size: 24;
  color: purple;
`;
