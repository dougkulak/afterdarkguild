import {
  Info as InfoIcon,
  People as RosterIcon,
  Rule as RulesIcon,
  PostAdd as ApplyIcon,
  Campaign as AnnouncementsIcon,
  Explore as StrategiesIcon,
} from '@mui/icons-material';

export const raidTeamPages = [
  {
    name: 'Information',
    icon: <InfoIcon />,
  },
  {
    name: 'Announcements',
    icon: <AnnouncementsIcon />,
  },
  {
    name: 'Rules',
    icon: <RulesIcon />,
  },
  {
    name: 'Roster',
    icon: <RosterIcon />,
  },
  {
    name: 'Strategies',
    icon: <StrategiesIcon />,
    children: [
      {
        name: 'Gruul',
      },
      {
        name: 'Mag',
      },
      {
        name: 'SSC',
      },
      {
        name: 'TK',
      },
    ],
  },
  {
    name: 'Apply',
    icon: <ApplyIcon />,
  },
];
