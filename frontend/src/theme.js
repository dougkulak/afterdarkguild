import {colors, createTheme, responsiveFontSizes} from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'dark',
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
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: colors.blue[500],
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
