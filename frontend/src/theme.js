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
  },
  typography: {
    fontFamily: 'Montserrat, Helvetica, Arial, san-serif',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
