import {classes, professions, races, ranks, teams} from '../config/config';

export const description = 'Loot Council';

export const players = [
  {
    name: 'Pinsir',
    team: teams.EMERALD,
    rank: ranks.OFFICER,
    race: races.HUMAN,
    class: classes.WARRIOR,
    profession1: professions.LEATHERWORKING,
    profession2: professions.ENCHANTING,
    notes: 'Emerald Team Leader',
  },
  {
    name: 'Shazzamy',
    team: teams.EMERALD,
    rank: ranks.RAIDER,
    race: races.DRAENEI,
    class: classes.SHAMAN,
    profession1: professions.LEATHERWORKING,
    profession2: professions.ENCHANTING,
    notes: 'Webmaster',
  },
];

export const information = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque dolorum
      enim, et eveniet, excepturi expedita illo in inventore laboriosam maxime
      minus molestias nihil, perspiciatis quis similique temporibus vel
      veritatis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
      assumenda at consequuntur eligendi et expedita fugit in iure, laudantium
      nisi omnis quaerat veritatis voluptatum. Facere modi nobis pariatur
      placeat. Suscipit.
    </p>
  </div>
);

export const rules = ['Be nice.', 'Be punctual.', 'Be awesome.', 'Have fun.'];

const data = {
  description,
  players,
  information,
  rules,
};

export default data;
