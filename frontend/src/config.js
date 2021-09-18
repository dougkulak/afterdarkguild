import {colors} from '@mui/material';
import {
  Dashboard as OverviewIcon,
  People as RosterIcon,
} from '@mui/icons-material';

export const raidTeams = [
  {
    name: 'Blue',
    color: colors.blue[400],
  },
  {
    name: 'Emerald',
    color: colors.green[400],
  },
  {
    name: 'Gold',
    color: colors.yellow[700],
  },
  {
    name: 'Fire',
    color: colors.orange[700],
  },
  {
    name: 'Ruby',
    color: colors.red[600],
  },
  {
    name: 'Rainbow',
    color: colors.pink[300],
  },
  {
    name: 'Amethyst',
    color: colors.purple[400],
  },
];

export const raidTeamPages = [
  {
    name: 'Overview',
    icon: <OverviewIcon />,
  },
  {
    name: 'Roster',
    icon: <RosterIcon />,
  },
];
