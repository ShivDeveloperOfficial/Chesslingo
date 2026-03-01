import React from 'react';
import { Flame, Gem, Trophy, Star } from 'lucide-react';
import { UserProgress } from '../types';

export const UserStats = ({ progress }: { progress: UserProgress }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 bg-white border-b-2 border-gray-100 sticky top-0 z-40">
      <div className="flex items-center gap-1.5 sm:gap-2 text-duo-orange font-bold text-base sm:text-lg">
        <Flame size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
        <span>{progress.streak}</span>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2 text-duo-blue font-bold text-base sm:text-lg">
        <Gem size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
        <span>{progress.gems}</span>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2 text-duo-purple font-bold text-base sm:text-lg">
        <Trophy size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
        <span>{progress.xp} XP</span>
      </div>
    </div>
  );
};
