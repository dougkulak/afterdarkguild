import {
  classes,
  professions,
  races,
  ranks,
  recruitStatuses,
  teams,
} from '../config/config';

const data = {
  name: 'Rainbow',
  type: 'Semi-Casual',
  schedule1: 'Wed 8:00P-10:00P ST',
  schedule2: 'Sun 7:00P-10:00P ST',
  leaders: ['RainbowPlayer1'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Healer (Any Class) & DPS (Esp. Lock/Boomie)',
  description: 'Loot Wheel',
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
      name: 'RainbowPlayer1',
      team: teams.RAINBOW,
      rank: ranks.RAIDLEADER,
      race: races.HUMAN,
      class: classes.WARRIOR,
      profession1: professions.LEATHERWORKING,
      profession2: null,
      notes: 'Rainbow Team Leader',
    },
  ],
};

export default data;
