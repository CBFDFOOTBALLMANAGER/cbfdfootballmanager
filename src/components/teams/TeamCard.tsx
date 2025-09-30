"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Team } from '@/types';
import { Users, Star, Edit } from 'lucide-react';

interface TeamCardProps {
  team: Team;
  onEdit: (team: Team) => void;
}

export function TeamCard({ team, onEdit }: TeamCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{team.name}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(team)}
          className="h-8 w-8"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {team.players.length} players
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">
              Strength: {team.strength}
            </span>
          </div>
        </div>
        
        {team.isCustom && (
          <div className="mt-3 p-2 bg-blue-50 rounded-md">
            <span className="text-xs text-blue-600 font-medium">
              Custom Team
            </span>
          </div>
        )}

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="text-center p-2 bg-green-50 rounded">
            <div className="font-semibold text-green-600">{team.stats.wins}</div>
            <div className="text-gray-500">Wins</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded">
            <div className="font-semibold text-gray-600">{team.stats.draws}</div>
            <div className="text-gray-500">Draws</div>
          </div>
          <div className="text-center p-2 bg-red-50 rounded">
            <div className="font-semibold text-red-600">{team.stats.losses}</div>
            <div className="text-gray-500">Losses</div>
          </div>
          <div className="text-center p-2 bg-blue-50 rounded">
            <div className="font-semibold text-blue-600">{team.stats.cleanSheets}</div>
            <div className="text-gray-500">Clean Sheets</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}