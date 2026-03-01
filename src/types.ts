export type LessonType = 'tutorial' | 'puzzle' | 'quiz';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  icon: string;
  color: string;
  status: 'locked' | 'available' | 'completed';
  content?: LessonContent;
}

export interface LessonContent {
  steps: LessonStep[];
}

export interface LessonStep {
  id: string;
  type: 'explanation' | 'interaction' | 'multiple-choice';
  text: string;
  fen?: string; // For chess board state
  targetMove?: string; // For interaction steps
  options?: string[]; // For multiple choice
  correctOption?: number;
  explanation?: string;
}

export interface UserProgress {
  xp: number;
  streak: number;
  gems: number;
  completedLessons: string[];
}
