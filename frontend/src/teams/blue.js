import {classes, professions, races, ranks, teams} from '../config/config';

export const description = 'Heavily-Guided EPGP';

export const players = [
  {
    name: 'Norrie',
    team: teams.BLUE,
    rank: ranks.OVERLORD,
    race: races.HUMAN,
    class: classes.WARRIOR,
    profession1: professions.LEATHERWORKING,
    profession2: professions.ENCHANTING,
    notes: 'Blue Team Leader',
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

export const rules = ['Be nice.', 'Be punctual.', 'Have fun.'];

const data = {
  description,
  players,
  information,
  rules,
};

export default data;
