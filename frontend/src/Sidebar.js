import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {isWidthDown} from '@mui/material/Hidden/withWidth';
import logoWhite from './afterdarkguild-logo-white.svg';
import {Collapse, Divider} from '@mui/material';
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
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import {useState} from 'react';

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

  const [open, setOpen] = useState(null);

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
        color={'primary'}
        elevation={0}
        position="relative"
        sx={{
          width: {sm: settings.drawerWidth - 1},
        }}>
        <Toolbar>
          <img
            src={isWidthDown('sm', width) ? logoWhite : logoWhite}
            className={classes.logo}
            alt="After Dark Guild"
            onClick={handleLogoClick}
          />
        </Toolbar>
      </AppBar>
      <Divider />
      <Box py={3}>
        <Typography variant={'h6'} align={'center'} style={{color: team.color}}>
          {team.name === 'All' && <>After Dark</>}
          {team.name !== 'All' && <>{team.name} Team</>}
        </Typography>
      </Box>
      <Divider />
      <List>
        {raidTeamPages.map((x) => (
          <React.Fragment key={x.name}>
            <ListItem
              button
              onClick={() => {
                if (x.children) {
                  setOpen(open === x.name ? null : x.name);
                }
                switchToPage(x);
              }}
              selected={x.name === page.name}>
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={x.name} />
              {x.children && (
                <>{x.name === open ? <ExpandLess /> : <ExpandMore />}</>
              )}
            </ListItem>
            {x.children && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {x.children.map((y) => (
                    <ListItem
                      button
                      key={y.name}
                      onClick={() => {
                        switchToPage(y);
                      }}
                      selected={y.name === page.name}>
                      <ListItemText primary={y.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};
