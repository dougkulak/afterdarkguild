import React from 'react';
import {Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Typography>Welcome to After Dark Guild</Typography>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
