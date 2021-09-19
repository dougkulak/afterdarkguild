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
  name: 'Ruby',
  type: 'Semi-Hardcore',
  schedule1: 'Wed/Thu/(Flex Mon)',
  schedule2: '6:00P-9:00P ST',
  leaders: ['RubyPlayer1'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Standbys',
  description: 'Loot Council',
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
      name: 'RubyPlayer1',
      team: teams.RUBY,
      rank: ranks.RAIDLEADER,
      race: races.HUMAN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: null,
      profession2skill: null,
      notes: 'Ruby Team Leader',
    },
  ],
};

export default data;
