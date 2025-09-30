"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Team } from '@/types';
import { Plus, X } from 'lucide-react';

interface CreateTeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (teamData: Partial<Team>) => void;
  editingTeam?: Team | null;
}

export function CreateTeamModal({ open, onOpenChange, onSubmit, editingTeam }: CreateTeamModalProps) {
  const [name, setName] = useState(editingTeam?.name || '');
  const [strength, setStrength] = useState(editingTeam?.strength || 50);
  const [isCustom] = useState(editingTeam?.isCustom ?? true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      strength,
      isCustom,
      stats: {
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        cleanSheets: 0,
      },
      players: [],
      competitionIds: [],
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {editingTeam ? 'Edit Team' : 'Create New Team'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Team Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter team name"
              required
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="strength">Team Strength: {strength}</Label>
            <Slider
              id="strength"
              min={1}
              max={100}
              step={1}
              value={[strength]}
              onValueChange={([value]) => setStrength(value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Weak</span>
              <span>Strong</span>
            </div>
          </div>

          {isCustom && (
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600">
                This will be created as a custom team. You can add players later.
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" />
              {editingTeam ? 'Update Team' : 'Create Team'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}