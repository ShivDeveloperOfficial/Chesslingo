import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft } from 'lucide-react';

interface AuthScreenProps {
  mode: 'login' | 'signup';
  onBack: () => void;
  onSuccess: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ mode, onBack, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <header className="flex items-center justify-between mb-12">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600">
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => setIsLogin(!isLogin)}
          className="text-duo-blue font-bold uppercase tracking-widest text-sm hover:underline"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-[#4b4b4b] mb-8 text-center">
          {isLogin ? 'Log in' : 'Create your profile'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-gray-100 border-2 border-gray-200 rounded-2xl focus:border-duo-blue outline-none transition-colors font-medium"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-100 border-2 border-gray-200 rounded-2xl focus:border-duo-blue outline-none transition-colors font-medium"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-gray-100 border-2 border-gray-200 rounded-2xl focus:border-duo-blue outline-none transition-colors font-medium"
          />

          <button
            type="submit"
            className="w-full py-4 bg-duo-blue text-white rounded-2xl font-display font-bold text-xl uppercase tracking-wider shadow-[0_5px_0_#1899d6] hover:bg-duo-blue-dark active:translate-y-1 active:shadow-none transition-all mt-4"
          >
            {isLogin ? 'Log in' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 font-bold uppercase text-xs">Or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-colors">
            <span className="text-blue-600">f</span> Facebook
          </button>
          <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-colors">
            <span className="text-red-500">G</span> Google
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 font-medium leading-relaxed">
          By signing in to ChessLingo, you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
        </p>
      </motion.div>
    </div>
  );
};
