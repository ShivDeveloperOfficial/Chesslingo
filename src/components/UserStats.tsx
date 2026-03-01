import React from 'react';
import { Flame, Gem, Trophy, Star } from 'lucide-react';
import { UserProgress } from '../types';

export const UserStats = ({ progress }: { progress: UserProgress }) => {
  return (
    <div className="flex items-center gap-6 px-6 py-4 bg-white border-b-2 border-gray-100 sticky top-0 z-40">
      <div className="flex items-center gap-2 text-duo-orange font-bold text-lg">
        <Flame size={24} fill="currentColor" />
        <span>{progress.streak}</span>
      </div>
      <div className="flex items-center gap-2 text-duo-blue font-bold text-lg">
        <Gem size={24} fill="currentColor" />
        <span>{progress.gems}</span>
      </div>
      <div className="flex items-center gap-2 text-duo-purple font-bold text-lg">
        <Trophy size={24} fill="currentColor" />
        <span>{progress.xp} XP</span>
      </div>
    </div>
  );
};
