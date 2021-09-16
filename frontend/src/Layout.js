import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './afterdarkguild-logo-white.svg';
import {raidTeams} from './config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 35,
  },
  raidTeamBar: {
    backgroundColor: theme.palette.raidToolbarBg,
  },
  raidTeamToolbar: {
    justifyContent: 'center',
  },
}));

export default function Layout({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} className={classes.logo} alt="After Dark Guild" />
            </Typography>
            <Button color="inherit">Apply</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        className={classes.raidTeamBar}>
        <Container>
          <Toolbar className={classes.raidTeamToolbar}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group">
              {raidTeams.map((x) => (
                <Button>{x.name}</Button>
              ))}
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Box p={3}>{children}</Box>
      </Container>
    </div>
  );
}
