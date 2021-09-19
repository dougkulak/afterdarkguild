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
  name: 'Blue',
  type: 'Hardcore',
  schedule1: 'Wed/Sun/(Flex Fri)',
  schedule2: '9:30P-12:30A ST',
  leaders: ['Trazick', 'Norrie'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Exceptional Tryhards',
  description: 'Heavily-Guided EPGP',
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
      name: 'Trazick',
      team: teams.BLUE,
      rank: ranks.GM,
      race: races.HUMAN,
      class: classes.MAGE,
      spec: specs.MAGE_FROST,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: professions.ENCHANTING,
      profession2skill: 375,
      notes: 'Guild Master, Blue Team Leader',
    },
    {
      name: 'Norrie',
      team: teams.BLUE,
      rank: ranks.OVERLORD,
      race: races.HUMAN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: professions.ENCHANTING,
      profession2skill: 375,
      notes: 'Blue Team Leader',
    },
  ],
};

export default data;
