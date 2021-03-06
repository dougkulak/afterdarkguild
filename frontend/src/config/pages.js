import {
  Info as InfoIcon,
  People as RosterIcon,
  Rule as RulesIcon,
  PostAdd as ApplyIcon,
  Campaign as AnnouncementsIcon,
  Explore as RaidsIcon,
  DirectionsRun as RunsIcon,
} from '@mui/icons-material';
import {encounters} from './config';

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
    name: 'Raids',
    icon: <RaidsIcon />,
    children: [
      {
        name: 'All Raids',
        encounter: encounters.ALL,
      },
      {
        name: 'Karazhan',
        encounter: encounters.KARAZHAN,
      },
      {
        name: 'Gruul',
        encounter: encounters.GRUUL,
      },
      {
        name: 'Magtheridon',
        encounter: encounters.MAGTHERIDON,
      },
      {
        name: 'Serpentshrine Cavern',
        encounter: encounters.SSC,
      },
      {
        name: 'Tempest Keep',
        encounter: encounters.TK,
      },
    ],
  },
  {
    name: 'Runs',
    icon: <RunsIcon />,
  },
  {
    name: 'Apply',
    icon: <ApplyIcon />,
  },
];
