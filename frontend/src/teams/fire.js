import {
  classes,
  encounters,
  professions,
  races,
  ranks,
  recruitStatuses,
  specs,
  teams,
} from '../config/config';

const data = {
  name: 'Fire',
  type: 'Semi-Hardcore',
  schedule1: 'Tue/Thu/(Flex Mon)',
  schedule2: '9:00P-12:00A ST',
  leaders: ['FirePlayer1'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Holy Priest, Resto Shaman, Holy Paladin',
  description: 'Guided EPGP',
  progression: ['Kara: 11/11', 'Gru+Mag: 2/2'],
  announcements: [],
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
  raids: [
    {
      encounter: encounters.KARAZHAN,
      progress: '11/11',
      strategy: <span>We just go in and kick Prince's butt.</span>,
    },
    {
      encounter: encounters.GRUUL,
      progress: '1/1',
      strategy: <span>We just go in and kick Gruul's butt.</span>,
    },
    {
      encounter: encounters.MAGTHERIDON,
      progress: '1/1',
      strategy: <span>We just go in and kick Magtheridon's butt.</span>,
    },
    {
      encounter: encounters.SSC,
      progress: '0/6',
      strategy: <span>We just go in and kick Lady Vashj's butt.</span>,
    },
    {
      encounter: encounters.TK,
      progress: '0/4',
      strategy: <span>We just go in and kick Kael'thas' butt.</span>,
    },
  ],
  players: [
    {
      name: 'FirePlayer1',
      team: teams.FIRE,
      rank: ranks.RAIDLEADER,
      race: races.HUMAN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: null,
      profession2skill: null,
      notes: 'Fire Team Leader',
    },
  ],
};

export default data;
