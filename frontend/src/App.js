import React, {useState} from 'react';
import theme from './theme';
import './App.css';
import Layout from './Layout';
import {ThemeProvider, Typography} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const [themeData, setThemeData] = useState(theme);

  const updateThemePrimaryColor = (color) => {
    setThemeData((prevState) => {
      let newState = {...prevState};
      newState.palette.primary.main = color;
      return newState;
    });
  };

  return (
    <ThemeProvider theme={themeData}>
      <BrowserRouter>
        <Layout setThemeColor={updateThemePrimaryColor}>
          <Typography paragraph>Welcome to After Dark Guild</Typography>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
