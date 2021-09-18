import {colors, createTheme, responsiveFontSizes} from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.yellow[500],
    },
    background: {},
    raidToolbarBg: colors.grey[300],
    raidColors: {
      blue: '#0000ff',
      ruby: '#ff0000',
      emerald: '#00ff00',
      rainbow: 'white',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Helvetica, Arial, san-serif',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
