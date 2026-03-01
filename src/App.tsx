import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { UserStats } from './components/UserStats';
import { LessonNode } from './components/LessonNode';
import { LessonView } from './components/LessonView';
import { LESSONS } from './data/lessons';
import { Lesson, UserProgress } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Home, BookOpen, ShoppingBag, User, Settings } from 'lucide-react';

export default function App() {
  const [lessons, setLessons] = useState<Lesson[]>(LESSONS);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [progress, setProgress] = useState<UserProgress>({
    xp: 0,
    streak: 5,
    gems: 120,
    completedLessons: []
  });

  const handleLessonComplete = (completed: boolean) => {
    if (completed && activeLesson) {
      // Update progress
      setProgress(prev => ({
        ...prev,
        xp: prev.xp + 10,
        completedLessons: [...prev.completedLessons, activeLesson.id]
      }));

      // Unlock next lesson
      setLessons(prev => {
        const index = prev.findIndex(l => l.id === activeLesson.id);
        const next = [...prev];
        next[index] = { ...next[index], status: 'completed' };
        if (index + 1 < next.length) {
          next[index + 1] = { ...next[index + 1], status: 'available' };
        }
        return next;
      });
    }
    setActiveLesson(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <main className="flex-1 md:ml-20 lg:ml-64 relative pb-24 md:pb-0">
        <UserStats progress={progress} />
        
        <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 sm:px-6 flex flex-col items-center">
          <div className="w-full mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b4b4b] mb-2">Unit 1: The Basics</h2>
            <p className="text-gray-500 text-base md:text-lg font-medium italic px-4">Learn the fundamentals of the game of kings.</p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            {lessons.map((lesson, index) => (
              <LessonNode 
                key={lesson.id} 
                lesson={lesson} 
                index={index}
                onSelect={setActiveLesson}
              />
            ))}
          </div>

          <div className="mt-20 p-8 border-2 border-dashed border-gray-200 rounded-3xl text-center w-full">
            <p className="text-gray-400 font-medium italic">More units coming soon...</p>
          </div>
        </div>

        <AnimatePresence>
          {activeLesson && (
            <LessonView 
              lesson={activeLesson} 
              onClose={handleLessonComplete} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Right sidebar (Desktop only) */}
      <aside className="hidden xl:block w-80 p-8 border-l-2 border-gray-100 sticky top-0 h-screen overflow-y-auto">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-[#4b4b4b] mb-4">Daily Quests</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-duo-yellow rounded-lg flex items-center justify-center text-white">
                <Trophy size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#4b4b4b]">Earn 50 XP</p>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-duo-yellow" style={{ width: `${(progress.xp / 50) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ddf4ff] border-2 border-[#84d8ff] rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-[#1899d6] mb-2">Unlock Super Chess!</h3>
          <p className="text-[#1899d6] text-sm mb-4">Get unlimited hints and practice with AI grandmasters.</p>
          <button className="w-full py-3 bg-[#1cb0f6] text-white rounded-xl font-bold uppercase tracking-wide shadow-[0_4px_0_#1899d6] active:translate-y-1 active:shadow-none transition-all">
            Try for free
          </button>
        </div>

        <div className="border-2 border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#4b4b4b] mb-4">Chess Mastery</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#ce82ff] rounded-full flex items-center justify-center text-white">
              <Trophy size={24} />
            </div>
            <div>
              <p className="font-bold text-[#4b4b4b]">Bronze League</p>
              <p className="text-xs text-gray-500 font-bold uppercase">Top 10 this week</p>
            </div>
          </div>
          <button className="w-full py-2 text-[#1cb0f6] font-bold uppercase text-sm tracking-widest hover:bg-[#ddf4ff] rounded-xl transition-colors">
            View Leaderboard
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <button className="text-[#1cb0f6]"><Home size={28} strokeWidth={2.5} /></button>
        <button className="text-gray-400"><BookOpen size={28} strokeWidth={2.5} /></button>
        <button className="text-gray-400"><Trophy size={28} strokeWidth={2.5} /></button>
        <button className="text-gray-400"><ShoppingBag size={28} strokeWidth={2.5} /></button>
        <button className="text-gray-400"><User size={28} strokeWidth={2.5} /></button>
      </nav>
    </div>
  );
}
