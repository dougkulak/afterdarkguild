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
  name: 'Emerald',
  type: 'Hardcore',
  schedule1: 'Tue/Thu/(Flex Mon)',
  schedule2: '8:00P-11:00P ST',
  leaders: ['Pinsir', 'Parasite'],
  recruitStatus: recruitStatuses.CLOSED,
  recruitNeeds: 'Holy Paladin',
  description: 'Loot Council',
  progression: ['Kara: 11/11', 'Gru+Mag: 2/2'],
  announcements: [
    {
      type: announcementTypes.INFO,
      title: 'This is a title',
      content: 'This is a team-wide announcement.',
      expires: '2021-09-19',
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
        expected to have a viable offpsec set of gear, enchanted and gemmed. For
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
          nextScheduledRun: 'Tuesday 9/19 8:00P ST',
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
          nextScheduledRun: 'Tuesday 9/19 8:00P ST',
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
        bestAvgExecution: 96,
        bestAvgSpeed: 80,
        bestTime: '7:44',
        executionLogLink: 'https://link/to/log/with/best/execution',
        speedLogLink: 'https://link/to/log/with/best/speed',
        timeLogLink: 'https://link/to/log/with/best/time',
        recordLastBroken: '2021-09-01',
      },
      strategy: <span>We just go in and kick Gruul's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Tuesday 9/19 9:00P ST',
          players: null,
        },
      ],
    },
    {
      encounter: encounters.MAGTHERIDON,
      progress: '1/1',
      strategy: <span>We just go in and kick Magtheridon's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Tuesday 9/19 9:00P ST',
          players: null,
        },
      ],
    },
    {
      encounter: encounters.SSC,
      progress: '4/6',
      strategy: <span>We just go in and kick Lady Vashj's butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Tuesday 9/19 9:00P ST',
          players: null,
        },
      ],
    },
    {
      encounter: encounters.TK,
      progress: '0/4',
      strategy: <span>We just go in and kick Kael'thas' butt.</span>,
      teams: [
        {
          name: 'Emerald Team',
          nextScheduledRun: 'Tuesday 9/19 9:00P ST',
          players: null,
        },
      ],
    },
  ],
  players: [
    {
      name: 'Pinsir',
      team: teams.EMERALD,
      rank: ranks.OFFICER,
      race: races.HUMAN,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_FURY,
      profession1: professions.LEATHERWORKING,
      profession1skill: 375,
      profession2: professions.ENCHANTING,
      profession2skill: 375,
      description: 'Emerald Team Leader',
    },
    {
      name: 'Parasite',
      team: teams.EMERALD,
      rank: ranks.RAIDLEADER,
      race: races.HUMAN,
      class: classes.ROGUE,
      spec: specs.ROGUE_COMBAT,
      profession1: professions.ENGINEERING,
      profession1skill: 375,
      profession2: professions.ENCHANTING,
      profession2skill: 375,
      description: 'Emerald Team Leader',
    },
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
      lootReceived: [
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
    },
    {
      name: 'Furrygsis',
      team: teams.EMERALD,
      rank: ranks.RAIDLEADER,
      race: races.NIGHTELF,
      class: classes.DRUID,
      spec: specs.DRUID_FERALTANK,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Tonize',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.NIGHTELF,
      class: classes.PALADIN,
      spec: specs.PALADIN_RET,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Skyguy',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.NIGHTELF,
      class: classes.PALADIN,
      spec: specs.PALADIN_PROT,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Cordulla',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.NIGHTELF,
      class: classes.DRUID,
      spec: specs.DRUID_BAL,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Dreys',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.GNOME,
      class: classes.WARLOCK,
      spec: specs.WARLOCK_AFF,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Eztokill',
      team: teams.EMERALD,
      rank: ranks.RAIDLEADER,
      race: races.NIGHTELF,
      class: classes.WARRIOR,
      spec: specs.WARRIOR_PROT,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
    {
      name: 'Tavlox',
      team: teams.EMERALD,
      rank: ranks.RAIDER,
      race: races.DRAENEI,
      class: classes.SHAMAN,
      spec: specs.SHAMAN_ELE,
      profession1: null,
      profession1skill: null,
      profession2: null,
      profession2skill: null,
    },
  ],
};

export default data;
