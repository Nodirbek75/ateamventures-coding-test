import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  resize: none;
  outline: 0;  
  font-family: 'Noto Sans KR Medium';
}

html,
body {
  background-color: #fff;
  color: #323D45;
  scroll-behavior: smooth;
}
`;
