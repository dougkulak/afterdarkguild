import {
  classes,
  professions,
  races,
  ranks,
  recruitStatuses,
  specs,
  teams,
} from '../config/config';

const data = {
  name: 'Gold',
  type: 'Semi-Hardcore',
  schedule1: 'Wed/Thu/(Flex Sun)',
  schedule2: '8:00P-11:00P ST',
  leaders: ['GoldPlayer1'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Feral Druid, Shaman, Boomkin, Lock',
  description: 'Guided EPGP',
  progression: ['Kara: 11/11', 'Gru+Mag: 2/2'],
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
        assumenda at consequuntur eligendi et expedita fugit in iure, laudantium
        nisi omnis quaerat veritatis voluptatum. Facere modi nobis pariatur
        placeat. Suscipit.
      </p>
    </div>
  ),
  rules: ['Be nice.', 'Be punctual.', 'Have fun.'],
  players: [
    {
      name: 'GoldPlayer1',
      team: teams.GOLD,
      rank: ranks.RAIDLEADER,
      race: races.HUMAN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: null,
      profession2skill: null,
      notes: 'Gold Team Leader',
    },
  ],
};

export default data;
