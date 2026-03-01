import React from 'react';
import { motion } from 'motion/react';
import { Check, Lock, Star, LucideIcon, Grid, ChevronUp, Trophy, Zap, Square, Crown } from 'lucide-react';
import { Lesson } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Grid,
  ChevronUp,
  Trophy,
  Zap,
  Square,
  Crown
};

interface LessonNodeProps {
  lesson: Lesson;
  index: number;
  onSelect: (lesson: Lesson) => void;
}

export const LessonNode: React.FC<LessonNodeProps> = ({ lesson, index, onSelect }) => {
  const Icon = iconMap[lesson.icon] || Star;
  
  // Zig-zag pattern
  const offset = Math.sin(index * 0.8) * 60;

  return (
    <div 
      className="lesson-node my-8"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => lesson.status !== 'locked' && onSelect(lesson)}
        className={`
          lesson-button relative
          ${lesson.status === 'locked' ? 'bg-[#e5e5e5] text-[#afafaf]' : `bg-${lesson.color} text-white`}
        `}
        style={{
          backgroundColor: lesson.status === 'locked' ? '#e5e5e5' : undefined,
          boxShadow: lesson.status === 'locked' 
            ? '0 8px 0 #afafaf' 
            : `0 8px 0 var(--color-${lesson.color}-dark)`
        }}
      >
        {lesson.status === 'completed' ? (
          <Check size={32} strokeWidth={4} />
        ) : lesson.status === 'locked' ? (
          <Lock size={32} strokeWidth={3} />
        ) : (
          <Icon size={32} strokeWidth={3} />
        )}
        
        {lesson.status === 'available' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 bg-white border-2 border-gray-200 rounded-xl px-4 py-2 shadow-sm whitespace-nowrap"
          >
            <span className="font-display font-bold text-duo-green uppercase tracking-wide text-sm">Start</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-gray-200 rotate-45" />
          </motion.div>
        )}
      </motion.button>
      
      <div className="mt-4 text-center">
        <h3 className="font-display font-bold text-lg text-[#4b4b4b]">{lesson.title}</h3>
      </div>
    </div>
  );
};
