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
import {Button, Divider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import {settings} from './config/config';
import {Sidebar} from './Sidebar';
import {TeamBottomNav} from './components/TeamBottomNav';
import {TeamTopNav} from './components/TeamTopNav';

import discordLogo from './logo-discord-white.svg';
import {getPlayerDataByPath, unknownPlayer} from './config/players';

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
    justifyContent: 'center',

    '& .MuiToggleButton-root': {
      color: 'white',
      borderRadius: 0,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    },

    padding: '0 !important',
    minHeight: 'auto !important',

    '& .Mui-selected': {
      borderTop: '4px solid white',
    },
  },
  sticky: {
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: 56,
    [theme.breakpoints.down('xs')]: {
      top: 48,
    },
    [theme.breakpoints.up('sm')]: {
      top: 64,
    },
  },
  discordLogo: {
    height: 16,
    marginRight: theme.spacing(1),
  },
}));

function DiscordIcon() {
  const classes = useStyles();

  return (
    <img
      src={discordLogo}
      className={classes.discordLogo}
      alt="After Dark Discord"
    />
  );
}

export const getRaidTeamDataByName = (name) => {
  return (
    raidTeams.find((x) => slugify(x.name) === slugify(name)) ??
    defaultRaidTeamData
  );
};

const getPageDataByName = (name) => {
  const allChildren = raidTeamPages.map((x) => x.children || []).flat();
  const allPages = [...raidTeamPages, ...allChildren];

  return (
    allPages.find((x) => slugify(x.name) === slugify(name)) ?? defaultPageData
  );
};

const getDefaultRaidTeamData = () => {
  const primaryPath = getRaidTeamNameFromPath();
  const secondaryPath = getPageNameFromPath();

  if (primaryPath === '/players') {
    const player = getPlayerDataByPath(secondaryPath) || {
      ...unknownPlayer,
    };
    return getRaidTeamDataByName(player.team);
  } else {
    return getRaidTeamDataByName(getRaidTeamNameFromPath());
  }
};

const getDefaultPageData = () => {
  const primaryPath = getRaidTeamNameFromPath();
  const secondaryPath = getPageNameFromPath();

  if (primaryPath === '/players') {
    const player = getPlayerDataByPath(secondaryPath) || {
      ...unknownPlayer,
    };
    return {name: player.name};
  } else {
    return getPageDataByName(getPageNameFromPath());
  }
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

function Footer() {
  return (
    <Box>
      <Box mb={2}>
        <Divider />
      </Box>

      <Typography variant={'caption'} color={'text.secondary'}>
        Copyright &copy; {new Date().getFullYear()} After Dark Guild. All rights
        reserved.
      </Typography>
    </Box>
  );
}

function Layout({team, page, setTeam, setPage, setThemeColor, children}) {
  const classes = useStyles();
  const history = useHistory();
  const width = useWidth();

  const [mobileOpen, setMobileOpen] = useState(false);

  const switchToTeam = (team) => {
    window.scrollTo(0, 0);
    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
    setThemeColor(team.color);
    setTeam(team);
  };

  const switchToPage = (page) => {
    window.scrollTo(0, 0);
    history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
    setMobileOpen(false);
    setPage(page);
  };

  const handleRaidTeamButtonClick = (e) => {
    const primaryPath = getRaidTeamNameFromPath();
    const raidTeamName = e.currentTarget.value;
    const team = getRaidTeamDataByName(raidTeamName);

    if (primaryPath === '/players') {
      window.scrollTo(0, 0);
      history.push(
        `/${slugify(raidTeamName)}/${slugify(defaultPageData.name)}`
      );
      setMobileOpen(false);
    } else {
      switchToTeam(team);
    }
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

    if (window.location.pathname === '/') {
      window.scrollTo(0, 0);
      history.push(`/${slugify(team.name)}/${slugify(page.name)}`);
    }
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
          <Button color="inherit" href={settings.discordLink} target={'_blank'}>
            <DiscordIcon /> Discord
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

        <div className={classes.sticky}>
          <Toolbar className={classes.raidTeamToolbar}>
            <ToggleButtonGroup
              size={'small'}
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
                  {isWidthDown('md', width) ? <>&nbsp;</> : x.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Toolbar>

          <TeamTopNav team={team} page={page} />
        </div>

        <Box p={3}>{children}</Box>

        <Box p={3} pt={0}>
          <TeamBottomNav team={team} page={page} />
        </Box>

        <Box p={3} pt={0}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
