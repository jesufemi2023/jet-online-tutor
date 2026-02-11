
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Specialized STEM Tutoring for Grade 7-12
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
          Empowering Students through <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Excellence and Character.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          We bridge the gap between school lessons and true mastery. Expert online tutoring combined with academic counseling to build responsible, disciplined, and high-achieving individuals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1">
            Book a Free Consultation
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            Explore Tutors
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 pt-12">
          <div>
            <div className="text-3xl font-bold text-slate-900">500+</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Expert Tutors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">15k+</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Students Help</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">98%</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Grade Improvement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">24/7</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
