"use client";

import React from 'react';
import { useMockData } from '@/hooks/useMockData';

export function AppLoader({ children }: { children: React.ReactNode }) {
  useMockData();
  
  return <>{children}</>;
}