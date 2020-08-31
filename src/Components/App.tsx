import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import HeaderComponent from './Navigation';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
    </ThemeProvider>
  );
};

export default App;
