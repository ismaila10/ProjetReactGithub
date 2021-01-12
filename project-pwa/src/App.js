import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './config/theme';
import './App.css';
import Routes from './config/router';

function App() {
  return (
    <ThemeProvider  theme = {theme}>
        <Routes>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
