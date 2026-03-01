import React from 'react';
import { motion } from 'motion/react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted, onLogin }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full flex flex-col items-center gap-8"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Placeholder for a mascot/logo */}
          <div className="absolute inset-0 bg-duo-green rounded-full flex items-center justify-center text-white text-6xl md:text-8xl font-bold shadow-xl">
            ♞
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -right-4 bg-white border-2 border-gray-200 rounded-2xl px-4 py-2 shadow-lg"
          >
            <span className="text-duo-green font-bold">Let's play!</span>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-duo-green tracking-tight">
            ChessLingo
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-md mx-auto">
            The free, fun, and effective way to learn chess!
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={onGetStarted}
            className="w-full py-4 bg-duo-green text-white rounded-2xl font-display font-bold text-xl uppercase tracking-wider shadow-[0_5px_0_#46a302] hover:bg-duo-green-dark active:translate-y-1 active:shadow-none transition-all"
          >
            Get Started
          </button>
          <button
            onClick={onLogin}
            className="w-full py-4 bg-white text-duo-blue border-2 border-gray-200 rounded-2xl font-display font-bold text-xl uppercase tracking-wider shadow-[0_5px_0_#e5e5e5] hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all"
          >
            I already have an account
          </button>
        </div>
      </motion.div>

      <footer className="mt-12 text-gray-400 font-medium uppercase tracking-widest text-sm">
        Master the game of kings
      </footer>
    </div>
  );
};
