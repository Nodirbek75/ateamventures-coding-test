import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// lib
import store from "lib/store";

// components
import { Layout } from "./components";

// styles
import { GlobalStyles, theme } from "./styles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
