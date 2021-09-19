import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {raidTeamPages} from './config/pages';
import {raidTeams} from './config/teams';
import {makeStyles} from '@mui/styles';
import {useHistory} from 'react-router-dom';
import {getPositionOfOccurrence, slugify, useWidth} from './util';
import {Button, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import {settings} from './config/config';
import {Sidebar} from './Sidebar';
import {TeamNav} from './components/TeamNav';

export const defaultRaidTeamData = raidTeams[0];
export const defaultPageData = raidTeamPages[0];

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  raidTeamBar: {
    backgroundColor: `${theme.palette.raidToolbarBg} !important`,
  },
  raidTeamToolbar: {
    paddingTop: theme.spacing(2),
    justifyContent: 'center',
    '& .MuiToggleButton-root': {
      color: 'white',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    },
  },
}));

export const getRaidTeamDataByName = (name) => {
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

function Layout({team, page, setTeam, setPage, setThemeColor, children}) {
  const classes = useStyles();
  const history = useHistory();
  const width = useWidth();

  const [mobileOpen, setMobileOpen] = useState(false);

  const switchToTeam = (team) => {
    setThemeColor(team.color);
    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
    setTeam(team);
  };

  const switchToPage = (page) => {
    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
    setPage(page);
  };

  const handleRaidTeamButtonClick = (e) => {
    const raidTeamName = e.currentTarget.value;
    switchToTeam(getRaidTeamDataByName(raidTeamName));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const team = getDefaultRaidTeamData();
    const page = getDefaultPageData();
    setThemeColor(team.color);
    setTeam(team);
    setPage(page);
    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
  }, []); //eslint-disable-line

  useEffect(() => {
    return history.listen((location) => {
      const team = getDefaultRaidTeamData();
      const page = getDefaultPageData();
      setThemeColor(team.color);
      setTeam(team);
      setPage(page);
    });
  }, [history]); //eslint-disable-line

  if (!team || !page) return <React.Fragment />;

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <AppBar
        color={'primary'}
        elevation={0}
        position="fixed"
        sx={{
          width: {sm: `calc(100% - ${settings.drawerWidth}px)`},
          ml: {sm: `${settings.drawerWidth}px`},
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
            {page.name}
          </Typography>
          <Button
            color="inherit"
            target={'_blank'}
            href={settings.applyFormLink}>
            Apply Now
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{width: {sm: settings.drawerWidth}, flexShrink: {sm: 0}}}
        aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: settings.drawerWidth,
            },
          }}>
          <Sidebar
            team={team}
            page={page}
            switchToPage={switchToPage}
            switchToTeam={switchToTeam}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: settings.drawerWidth,
            },
          }}
          open>
          <Sidebar
            team={team}
            page={page}
            switchToPage={switchToPage}
            switchToTeam={switchToTeam}
          />
        </Drawer>
      </Box>

      <Box component="main" sx={{flexGrow: 1, p: 0}}>
        <Toolbar />
        <Toolbar className={classes.raidTeamToolbar}>
          <ToggleButtonGroup
            size={'small'}
            orientation={isWidthDown('md', width) ? 'vertical' : 'horizontal'}
            value={team.name}
            exclusive
            fullWidth
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

        <Box p={3}>
          <TeamNav team={team} page={page} />
          <Box pt={3}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
