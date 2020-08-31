import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import HeaderComponent from './Navigation';
import { GlobalStyle } from '../styles/Global.styled';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderComponent />
    </ThemeProvider>
  );
};

export default App;
