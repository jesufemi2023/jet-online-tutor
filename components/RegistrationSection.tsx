
import React, { useState } from 'react';
import { Subject, Grade } from '../types.ts';

const RegistrationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 p-8 md:p-12 rounded-[2rem] text-center">
          <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Registration Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for trusting EduVanguard. Our academic consultant will review your child's needs and contact you via phone within 4 hours to introduce your assigned tutor.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-emerald-600 font-bold hover:underline">Register another student</button>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3">Begin Mastery</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Student Enrollment Form</h3>
          <p className="text-slate-500 text-sm md:text-base">We'll assign the perfect tutor from our registered pool based on these details.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Parent's Full Name</label>
              <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Phone Number (WhatsApp preferred)</label>
              <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="e.g., +234..." />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Student's Grade</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                {Object.values(Grade).map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Primary Subject Focus</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                {Object.values(Subject).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Special Academic Challenges or Goals</label>
            <textarea required rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="What specific areas should we focus on?"></textarea>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]">
            Submit & Assign My Tutor
          </button>
          
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Guaranteed Confidentiality & 100% Matching Accuracy
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationSection;
