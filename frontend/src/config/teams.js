import {colors} from '@mui/material';

import blue from '../teams/blue';
import emerald from '../teams/emerald';
import gold from '../teams/gold';
import fire from '../teams/fire';
import ruby from '../teams/ruby';
import rainbow from '../teams/rainbow';
import amethyst from '../teams/amethyst';
import {announcementTypes, encounters, recruitStatuses, teams} from './config';

export const raidTeams = [
  {
    name: 'All',
    color: colors.grey[400],
    description: 'Guild-Wide Settings',
    information: (
      <div>
        <p>
          After Dark is a World of Warcraft: TBC Classic alliance guild on
          US-Grobbulus.
        </p>
        <p>
          After Dark is comprised of <strong>7 core raid teams</strong>. Each
          team is allowed to operate fairly independently and affords us the
          ability to accommodate a wider variety of schedules, preferences, and
          personalities.
        </p>
      </div>
    ),
    rules: ['Be nice.', 'Be punctual.', 'Have fun.'],
    announcements: [
      {
        date: '2021-09-19',
        author: 'Trazick',
        type: announcementTypes.SUCCESS,
        title: 'New Guild Website!',
        content:
          'We have launched a new website for the guild to keep us more organized. Have a look around and let us know your feedback. There are a number of new features on the roadmap so if you have any free time to contribute, we can likely figure out something you can help with. If you have any issues or questions regarding the website, please contact Shazzamy. Welcome and enjoy!',
      },
      {
        date: '2021-08-01',
        author: 'Norrie',
        type: announcementTypes.INFO,
        title: 'New Core Raid Team',
        content: 'We have added a new core raid team, Amethyst!',
      },
    ],
    raids: [
      {
        encounter: encounters.KARAZHAN,
        progress: '11/11',
        strategy: <span>Guild just go in and kick Prince's butt.</span>,
      },
      {
        encounter: encounters.GRUUL,
        progress: '1/1',
        strategy: <span>Guild just go in and kick Gruul's butt.</span>,
      },
      {
        encounter: encounters.MAGTHERIDON,
        progress: '1/1',
        strategy: <span>Guild just go in and kick Magtheridon's butt.</span>,
      },
      {
        encounter: encounters.SSC,
        progress: '4/6',
        strategy: <span>Guild just go in and kick Lady Vashj's butt.</span>,
      },
      {
        encounter: encounters.TK,
        progress: '0/4',
        strategy: <span>Guild just go in and kick Kael'thas' butt.</span>,
      },
    ],
  },
  {
    color: colors.blue[400],
    ...blue,
  },
  {
    color: colors.green[400],
    ...emerald,
  },
  {
    color: colors.yellow[700],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...gold,
  },
  {
    color: colors.orange[700],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...fire,
  },
  {
    color: colors.red[600],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...ruby,
  },
  {
    color: colors.pink[300],
    type: 'Semi-Casual',
    recruitStatus: recruitStatuses.OPEN,
    ...rainbow,
  },
  {
    color: colors.purple[400],
    type: 'Hardcore',
    recruitStatus: recruitStatuses.OPEN,
    ...amethyst,
  },
];

export const getAnnouncementsForTeam = (team) => {
  if (team === teams.ALL) return raidTeams[0].announcements;
  return raidTeams
    .find((x) => x.name === team)
    .announcements.filter(
      (x) => new Date(x.expires || new Date()) >= new Date()
    );
};
