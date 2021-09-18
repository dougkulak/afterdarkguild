import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import logoWhite from './afterdarkguild-logo-white.svg';
import logo from './afterdarkguild-logo.svg';
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import {settings} from './config/config';
import {raidTeamPages} from './config/pages';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {slugify, useWidth} from './util';
import {useHistory} from 'react-router-dom';
import {defaultPageData, defaultRaidTeamData} from './Layout';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    cursor: 'pointer',
  },
}));

export const Sidebar = ({team, page, switchToTeam, switchToPage}) => {
  const classes = useStyles();
  const width = useWidth();
  const history = useHistory();

  //const handleRaidTeamPageClick = (e) => {};

  const handleLogoClick = () => {
    switchToTeam(defaultRaidTeamData);
    switchToPage(defaultPageData);
    history.push(
      `/${slugify(defaultRaidTeamData.name)}/${slugify(defaultPageData.name)}`
    );
  };

  return (
    <div>
      <AppBar
        elevation={0}
        position="relative"
        sx={{
          width: {sm: `calc(100% - ${settings.drawerWidth}px)`},
        }}>
        <Toolbar>
          <img
            src={isWidthDown('sm', width) ? logoWhite : logo}
            className={classes.logo}
            alt="After Dark Guild"
            onClick={handleLogoClick}
          />
        </Toolbar>
      </AppBar>
      <Divider />
      <Box py={3}>
        <Typography variant={'h6'} align={'center'} style={{color: team.color}}>
          {team.name === 'All' && <>Guild</>}
          {team.name !== 'All' && <>{team.name} Team</>}
        </Typography>
      </Box>
      <Divider />
      <List>
        {raidTeamPages.map((x) => (
          <ListItem
            button
            key={x.name}
            onClick={() => switchToPage(x)}
            selected={x.name === page.name}>
            <ListItemIcon>{x.icon}</ListItemIcon>
            <ListItemText primary={x.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
