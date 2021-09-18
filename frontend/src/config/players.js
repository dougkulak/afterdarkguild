import blue from '../teams/blue';
import emerald from '../teams/emerald';
import gold from '../teams/gold';
import fire from '../teams/fire';
import ruby from '../teams/ruby';
import rainbow from '../teams/rainbow';
import amethyst from '../teams/amethyst';
import {teams} from './config';

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
