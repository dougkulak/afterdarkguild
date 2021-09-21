import {
  announcementTypes,
  attunes,
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
  name: 'Blue',
  type: 'Hardcore',
  schedule1: 'Wed/Sun/(Flex Fri)',
  schedule2: '9:30P-12:30A ST',
  leaders: ['Trazick', 'Norrie'],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Exceptional Tryhards',
  description: 'Heavily-Guided EPGP',
  progression: ['Kara: 11/11', 'Gru+Mag: 2/2'],
  announcements: [
    {
      type: announcementTypes.INFO,
      title: 'New Guild Website!',
      content:
        'We have launched a new website for the guild to keep us more organized. Please direct any issues or feature requests to Shazzamy.',
    },
  ],
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
      encounter: encounters.ALL,
      progress: '3/5',
      strategy: (
        <span>
          General strategy/instructions/consumes/etc for all raids goes here.
        </span>
      ),
    },
    {
      encounter: encounters.KARAZHAN,
      progress: '11/11',
      parses: {
        bestAvgExecution: 95,
        bestAvgSpeed: 84,
        bestTime: '1:18:00',
        executionLogLink: 'https://link/to/log/with/best/execution',
        speedLogLink: 'https://link/to/log/with/best/speed',
        timeLogLink: 'https://link/to/log/with/best/time',
        recordLastBroken: '2021-09-18',
      },
      strategy: (
        <div>
          <ol>
            <li>
              <strong>Attumen</strong>
              <ul>
                <li>At 95%: Boss Dismounts</li>
                <li>Stack Behind Horse & Focus It</li>
                <li>At 25%: Boss Mounts & Wipes Threat</li>
              </ul>
            </li>
            <li>
              <strong>Moroes</strong>
              <ul>
                <li>AOE Adds</li>
              </ul>
            </li>
            <li>
              <strong>Maiden of Virtue</strong>
              <ul>
                <li>Spread out</li>
                <li>Stand in Consecration Before Stun</li>
              </ul>
            </li>
            <li>
              <strong>Opera Event</strong>
              <ul>
                <li>
                  Romulo & Julianne &mdash; Dispell Julianne's Buff. Romulo
                  cleaves. Both have to die within 10 seconds of each other.
                </li>
                <li>
                  Wizard of Oz &mdash; Kill Dorothy > Toto > Roar > Strawman >
                  Tinman (Cleaves) > Crone (Watch out for tornados)
                </li>
                <li>
                  Big Bad Wolf &mdash; If transformed into red riding hood, run
                  and kite wolf around room.
                </li>
              </ul>
            </li>
            <li>
              <strong>Nightbane</strong>
              <ul>
                <li>Two Phases (Ground & Air)</li>
                <li>Ground Phase:</li>
                <li>- Cleaves & Tail Swipes</li>
                <li>- Don't Stand in Charred Earth</li>
                <li>- At 75%, 50%, 25% Boss Goes Air</li>
                <li>Air Phase:</li>
                <li>- Everyone Stacks</li>
                <li>- Move Together When Bones Rain</li>
                <li>- Threat Wipes When Boss Lands</li>
              </ul>
            </li>
            <li>
              <strong>Curator</strong>
              <ul>
                <li>Kill Flares ASAP</li>
                <li>Evocates When OOM - Damage Taken +200%</li>
              </ul>
            </li>
            <li>
              <strong>Terestain Illhoof</strong>
              <ul>
                <li>Focus Kilrek First</li>
                <li>When Player Sacrificed, Focus Demon Chains ASAP</li>
                <li>Ignore Portaled Imps</li>
              </ul>
            </li>
            <li>
              <strong>Shade of Aran</strong>
              <ul>
                <li>Can't Be Tanked</li>
                <li>Dispel Chains of Ice</li>
                <li>Ranged Stay Away (AOE Counterspell)</li>
                <li>Stay Out of Blizzard</li>
                <li>Run to Edge of Room When He Teleports You</li>
                <li>Don't Move While In Flame Wreath</li>
                <li>Kill 4 Elementals</li>
              </ul>
            </li>
            <li>
              <strong>Netherspite</strong>
              <ul>
                <li>Two Phases (Portal & Banish)</li>
                <li>Portal Phase:</li>
                <li>
                  - Three Portals Spawn & Buff Boss So Stand In-Front Of Beams
                </li>
                <li>- Red Lazer for Tanks</li>
                <li>- Blue Lazer for Casters</li>
                <li>- Green Lazer for Healers</li>
                <li>Don't Stand In Void Zones</li>
                <li>Banish Phase:</li>
                <li>Run to Opposite Side of Room</li>
              </ul>
            </li>
            <li>
              <strong>Chess Event</strong>
              <ul>
                <li>Kill The King</li>
              </ul>
            </li>
            <li>
              <strong>Prince Malchezar</strong>
              <ul>
                <li>Tank Near Safe Cubby</li>
                <li>Phase 1: Summons Infernals that Hellfire</li>
                <li>Phase 2: Boss Does More Damage</li>
                <li>Phase 3: Boss Throws Axes Randomly</li>
                <li>Melee DPS: LOS Shadow Nova Before Cast</li>
              </ul>
            </li>
          </ol>
        </div>
      ),
      teams: [
        {
          name: 'Blue Team 1',
          nextScheduledRun: 'Tuesday 9/19 8:00P ST',
          players: [
            'BluePlayer1 as melee',
            'BluePlayer2 as melee',
            'BluePlayer3 as heals',
            'BluePlayer4 as tank',
            'BluePlayer5 as tank',
            'BluePlayer6 as heals',
            'BluePlayer7 as dps',
            'BluePlayer8 as tank',
            'BluePlayer9 as dps',
            'BluePlayer10 as dps',
          ],
        },
        {
          name: 'Blue Team 2',
          nextScheduledRun: 'Tuesday 9/19 8:00P ST',
          players: [
            'BluePlayer1 as tank',
            'BluePlayer2 as tank',
            'BluePlayer3 as dps',
            'BluePlayer4 as melee',
            'BluePlayer5 as heals',
            'BluePlayer6 as heals',
            'BluePlayer7 as dps',
            'BluePlayer8 as dps',
            'BluePlayer9 as dps',
            'BluePlayer10 as dps',
          ],
        },
        {
          name: 'Blue Team 3',
          nextScheduledRun: 'Thursday 9/21 9:00P ST',
          players: [
            'Parasite as dps',
            'Skyguy as tank',
            'Tonize as tank',
            'Pinsir as dps',
            'Furrygsis as dps',
            'Tavlox as dps',
            'Cordulla as heals',
            'Dreys as dps',
            'Shazzamy as heals',
            'Eztokill as dps',
          ],
        },
      ],
    },
    {
      encounter: encounters.GRUUL,
      progress: '1/1',
      parses: {
        bestAvgExecution: 99,
        bestAvgSpeed: 87,
        bestTime: '6:45',
        executionLogLink: 'https://link/to/log/with/best/execution',
        speedLogLink: 'https://link/to/log/with/best/speed',
        timeLogLink: 'https://link/to/log/with/best/time',
        recordLastBroken: '2021-09-18',
      },
      strategy: <span>We just go in and kick Gruul's butt.</span>,
    },
    {
      encounter: encounters.MAGTHERIDON,
      progress: '1/1',
      parses: {
        bestAvgExecution: 93,
        bestAvgSpeed: 76,
        bestTime: '3:33',
        executionLogLink: 'https://link/to/log/with/best/execution',
        speedLogLink: 'https://link/to/log/with/best/speed',
        timeLogLink: 'https://link/to/log/with/best/time',
        recordLastBroken: '2021-09-18',
      },
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
      description: 'Guild Master, Blue Team Leader',
      notes: <span>After Dark Founder & Guild Master&trade;</span>,
      attunes: [attunes.KARAZHAN, attunes.SSC, attunes.TK],
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
      description: 'Blue Team Leader',
    },
  ],
};

export default data;
