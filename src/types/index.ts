export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: string;
  number: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  appearances: number;
  averageRating: number;
  ratings: number[];
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  strength: number;
  isCustom: boolean;
  competitionIds: string[];
  players: Player[];
  stats: {
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    cleanSheets: number;
  };
}

export interface Match {
  id: string;
  competitionId: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  status: 'scheduled' | 'in-progress' | 'completed';
  date: Date;
  venue: string;
  events: MatchEvent[];
  stats: MatchStats;
}

export interface MatchEvent {
  type: 'goal' | 'yellow-card' | 'red-card' | 'substitution';
  minute: number;
  playerId: string;
  teamId: string;
  assistPlayerId?: string;
  subInPlayerId?: string;
  subOutPlayerId?: string;
}

export interface MatchStats {
  possession: { home: number; away: number };
  shots: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  fouls: { home: number; away: number };
  corners: { home: number; away: number };
  offsides: { home: number; away: number };
}

export interface Competition {
  id: string;
  name: string;
  type: 'league' | 'knockout' | 'group-knockout';
  teams: string[];
  matches: Match[];
  standings: Standing[];
  currentRound: number;
  season: string;
}

export interface Standing {
  teamId: string;
  position: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  favoriteTeams: string[];
  createdTeams: string[];
}