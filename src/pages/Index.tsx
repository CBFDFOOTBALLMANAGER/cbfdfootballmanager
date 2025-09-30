"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Calendar, BarChart3 } from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: Trophy,
      title: 'Multiple Competitions',
      description: 'Manage League One, League Two, Copa CBFD, Supercopa, Libertadores, and Sula competitions',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Create custom teams, manage player rosters, and adjust team strengths',
    },
    {
      icon: Calendar,
      title: 'Match Tracking',
      description: 'Track goals, assists, cards, substitutions, and detailed match statistics',
    },
    {
      icon: BarChart3,
      title: 'Advanced Statistics',
      description: 'Sofascore-style dashboards with real-time stats and historical data',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            CBFD Tournament Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate web application for managing your CBFD football tournaments with professional-grade statistics and real-time updates.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link to="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/teams">View Teams</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Browser Compatibility */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fully Cross-Browser Compatible
          </h2>
          <p className="text-gray-600 mb-6">
            Works seamlessly on Safari, Chrome, Edge, Android, and PC browsers
          </p>
          <div className="flex justify-center space-x-8">
            {['Chrome', 'Safari', 'Edge', 'Android', 'PC'].map((browser) => (
              <div key={browser} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-medium">✓</span>
                </div>
                <span className="text-sm text-gray-600">{browser}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}