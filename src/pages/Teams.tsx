"use client";

import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Header } from '@/components/layout/Header';
import { TeamCard } from '@/components/teams/TeamCard';
import { CreateTeamModal } from '@/components/teams/CreateTeamModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { Team } from '@/types';

export default function Teams() {
  const { state, dispatch } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);

  const filteredTeams = state.teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTeam = (teamData: Partial<Team>) => {
    const newTeam: Team = {
      id: Date.now().toString(),
      ...teamData,
      players: [],
      competitionIds: [],
      stats: {
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        cleanSheets: 0,
      },
    } as Team;

    dispatch({ type: 'ADD_TEAM', payload: newTeam });
    setIsCreateModalOpen(false);
  };

  const handleEditTeam = (team: Team) => {
    setEditingTeam(team);
    setIsCreateModalOpen(true);
  };

  const handleUpdateTeam = (teamData: Partial<Team>) => {
    if (editingTeam) {
      const updatedTeam: Team = {
        ...editingTeam,
        ...teamData,
      };
      dispatch({ type: 'UPDATE_TEAM', payload: updatedTeam });
      setIsCreateModalOpen(false);
      setEditingTeam(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Teams Management</h1>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Team
            </Button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onEdit={handleEditTeam}
              />
            ))}
          </div>

          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No teams found</h3>
              <p className="text-gray-500">
                {searchTerm
                  ? 'Try adjusting your search terms'
                  : 'Create your first team to get started'}
              </p>
            </div>
          )}
        </div>
      </main>

      <CreateTeamModal
        open={isCreateModalOpen}
        onOpenChange={(open) => {
          setIsCreateModalOpen(open);
          if (!open) setEditingTeam(null);
        }}
        onSubmit={editingTeam ? handleUpdateTeam : handleCreateTeam}
        editingTeam={editingTeam}
      />
    </div>
  );
}