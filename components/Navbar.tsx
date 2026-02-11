
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">E</span>
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-indigo-950">EduVanguard</span>
          </div>
          
          <div className="flex items-center">
            <a 
              href="#register" 
              className="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 whitespace-nowrap"
            >
              Register Child
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
