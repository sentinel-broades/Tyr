import { ThemeProvider } from 'styled-components';
import React from 'react';
import './App.css';
import { GlobalStyle, StandardTheme } from './themes';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './library';

function App() {
  return (
    <ThemeProvider theme={StandardTheme}>
      <ToastContainer />
      <GlobalStyle theme={StandardTheme} />
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
