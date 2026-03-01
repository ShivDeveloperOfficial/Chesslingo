import React from 'react';
import { Home, BookOpen, Trophy, ShoppingBag, User, Settings } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-colors ${active ? 'bg-[#ddf4ff] text-[#1cb0f6] border-2 border-[#84d8ff]' : 'hover:bg-gray-100 text-[#777]'}`}>
    <Icon size={28} strokeWidth={2.5} />
    <span className="font-display font-bold text-lg uppercase tracking-wide hidden lg:block">{label}</span>
  </div>
);

export const Sidebar = () => {
  return (
    <div className="w-20 lg:w-64 h-screen border-r-2 border-gray-200 flex flex-col p-4 fixed left-0 top-0 bg-white z-50">
      <div className="mb-8 px-4">
        <h1 className="text-3xl font-bold text-duo-green tracking-tight hidden lg:block">ChessLingo</h1>
        <div className="lg:hidden w-10 h-10 bg-duo-green rounded-lg flex items-center justify-center text-white font-bold">C</div>
      </div>
      
      <nav className="flex-1 flex flex-col gap-2">
        <SidebarItem icon={Home} label="Learn" active />
        <SidebarItem icon={BookOpen} label="Practice" />
        <SidebarItem icon={Trophy} label="Leaderboards" />
        <SidebarItem icon={ShoppingBag} label="Shop" />
        <SidebarItem icon={User} label="Profile" />
        <SidebarItem icon={Settings} label="More" />
      </nav>
    </div>
  );
};
