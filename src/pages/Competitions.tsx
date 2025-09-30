"use client";

import React from 'react';
import { Header } from '@/components/layout/Header';

export default function Competitions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Competitions</h1>
          <div className="text-center text-gray-500 py-12">
            <p>Competitions management coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}