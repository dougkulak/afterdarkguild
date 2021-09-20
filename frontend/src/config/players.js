import blue from '../teams/blue';
import emerald from '../teams/emerald';
import gold from '../teams/gold';
import fire from '../teams/fire';
import ruby from '../teams/ruby';
import rainbow from '../teams/rainbow';
import amethyst from '../teams/amethyst';
import {classes, professions, races, ranks, specs, teams} from './config';

export const players = [
  ...blue.players,
  ...emerald.players,
  ...gold.players,
  ...fire.players,
  ...ruby.players,
  ...rainbow.players,
  ...amethyst.players,
];

export const getPlayerDataByName = (name) => {
  return players.find((x) => x.name === name);
};

export const getRosterForTeam = (team) => {
  if (team === teams.ALL) return players;
  return players.filter((x) => x.team === team);
};

export const unknownPlayer = {
  name: 'Unknown',
  team: teams.ALL,
  rank: ranks.SOCIAL,
  race: races.HUMAN,
  class: classes.WARRIOR,
  spec: specs.WARRIOR_FURY,
  profession1: professions.SKINNING,
  profession1skill: 0,
  profession2: professions.MINING,
  profession2skill: 0,
  notes: 'Player Not Found',
};
