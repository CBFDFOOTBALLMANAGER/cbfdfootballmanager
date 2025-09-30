"use client";

import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { mockTeams, mockCompetitions } from '@/data/mockData';

export function useMockData() {
  const { dispatch } = useApp();

  useEffect(() => {
    // Load mock teams
    dispatch({ type: 'SET_TEAMS', payload: mockTeams });
    
    // Load mock competitions
    dispatch({ type: 'SET_COMPETITIONS', payload: mockCompetitions });
    
    // Set loading to false
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [dispatch]);
}