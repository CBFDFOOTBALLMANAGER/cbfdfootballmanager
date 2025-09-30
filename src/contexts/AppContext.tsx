"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Team, Player, Competition, Match, User } from '@/types';

interface AppState {
  teams: Team[];
  players: Player[];
  competitions: Competition[];
  matches: Match[];
  currentUser: User | null;
  isLoading: boolean;
}

type AppAction =
  | { type: 'SET_TEAMS'; payload: Team[] }
  | { type: 'ADD_TEAM'; payload: Team }
  | { type: 'UPDATE_TEAM'; payload: Team }
  | { type: 'SET_PLAYERS'; payload: Player[] }
  | { type: 'ADD_PLAYER'; payload: Player }
  | { type: 'UPDATE_PLAYER'; payload: Player }
  | { type: 'SET_COMPETITIONS'; payload: Competition[] }
  | { type: 'ADD_COMPETITION'; payload: Competition }
  | { type: 'UPDATE_COMPETITION'; payload: Competition }
  | { type: 'SET_MATCHES'; payload: Match[] }
  | { type: 'ADD_MATCH'; payload: Match }
  | { type: 'UPDATE_MATCH'; payload: Match }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  teams: [],
  players: [],
  competitions: [],
  matches: [],
  currentUser: null,
  isLoading: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_TEAMS':
      return { ...state, teams: action.payload };
    case 'ADD_TEAM':
      return { ...state, teams: [...state.teams, action.payload] };
    case 'UPDATE_TEAM':
      return {
        ...state,
        teams: state.teams.map(team =>
          team.id === action.payload.id ? action.payload : team
        ),
      };
    case 'SET_PLAYERS':
      return { ...state, players: action.payload };
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.payload] };
    case 'UPDATE_PLAYER':
      return {
        ...state,
        players: state.players.map(player =>
          player.id === action.payload.id ? action.payload : player
        ),
      };
    case 'SET_COMPETITIONS':
      return { ...state, competitions: action.payload };
    case 'ADD_COMPETITION':
      return { ...state, competitions: [...state.competitions, action.payload] };
    case 'UPDATE_COMPETITION':
      return {
        ...state,
        competitions: state.competitions.map(comp =>
          comp.id === action.payload.id ? action.payload : comp
        ),
      };
    case 'SET_MATCHES':
      return { ...state, matches: action.payload };
    case 'ADD_MATCH':
      return { ...state, matches: [...state.matches, action.payload] };
    case 'UPDATE_MATCH':
      return {
        ...state,
        matches: state.matches.map(match =>
          match.id === action.payload.id ? action.payload : match
        ),
      };
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}