import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {blue, grey, yellow} from '@material-ui/core/colors';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[500],
    },
    background: {},
    raidToolbarBg: grey[800],
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
