
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-44 md:pb-32 overflow-hidden px-4">
      {/* Decorative background for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-400 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] md:text-sm font-bold mb-6 animate-fade-in uppercase tracking-wider">
          Professional Maths & Science Mentorship
        </div>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 px-2">
          Master School Lessons with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 italic">Elite Personal Tutors.</span>
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-xl text-slate-600 mb-10 leading-relaxed px-4">
          Register your child today. We assign our hand-picked, registered experts to bridge school learning gaps and build stellar character.
        </p>
        
        <div className="flex flex-col gap-4 max-w-sm mx-auto px-4">
          <a href="#register" className="w-full px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]">
            Start Enrollment
          </a>
          <p className="text-xs text-slate-400 font-medium">90% of students improve by 2 letter grades in 1 term</p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-10">
          <div className="p-2">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">1-on-1</div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Personalized Focus</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">Verified</div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Registered Tutors</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">STEM</div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Specialized Lab</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">Counseling</div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">For Every Student</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
