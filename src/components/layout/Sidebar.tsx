"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  Trophy,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Plus
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Competitions', href: '/competitions', icon: Trophy },
  { name: 'Teams', href: '/teams', icon: Users },
  { name: 'Matches', href: '/matches', icon: Calendar },
  { name: 'Statistics', href: '/stats', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">CBFD Manager</h2>
        </div>
        
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            New Team
          </Button>
        </div>
      </div>
    </div>
  );
}

function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}