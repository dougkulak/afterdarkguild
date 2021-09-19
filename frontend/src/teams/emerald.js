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
  name: 'Emerald',
  type: 'Hardcore',
  schedule1: 'Tue/Thu/(Flex Mon)',
  schedule2: '8:00P-11:00P ST',
  leaders: ['Pinsir', 'Parasite'],
  recruitStatus: recruitStatuses.CLOSED,
  recruitNeeds: 'Holy Paladin',
  description: 'Loot Council',
  progression: ['Kara: 11/11', 'Gru+Mag: 2/2'],
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
      notes: 'Emerald Team Leader',
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
      notes: 'Emerald Team Leader',
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
      notes: 'Webmaster',
    },
  ],
};

export default data;
