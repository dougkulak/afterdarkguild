import {colors} from '@mui/material';

import blue from '../teams/blue';
import emerald from '../teams/emerald';
import gold from '../teams/gold';
import fire from '../teams/fire';
import ruby from '../teams/ruby';
import rainbow from '../teams/rainbow';
import amethyst from '../teams/amethyst';
import {recruitStatuses} from './config';

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
