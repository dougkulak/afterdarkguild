import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {raidTeamPages, raidTeams} from './config';
import {makeStyles} from '@mui/styles';
import {useHistory} from 'react-router-dom';
import {getPositionOfOccurrence, slugify, useWidth} from './util';
import {Button, Divider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import logo from './afterdarkguild-logo.svg';
import logoWhite from './afterdarkguild-logo-white.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 35,
  },
  raidTeamBar: {
    backgroundColor: `${theme.palette.raidToolbarBg} !important`,
  },
  raidTeamToolbar: {
    justifyContent: 'center',
    '& .MuiToggleButton-root': {
      color: 'white',
    },
  },
}));

const defaultRaidTeamData = raidTeams[0];
const defaultPageData = raidTeamPages[0];

const getRaidTeamDataByName = (name) => {
  return (
    raidTeams.find((x) => slugify(x.name) === slugify(name)) ??
    defaultRaidTeamData
  );
};

const getPageDataByName = (name) => {
  return (
    raidTeamPages.find((x) => slugify(x.name) === slugify(name)) ??
    defaultPageData
  );
};

const getDefaultRaidTeamData = () => {
  return getRaidTeamDataByName(getRaidTeamNameFromPath());
};

const getDefaultPageData = () => {
  return getPageDataByName(getPageNameFromPath());
};

const getRaidTeamNameFromPath = () => {
  const pos = getPositionOfOccurrence(window.location.pathname, '/', 1);
  const pos2 = getPositionOfOccurrence(window.location.pathname, '/', 2);
  if (window.location.pathname === '/') return defaultRaidTeamData.name;
  if (pos === -1) return defaultRaidTeamData.name;
  if (pos2 === -1) return window.location.pathname.substring(pos);
  return window.location.pathname.substring(pos, pos2);
};

const getPageNameFromPath = () => {
  const pos = getPositionOfOccurrence(window.location.pathname, '/', 2);
  if (pos === -1) return defaultPageData.name;
  return window.location.pathname.substring(pos);
};

function Layout({setThemeColor, children}) {
  const classes = useStyles();
  const history = useHistory();
  const width = useWidth();

  const [currentPageData, setCurrentPageData] = useState(defaultPageData);
  const [currentRaidTeamData, setCurrentRaidTeamData] =
    useState(defaultRaidTeamData);
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchToRaidTeam = (team) => {
    setThemeColor(team.color);
    history.push(`/${slugify(team.name)}/${slugify(currentPageData.name)}`);
    setCurrentRaidTeamData(team);
  };

  // const switchToPage = (page) => {
  //   history.push(`/${slugify(currentRaidTeamData.name)}/${slugify(page.name)}`);
  //   setCurrentPageData(page);
  // };

  const handleRaidTeamButtonClick = (e) => {
    const raidTeamName = e.currentTarget.value;
    switchToRaidTeam(getRaidTeamDataByName(raidTeamName));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <AppBar
        elevation={0}
        position="relative"
        sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
        }}>
        <Toolbar>
          <img
            src={isWidthDown('sm', width) ? logoWhite : logo}
            className={classes.logo}
            alt="After Dark Guild"
          />
        </Toolbar>
      </AppBar>
      <Divider />
      <Box py={3}>
        <Typography
          variant={'h6'}
          align={'center'}
          style={{color: currentRaidTeamData.color}}>
          {currentRaidTeamData.name} Team
        </Typography>
      </Box>
      <Divider />
      <List>
        {raidTeamPages.map((x) => (
          <ListItem button key={x.name}>
            <ListItemIcon>{x.icon}</ListItemIcon>
            <ListItemText primary={x.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  useEffect(() => {
    const team = getDefaultRaidTeamData();
    const page = getDefaultPageData();
    setThemeColor(team.color);
    setCurrentRaidTeamData(team);
    setCurrentPageData(page);

    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
  }, []); //eslint-disable-line

  if (!currentRaidTeamData || !currentPageData) return <React.Fragment />;

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml: {sm: `${drawerWidth}px`},
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.title}>
            {currentPageData.name}
          </Typography>
          <Button color="inherit">Apply</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        <Toolbar className={classes.raidTeamToolbar}>
          <ToggleButtonGroup
            size={'small'}
            orientation={isWidthDown('md', width) ? 'vertical' : 'horizontal'}
            value={currentRaidTeamData.name}
            exclusive
            fullWidth={isWidthDown('md', width)}
            onChange={handleRaidTeamButtonClick}>
            {raidTeams.map((x) => (
              <ToggleButton
                key={x.name}
                value={x.name}
                label={x.name}
                style={{backgroundColor: x.color}}>
                {x.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Toolbar>
        <Box pt={2}>{children}</Box>
      </Box>
    </Box>
  );
}

export default Layout;
