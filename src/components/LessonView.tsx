import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { Lesson, LessonStep } from '../types';
import { GoogleGenAI } from '@google/genai';

interface LessonViewProps {
  lesson: Lesson;
  onClose: (completed: boolean) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const currentStep = lesson.content?.steps[currentStepIndex];

  useEffect(() => {
    if (currentStep?.fen) {
      setGame(new Chess(currentStep.fen));
    }
    setFeedback(null);
    setAiHint(null);
  }, [currentStepIndex]);

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (currentStep?.type !== 'interaction') return false;

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (move === null) return false;

      setGame(new Chess(game.fen()));

      if (targetSquare === currentStep.targetMove) {
        setFeedback('correct');
      } else {
        setFeedback('incorrect');
        // Reset after a delay
        setTimeout(() => {
          setGame(new Chess(currentStep.fen!));
          setFeedback(null);
        }, 1000);
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleNext = () => {
    if (currentStepIndex < (lesson.content?.steps.length || 0) - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      onClose(true);
    }
  };

  const getAiHint = async () => {
    setIsAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a friendly chess coach like the Duolingo owl. 
        The student is on a lesson titled "${lesson.title}".
        Current step: "${currentStep?.text}".
        Current board position (FEN): "${game.fen()}".
        Provide a very short, encouraging hint (max 20 words) to help them understand or solve this step.`,
      });
      setAiHint(response.text || "You've got this! Think about where the piece wants to go.");
    } catch (err) {
      console.error(err);
      setAiHint("Keep trying! Every master was once a beginner.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-white z-[100] flex flex-col"
    >
      {/* Header */}
      <div className="p-4 flex items-center gap-4 border-b-2 border-gray-100">
        <button onClick={() => onClose(false)} className="text-gray-400 hover:text-gray-600">
          <X size={32} />
        </button>
        <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-duo-green"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStepIndex + 1) / (lesson.content?.steps.length || 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 gap-12 overflow-y-auto">
        <div className="w-full max-w-[400px] aspect-square shadow-2xl rounded-lg overflow-hidden border-4 border-gray-200">
          {React.createElement(Chessboard as any, {
            position: game.fen(),
            onPieceDrop: onDrop,
            boardOrientation: "white"
          })}
        </div>

        <div className="flex-1 max-w-md flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#4b4b4b] leading-tight">
            {currentStep?.text}
          </h2>

          <AnimatePresence mode="wait">
            {aiHint && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#ddf4ff] border-2 border-[#84d8ff] p-4 rounded-2xl relative"
              >
                <div className="absolute -left-2 top-4 w-4 h-4 bg-[#ddf4ff] border-l-2 border-b-2 border-[#84d8ff] rotate-45" />
                <p className="text-[#1899d6] font-medium italic">"{aiHint}"</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4">
            <button 
              onClick={getAiHint}
              disabled={isAiLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Lightbulb size={20} className="text-duo-yellow" />
              {isAiLoading ? 'Thinking...' : 'Hint'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`p-6 border-t-2 ${feedback === 'correct' ? 'bg-[#d7ffb8] border-[#b8f28b]' : feedback === 'incorrect' ? 'bg-[#ffdfe0] border-[#ffc1c3]' : 'bg-white border-gray-100'}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {feedback === 'correct' && (
              <>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-duo-green">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-duo-green-dark">Excellent!</h4>
                </div>
              </>
            )}
            {feedback === 'incorrect' && (
              <>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-duo-red">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#ea2b2b]">Not quite...</h4>
                  <p className="text-[#ea2b2b]">Try another move!</p>
                </div>
              </>
            )}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentStep?.type === 'interaction' && feedback !== 'correct'}
            className={`
              px-10 py-3 rounded-xl font-display font-bold text-lg uppercase tracking-wider transition-all
              ${feedback === 'correct' ? 'bg-duo-green text-white hover:bg-duo-green-dark' : feedback === 'incorrect' ? 'bg-duo-red text-white hover:bg-[#ea2b2b]' : 'bg-duo-green text-white hover:bg-duo-green-dark'}
              disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
            `}
            style={{
              boxShadow: feedback === 'correct' ? '0 5px 0 #46a302' : feedback === 'incorrect' ? '0 5px 0 #ea2b2b' : '0 5px 0 #46a302'
            }}
          >
            {currentStepIndex === (lesson.content?.steps.length || 0) - 1 ? 'Finish' : 'Continue'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
