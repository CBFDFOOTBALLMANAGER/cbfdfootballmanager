import { Team, Player, Competition } from '@/types';

export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Flamengo',
    strength: 85,
    isCustom: false,
    competitionIds: ['league-one', 'copa', 'libertadores'],
    players: [],
    stats: {
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      cleanSheets: 0,
    },
  },
  {
    id: '2',
    name: 'River Plate',
    strength: 82,
    isCustom: false,
    competitionIds: ['libertadores'],
    players: [],
    stats: {
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      cleanSheets: 0,
    },
  },
  {
    id: '3',
    name: 'Boca Juniors',
    strength: 80,
    isCustom: false,
    competitionIds: ['libertadores'],
    players: [],
    stats: {
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      cleanSheets: 0,
    },
  },
];

export const mockCompetitions: Competition[] = [
  {
    id: 'league-one',
    name: 'CBFD League One',
    type: 'league',
    teams: ['1'],
    matches: [],
    standings: [],
    currentRound: 1,
    season: '2024',
  },
  {
    id: 'libertadores',
    name: 'Libertadores CBFD',
    type: 'group-knockout',
    teams: ['1', '2', '3'],
    matches: [],
    standings: [],
    currentRound: 1,
    season: '2024',
  },
];