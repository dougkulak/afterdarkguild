import {
  announcementTypes,
  attunes,
  bosses,
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
  name: 'Emerald',
  type: 'Hardcore',
  schedule1: 'Tue/Thu/(Flex Mon)',
  schedule2: '8:00P-11:00P ST',
  leaders: [],
  recruitStatus: recruitStatuses.OPEN,
  recruitNeeds: 'Holy Paladin',
  description: 'Loot Council',
  progression: ['SSC: 4/6', 'TK: 3/4'],
  announcements: [
    {
      type: announcementTypes.INFO,
      title: 'Enchanting bank is now open!',
      author: 'Pinsir',
      content: 'Anyone who needs enchants can reach out to Werdna and get enchants from the bank for 50% off current AH prices This only applies to enchanting materials. Arcane Dust/Essences/Shards will always have a cost. Void Crystals will eventually be free once we have the stockpile to support it.',
      date: '2021-07-23',
      expires: '2021-10-01',
    },
  ],
  information: (
    <div>
      <p>
        The main goal for Emerald is to create a raid that can perform at a high
        level, without having to keep things crazy serious and quiet. My hope is
        that with a raid of like minded players we can remove much of the top
        down direction that is present in classic, and make something more akin
        to a retail raid, where each member is highly engaged, and brings
        something to the table.
      </p>
      <p>
        <strong>Raid Composition:</strong> We want to get as close to as an
        ideal raid comp as we possibly can. This won't always be possible, or
        the best course of action, but where we can we will. This means we will
        be running things like an affliction warlock, a survival hunter etc to
        have a more effective overall group.
      </p>
      <p>
        <strong>Loot Council:</strong> A controversial thing to many people,
        however every loot system comes with drama. A well run loot council is
        by far the most effective way to gear a raid. Loot will be handled
        transparently, openly in discord with everyone to listen in, make
        suggestions, or critique. For really contentious items (Weapons/trinkets
        etc) we will reserve the right to discuss these privately so as not to
        hold the raid up for extended periods of time. Loot council will consist
        of the officers, minus Skyguy.
      </p>
      <p>
        <strong>Consumables:</strong> Full consumes, enchants and gems are
        required for ALL content. Flasking will be required for progression.
        Anything that you can bring that will increase your effectiveness will
        be mandatory.
      </p>
      <p>
        <strong>Hybrids:</strong> Any class that can perform multiple roles is
        expected to have a viable offspec set of gear, enchanted and gemmed. For
        example, an Enhancement shaman should have a competent resto set.
        Flexibility will be critical early in TBC for Karazhan groups and
        getting our first 25 man operational.
      </p>
      <p>
        <strong>Raid&gt;You:</strong> The raid as a whole should be your primary
        focus. We will be working as a team, and people who value themselves,
        their gear, or their parses over the raids goals and values will not be
        tolerated. I especially want to stress the gear thing. If your goal is
        as many purply pixels as possible, this is not the raid for you. Loot
        council shines in an environment where gear is an afterthought, a
        natural occurrence of shitting on content.
      </p>
      <p>
        <strong>Improvement:</strong> While toxicity will not be tolerated in
        Emerald, we are all adults, and I will expect that everyone can handle
        some criticism. 25 heads are better than one, and it's very likely
        others know things you don't. If someone has something to say that might
        help you do better, then you should embrace that with open arms.
      </p>
      <p>
        <strong>Roster Standby:</strong> Roster spots will be dictated by
        performance. Bench players will be rotated in as needed. Players who are
        not performing, or are unable to do mechanics will be given an
        opportunity to improve before being benched.
      </p>
      <p>
        <strong>Attendance:</strong> Officers must be notified at least an hour
        before raid if you are going to miss raid or be late. Preferably much
        longer than that but bare minimum an hour. (Barring emergencies)
      </p>
      <p>
        One exception to this 'hardcore' is we will not be speed running. Going
        faster and faster will be a goal, but we have no intentions of trying to
        blast through content as fast as humanly possible. To those of you that
        we have not reached out to, and still think this is a good fit for you,
        I will lay out what Emerald is looking for to complete our roster.
      </p>
      <p>
        We are currently in the phase 1/3 of the rostering process. Raid leads
        reaching out to individuals for raid slots. All the raid teams should be
        making announcements this weekend, and raid leads from other teams may
        be reaching out to those of you we are unable to fit in Emerald. The
        next phase will be intra-guild applications. Reach out to officers in
        these raid teams and express your interest. Phase 3 will be out of guild
        applications. So if you wish to play TBC and raid, the next two weeks
        will be very formative.
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
        bestAvgExecution: 92,
        bestAvgSpeed: 74,
        bestTime: '1:22:00',
        executionLogLink: 'https://link/to/log/with/best/execution',
        speedLogLink: 'https://link/to/log/with/best/speed',
        timeLogLink: 'https://link/to/log/with/best/time',
        recordLastBroken: '2021-09-01',
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
          name: 'Emerald Team 1',
          nextScheduledRun: 'No Runs Scheduled',
          players: [
            'Pinsir as melee',
            'Parasite as melee',
            'Tonize as heals',
            'Furrygsis as tank',
            'Skyguy as tank',
            'Cordulla as heals',
            'Dreys as dps',
            'Eztokill as tank',
            'Tavlox as dps',
            'Shazzamy as dps',
          ],
        },
        {
          name: 'Emerald Team 2',
          nextScheduledRun: 'No Runs Scheduled',
          players: [
            'Skyguy as tank',
            'Furrygsis as tank',
            'Tavlox as dps',
            'Parasite as melee',
            'Cordulla as heals',
            'Tonize as heals',
            'Pinsir as dps',
            'Dreys as dps',
            'Eztokill as dps',
            'Shazzamy as dps',
          ],
        },
        {
          name: 'Emerald Team 3',
          nextScheduledRun: 'No Runs Scheduled',
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
      progress: '2/2',
      parses: {
        bestAvgExecution: 98,
        bestAvgSpeed: 94,
        bestTime: '2:57',
        executionLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        speedLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        timeLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        recordLastBroken: '2021-09-21 20:00:00',
      },
      strategy: <span>We just go in and kick Gruul's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Tuesday 9/28 8:00P ST',
          players: null,
        },
      ],
      loggedRuns: [
        {
          week: 2,
          date: '2021-09-21 20:00:00',
          encounter: encounters.GRUUL,
          kills: [
            {
              boss: bosses.GRUUL_MAULGAR,
              execution: 98,
              speed: 94,
              time: '0:37',
            },
            {
              boss: bosses.GRUUL,
              execution: 70,
              speed: 87,
              time: '2:57',
            },
          ],
          youtubeLink: 'https://www.youtube.com/watch?v=89cZeT-Jbtk',
          warcraftLogsLink:
            'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
          attendees: [
            'Werdna',
            'Dreys',
            'Shazzamy',
            'Parasite',
            'Cavanawz',
            'Firequacker',
            'Brewmiser',
            'Pinsir',
            'Econometric',
            'Eztokill',
            'Geeked',
            'Judgejed',
            'Tonize',
            'Ishammel',
            'Shammay',
            'Furrygsis',
            'Usp',
            'Timmyh',
            'Tavlox',
            'Cordulla',
            'Euda',
            'Enderstar',
            'Krashovrride',
            'Murlochlair',
          ],
        },
      ],
    },
    {
      encounter: encounters.MAGTHERIDON,
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
      strategy: <span>We just go in and kick Magtheridon's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'No Runs Scheduled',
          players: null,
        },
      ],
    },
    {
      encounter: encounters.SSC,
      progress: '5/6',
      parses: {
        bestAvgExecution: 92,
        bestAvgSpeed: 90,
        bestTime: '3:33',
        executionLogLink:
          'https://classic.warcraftlogs.com/reports/gp4x9TfnLQ1HkBGM/',
        speedLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        timeLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        recordLastBroken: '2021-09-23 20:00:00',
      },
      strategy: <span>We just go in and kick Lady Vashj's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Thursday 9/23 8:00P ST',
          players: null,
        },
      ],
      loggedRuns: [
        {
          week: 2,
          date: '2021-09-23 20:00:00',
          encounter: encounters.SSC,
          kills: [
            {
              boss: bosses.SSC_KARATHRESS,
              execution: 92,
              speed: 82,
              time: '4:03',
            },
            {
              boss: bosses.SSC_MOROGRIM,
              execution: 30,
              speed: 65,
              time: '5:47',
            },
          ],
          youtubeLink: 'https://youtu.be/wvRuHL22slE',
          warcraftLogsLink:
            'https://classic.warcraftlogs.com/reports/gp4x9TfnLQ1HkBGM/',
          attendees: [
            'Cavanawz',
            'Parasite',
            'Werdna',
            'Sterrek',
            'Judgejed',
            'Lysanderöth',
            'Pinsir',
            'Dreys',
            'Brewmiser',
            'Geeked',
            'Econometric',
            'Firequacker',
            'Ishammel',
            'Shazzamy',
            'Tonize',
            'Furrygsis',
            'Eztokill',
            'Timmyh',
            'Skyguy',
            'Cordulla',
            'Euda',
            'Enderstar',
            'Tavlox',
            'Murlochlair',
            'Krashovrride',
          ],
        },
        {
          week: 2,
          date: '2021-09-21 20:00:00',
          encounter: encounters.SSC,
          kills: [
            {
              boss: bosses.SSC_HYDROSS,
              execution: 81,
              speed: 90,
              time: '3:33',
            },
            {
              boss: bosses.SSC_LURKER,
              execution: 49,
              speed: 78,
              time: '8:07',
            },
            {
              boss: bosses.SSC_LEOTHERAS,
              execution: 40,
              speed: 67,
              time: '7:05',
            },
          ],
          youtubeLink: 'https://www.youtube.com/watch?v=iOLcXHZRJsg',
          warcraftLogsLink:
            'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
          attendees: [
            'Werdna',
            'Dreys',
            'Shazzamy',
            'Parasite',
            'Cavanawz',
            'Firequacker',
            'Brewmiser',
            'Pinsir',
            'Econometric',
            'Eztokill',
            'Geeked',
            'Judgejed',
            'Tonize',
            'Ishammel',
            'Shammay',
            'Furrygsis',
            'Lysanderöth',
            'Timmyh',
            'Tavlox',
            'Cordulla',
            'Euda',
            'Enderstar',
            'Krashovrride',
            'Murlochlair',
          ],
        },
      ],
    },
    {
      encounter: encounters.TK,
      progress: '3/4',
      parses: {
        bestAvgExecution: 95,
        bestAvgSpeed: 84,
        bestTime: '7:48',
        executionLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        speedLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        timeLogLink:
          'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
        recordLastBroken: '2021-09-21 20:00:00',
      },
      strategy: <span>We just go in and kick Kael'thas' butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Thursday 9/23 8:00P ST',
          players: null,
        },
      ],
      loggedRuns: [
        {
          week: 2,
          date: '2021-09-21 20:00:00',
          encounter: encounters.TK,
          kills: [
            {
              boss: bosses.TK_ALAR,
              execution: 95,
              speed: 84,
              time: '7:48',
            },
            {
              boss: bosses.TK_VOIDREAVER,
              execution: 72,
              speed: 87,
              time: '3:34',
            },
            {
              boss: bosses.SSC_LEOTHERAS,
              execution: 35,
              speed: 85,
              time: '4:24',
            },
          ],
          youtubeLink: 'https://www.youtube.com/watch?v=stuXQFa4_Xg',
          warcraftLogsLink:
            'https://classic.warcraftlogs.com/reports/MpAG7XbhkNrqaJK3/',
          attendees: [
            'Werdna',
            'Dreys',
            'Shazzamy',
            'Parasite',
            'Cavanawz',
            'Firequacker',
            'Brewmiser',
            'Pinsir',
            'Econometric',
            'Eztokill',
            'Geeked',
            'Judgejed',
            'Tonize',
            'Ishammel',
            'Shammay',
            'Furrygsis',
            'Lysanderöth',
            'Timmyh',
            'Tavlox',
            'Cordulla',
            'Euda',
            'Enderstar',
            'Krashovrride',
            'Murlochlair',
          ],
        },
      ],
    },
  ],
  players: [
    {
      name: 'Shazzamy',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.DRAENEI,
      class: classes.SHAMAN,
      spec: specs.SHAMAN_ENHANCE,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: professions.ENCHANTING,
      profession2skill: 375,
      description: 'Guild Webmaster',
      notes:
        'Questions or issues regarding the After Dark website? Message me!',
      attunes: [attunes.KARAZHAN, attunes.SSC, attunes.TK],
      equipment: {
        head: 29040,
        neck: 29381,
        shoulders: 29043,
        back: 24259,
        chest: 29515,
        shirt: null,
        tabard: null,
        wrists: 29517,
        mainhand: null,
        offhand: 27872,
        hands: 28776,
        waist: 29516,
        legs: 30538,
        feet: 28545,
        finger1: 28757,
        finger2: 29283,
        trinket1: 29383,
        trinket2: 28288,
        ranged: 27815,
      },
      lootReceived: [
        {
          item: 30183,
          itemName: 'Nether Vortexx',
          date: '2021-09-21',
          giver: 'Pinsir',
          encounter: encounters.TK,
        },
        {
          item: 30183,
          itemName: 'Nether Vortexx',
          date: '2021-09-21',
          giver: 'Pinsir',
          encounter: encounters.TK,
        },
        {
          item: 30183,
          itemName: 'Nether Vortexx',
          date: '2021-09-20',
          giver: 'Pinsir',
          encounter: encounters.TK,
        },
        {
          item: 30183,
          itemName: 'Nether Vortexx',
          date: '2021-09-20',
          giver: 'Pinsir',
          encounter: encounters.TK,
        },
        {
          item: 30183,
          itemName: 'Nether Vortexx',
          date: '2021-09-20',
          giver: 'Pinsir',
          encounter: encounters.TK,
        },
        {
          item: 28767,
          itemName: 'The Decapitator',
          date: '2021-09-19',
          giver: 'Pinsir',
          encounter: encounters.KARAZHAN,
        },
        {
          item: 29766,
          itemName: 'Leggings of the Fallen Champion',
          date: '2021-09-19',
          giver: 'Pinsir',
          encounter: encounters.KARAZHAN,
        },
      ],
      lootWanted: [
        {
          item: 29996,
          itemName: 'Rod of the Sun King',
          dateFirstWanted: '2021-09-19',
          encounters: [encounters.TK],
        },
        {
          item: 30055,
          itemName: 'Shoulderpads of the Stranger',
          dateFirstWanted: '2021-09-18',
          encounters: [encounters.SSC],
        },
      ],
    },
    {
      name: 'Furrygsis',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.DRUID,
      spec: specs.DRUID_FERALTANK,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29098,
        neck: 28509,
        shoulders: 29100,
        back: 28672,
        chest: 29096,
        shirt: null,
        tabard: 31804,
        wrists: 32810,
        mainhand: null,
        offhand: null,
        hands: 29097,
        waist: 28986,
        legs: 28741,
        feet: 30441,
        finger1: 28757,
        finger2: 29279,
        trinket1: 29383,
        trinket2: 28288,
        ranged: null,
      },
    },
    {
      name: 'Skyguy',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.PALADIN,
      spec: specs.PALADIN_PROT,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29068,
        neck: 28516,
        shoulders: 29070,
        back: 27804,
        chest: 29066,
        shirt: null,
        tabard: 31404,
        wrists: 28502,
        mainhand: null,
        offhand: 28825,
        hands: 30124,
        waist: 28566,
        legs: 30126,
        feet: 30641,
        finger1: 30028,
        finger2: 29279,
        trinket1: 29370,
        trinket2: 28789,
        ranged: 27917,
      },
    },
    {
      name: 'Timmyh',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 32473,
        neck: 30099,
        shoulders: 30117,
        back: 27804,
        chest: 29012,
        shirt: null,
        tabard: 31404,
        wrists: 28502,
        mainhand: null,
        offhand: null,
        hands: 30114,
        waist: 31460,
        legs: 29015,
        feet: 28747,
        finger1: 29279,
        finger2: 30834,
        trinket1: 28579,
        trinket2: 23836,
        ranged: 30227,
      },
    },
    {
      name: 'Firequacker',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.DRUID,
      spec: specs.DRUID_FERALDPS,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29093,
        neck: 28762,
        shoulders: 29095,
        back: 28766,
        chest: 29091,
        shirt: null,
        tabard: 28788,
        wrists: 28453,
        mainhand: null,
        offhand: 29273,
        hands: 29092,
        waist: 28799,
        legs: 24262,
        feet: 28585,
        finger1: 28793,
        finger2: 29287,
        trinket1: 38290,
        trinket2: 29370,
        ranged: 32387,
      },
    },
    {
      name: 'Furrygsis',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.DRUID,
      spec: specs.DRUID_FERALTANK,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29098,
        neck: 28509,
        shoulders: 29100,
        back: 28672,
        chest: 29096,
        shirt: null,
        tabard: 31804,
        wrists: 32810,
        mainhand: null,
        offhand: null,
        hands: null,
        waist: 28986,
        legs: 28741,
        feet: 30041,
        finger1: 28757,
        finger2: 29279,
        trinket1: 29383,
        trinket2: 28288,
        ranged: null,
      },
    },
    {
      name: 'Econometric',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.HUNTER,
      spec: specs.HUNTER_BM,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28275,
        neck: 28509,
        shoulders: 27801,
        back: 28672,
        chest: 28228,
        shirt: null,
        tabard: null,
        wrists: 25697,
        mainhand: null,
        offhand: 28315,
        hands: 27474,
        waist: 28828,
        legs: 27837,
        feet: 28545,
        finger1: 28649,
        finger2: 28791,
        trinket1: 29383,
        trinket2: 38287,
        ranged: 28772,
      },
    },
    {
      name: 'Geeked',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.HUNTER,
      spec: specs.HUNTER_BM,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28275,
        neck: 28343,
        shoulders: 27801,
        back: 29382,
        chest: 28228,
        shirt: null,
        tabard: 5976,
        wrists: 25697,
        mainhand: null,
        offhand: 28572,
        hands: 27474,
        waist: 28750,
        legs: 28741,
        feet: 28545,
        finger1: 28791,
        finger2: 31277,
        trinket1: 29383,
        trinket2: 38287,
        ranged: 28772,
      },
    },
    {
      name: 'Werdna',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.HUNTER,
      spec: specs.HUNTER_BM,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28275,
        neck: 28674,
        shoulders: 27801,
        back: 28672,
        chest: 28228,
        shirt: null,
        tabard: 31404,
        wrists: 29966,
        mainhand: null,
        offhand: 28572,
        hands: 27474,
        waist: 28828,
        legs: 28741,
        feet: 28545,
        finger1: 28791,
        finger2: 28757,
        trinket1: 28830,
        trinket2: 29383,
        ranged: 28772,
      },
    },
    {
      name: 'Ishammel',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.MAGE,
      spec: specs.MAGE_ARCANE,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28744,
        neck: 28762,
        shoulders: 30024,
        back: 28766,
        chest: 2907,
        shirt: null,
        tabard: 28783,
        wrists: 29918,
        mainhand: null,
        offhand: 29270,
        hands: 29080,
        waist: 21846,
        legs: 29972,
        feet: 28517,
        finger1: 28793,
        finger2: 29287,
        trinket1: 29132,
        trinket2: 23046,
        ranged: null,
      },
    },
    {
      name: 'Sterrek',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.MAGE,
      spec: specs.MAGE_ARCANE,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 24266,
        neck: 28762,
        shoulders: 30925,
        back: 28797,
        chest: 21848,
        shirt: null,
        tabard: null,
        wrists: 24250,
        mainhand: null,
        offhand: 29271,
        hands: 21847,
        waist: 21846,
        legs: 24262,
        feet: 28517,
        finger1: 29287,
        finger2: 28793,
        trinket1: 38290,
        trinket2: 27683,
        ranged: 28673,
      },
    },
    {
      name: 'Tonize',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.PALADIN,
      spec: specs.PALADIN_RET,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29073,
        neck: 32083,
        shoulders: 28745,
        back: 24259,
        chest: 29071,
        shirt: null,
        tabard: 27484,
        wrists: 30057,
        mainhand: null,
        offhand: 28825,
        hands: 30644,
        waist: 27755,
        legs: 30257,
        feet: 28608,
        finger1: 28757,
        finger2: 29323,
        trinket1: 28288,
        trinket2: 29370,
        ranged: null,
      },
    },
    {

      name: 'Brewmiser',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.PRIEST,
      spec: specs.PRIEST_SHADOW,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 24266,
        neck: 30666,
        shoulders: 21869,
        back: 24252,
        chest: 21871,
        shirt: null,
        tabard: null,
        wrists: 24250,
        mainhand: null,
        offhand: 29272,
        hands: 28507,
        waist: 28799,
        legs: 2426,
        feet: null,
        finger1: 23031,
        finger2: 21709,
        trinket1: 38290,
        trinket2: 28789,
        ranged: 28783,
      },
    },
    {
      name: 'Cavanawz',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARLOCK,
      spec: specs.WARLOCK_AFF,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28963,
        neck: 28762,
        shoulders: 28967,
        back: 28766,
        chest: 21848,
        shirt: null,
        tabard: 28673,
        wrists: 24250,
        mainhand: null,
        offhand: 28734,
        hands: 21847,
        waist: 24256,
        legs: 24262,
        feet: 28517,
        finger1: 28753,
        finger2: 28793,
        trinket1: 29132,
        trinket2: 29370,
        ranged: null,
      },
    },
    {

      name: 'Dreys',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARLOCK,
      spec: specs.WARLOCK_DEST,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28963,
        neck: 28762,
        shoulders: 28967,
        back: 28766,
        chest: 21848,
        shirt: null,
        tabard: 28673,
        wrists: 27462,
        mainhand: null,
        offhand: 28734,
        hands: 28968,
        waist: 21846,
        legs: 24262,
        feet: 28179,
        finger1: 28793,
        finger2: 29172,
        trinket1: 29370,
        trinket2: 27683,
        ranged: null,
      },
    },
    {
      name: 'Judgejed',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARLOCK,
      spec: specs.WARLOCK_AFF,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28963,
        neck: 28530,
        shoulders: 28967,
        back: 28766,
        chest: 28964,
        shirt: null,
        tabard: null,
        wrists: 31405,
        mainhand: null,
        offhand: 27462,
        hands: 28734,
        waist: 28968,
        legs: 24262,
        feet: 21870,
        finger1: 28793,
        finger2: 29287,
        trinket1: 29370,
        trinket2: 27683,
        ranged: 28673,
      },
    },
    {

      name: 'Lysanderöth',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARLOCK,
      spec: specs.WARLOCK_DEST,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28963,
        neck: 28530,
        shoulders: 28967,
        back: null,
        chest: 28964,
        shirt: null,
        tabard: 28673,
        wrists: 24250,
        mainhand: null,
        offhand: 29273,
        hands: 28968,
        waist: 2865,
        legs: 24262,
        feet: 28517,
        finger1: 28793,
        finger2: 29172,
        trinket1: 27683,
        trinket2: 29370,
        ranged: null,
      },
    },
    {

      name: 'Eztokill',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_FURY,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29021,
        neck: 28509,
        shoulders: 29023,
        back: 28777,
        chest: 28483,
        shirt: null,
        tabard: 35280,
        wrists: 28514,
        mainhand: null,
        offhand: null,
        hands: 28776,
        waist: 27985,
        legs: 30538,
        feet: 25686,
        finger1: 28730,
        finger2: 30834,
        trinket1: 38287,
        trinket2: 28034,
        ranged: 28504,
      },
    },
    {
      name: 'Pinsir',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_FURY,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 32461,
        neck: 30022,
        shoulders: 29023,
        back: 24259,
        chest: 29019,
        shirt: null,
        tabard: 22999,
        wrists: 30057,
        mainhand: null,
        offhand: 29124,
        hands: 28776,
        waist: 27985,
        legs: 30538,
        feet: 25686,
        finger1: 28757,
        finger2: 28730,
        trinket1: 29383,
        trinket2: 28034,
        ranged: 28659,
      },
    },
    {

      name: 'Cordulla',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.DRUID,
      spec: specs.DRUID_BAL,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29086,
        neck: 28609,
        shoulders: 29089,
        back: 28765,
        chest: 29087,
        shirt: null,
        tabard: null,
        wrists: 22495,
        mainhand: null,
        offhand: 29274,
        hands: 28521,
        waist: 29984,
        legs: 22489,
        feet: 30092,
        finger1: 28790,
        finger2: 29290,
        trinket1: 23047,
        trinket2: 29376,
        ranged: 27886,
      },
    },
    {

      name: 'Enderstar',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.PALADIN,
      spec: specs.PALADIN_HOLY,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29061,
        neck: 35509,
        shoulders: 29064,
        back: 28765,
        chest: 31613,
        shirt: null,
        tabard: null,
        wrists: 30047,
        mainhand: null,
        offhand: 29458,
        hands: 30135,
        waist: 29965,
        legs: 30137,
        feet: 30027,
        finger1: 28790,
        finger2: 29290,
        trinket1: 38288,
        trinket2: 29376,
        ranged: 30063,
      },
    },
    {

      name: 'Murlochlair',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.PRIEST,
      spec: specs.PRIEST_HOLY,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29049,
        neck: 28822,
        shoulders: 21874,
        back: 28765,
        chest: 21875,
        shirt: null,
        tabard: 28788,
        wrists: 28511,
        mainhand: null,
        offhand: 29170,
        hands: 28508,
        waist: 21873,
        legs: 28742,
        feet: 28663,
        finger1: 28661,
        finger2: 29290,
        trinket1: 28590,
        trinket2: 29376,
        ranged: 28588,
      },
    },
    {

      name: 'Euda',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.SHAMAN,
      spec: specs.SHAMAN_RESTO,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29028,
        neck: 28609,
        shoulders: 28631,
        back: 29354,
        chest: 29029,
        shirt: null,
        tabard: 28788,
        wrists: 28503,
        mainhand: null,
        offhand: 29267,
        hands: 28520,
        waist: 28751,
        legs: 30030,
        feet: 28752,
        finger1: 28790,
        finger2: 28763,
        trinket1: 38288,
        trinket2: 29376,
        ranged: 28523,
      },
    },
    {

      name: 'Krashovrride',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.SHAMAN,
      spec: specs.SHAMAN_ELE,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 29028,
        neck: 28609,
        shoulders: 30168,
        back: 28765,
        chest: 29522,
        shirt: null,
        tabard: 5976,
        wrists: 28502,
        mainhand: null,
        offhand: 29523,
        hands: 28520,
        waist: 29524,
        legs: 28751,
        feet: 25792,
        finger1: 28763,
        finger2: 29290,
        trinket1: 29376,
        trinket2: 28823,
        ranged: null,
      },
    },
    {

      name: 'Tavlox',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.UNKNOWN,
      class: classes.SHAMAN,
      spec: specs.SHAMAN_ELE,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
      equipment: {
        head: 28803,
        neck: 28609,
        shoulders: 28631,
        back: 29354,
        chest: 28735,
        shirt: null,
        tabard: 28788,
        wrists: 28503,
        mainhand: null,
        offhand: 27772,
        hands: 28520,
        waist: 28655,
        legs: 28751,
        feet: 28752,
        finger1: 28763,
        finger2: 29169,
        trinket1: 28190,
        trinket2: 28590,
        ranged: 28523,
      },
    }
  ],
};

export default data;
