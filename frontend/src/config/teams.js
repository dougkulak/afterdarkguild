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
    description: 'The After Dark Guild',
    information: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
          dolorum enim, et eveniet, excepturi expedita illo in inventore
          laboriosam maxime minus molestias nihil, perspiciatis quis similique
          temporibus vel veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          assumenda at consequuntur eligendi et expedita fugit in iure,
          laudantium nisi omnis quaerat veritatis voluptatum. Facere modi nobis
          pariatur placeat. Suscipit.
        </p>
      </div>
    ),
    rules: [],
  },
  {
    name: 'Blue',
    color: colors.blue[400],
    type: 'Hardcore',
    recruitStatus: recruitStatuses.OPEN,
    ...blue,
  },
  {
    name: 'Emerald',
    color: colors.green[400],
    type: 'Hardcore',
    recruitStatus: recruitStatuses.CLOSED,
    ...emerald,
  },
  {
    name: 'Gold',
    color: colors.yellow[700],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...gold,
  },
  {
    name: 'Fire',
    color: colors.orange[700],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...fire,
  },
  {
    name: 'Ruby',
    color: colors.red[600],
    type: 'Semi-HC',
    recruitStatus: recruitStatuses.OPEN,
    ...ruby,
  },
  {
    name: 'Rainbow',
    color: colors.pink[300],
    type: 'Semi-Casual',
    recruitStatus: recruitStatuses.OPEN,
    ...rainbow,
  },
  {
    name: 'Amethyst',
    color: colors.purple[400],
    type: 'Hardcore',
    recruitStatus: recruitStatuses.OPEN,
    ...amethyst,
  },
];
