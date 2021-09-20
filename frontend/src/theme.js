import {colors, createTheme, responsiveFontSizes} from '@mui/material';

export const wowItemColors = {
  common: '#666666',
  uncommon: '#1eff00',
  rare: '#0070ff',
  epic: '#a335ee',
  legendary: '#ff8000',
  astounding: '#e268a8',
  artifact: '#e5cc80',
};

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.yellow[500],
    },
    wowItemColors,
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
