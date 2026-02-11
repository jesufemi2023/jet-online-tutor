
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-indigo-950">EduVanguard</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#subjects" className="hover:text-indigo-600 transition-colors">Subjects</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#counseling" className="hover:text-indigo-600 transition-colors">Mentorship</a>
            <a href="#tutors" className="hover:text-indigo-600 transition-colors">Find a Tutor</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600">Log In</button>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
              Register Student
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
