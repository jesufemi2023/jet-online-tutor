
import React, { useState } from 'react';
import { getGuidanceRecommendation } from '../services/geminiService';
import { Subject, Grade } from '../types';

const AIConsultant: React.FC = () => {
  const [subject, setSubject] = useState<Subject>(Subject.Math);
  const [grade, setGrade] = useState<Grade>(Grade.Grade10);
  const [challenge, setChallenge] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) return;
    
    setLoading(true);
    try {
      const res = await getGuidanceRecommendation(subject, challenge, grade);
      setRecommendation(res || 'I am sorry, I could not generate a recommendation at this time.');
    } catch (err) {
      console.error(err);
      setRecommendation('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="counseling" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">AI Guidance Assistant</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Start Your Child's <br /> Mentorship Journey.</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Tell us about your child's specific academic hurdles. Our AI Counselor uses our core values to provide an immediate personalized guidance strategy before you even book a tutor.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Confidential & Supportive</h4>
                  <p className="text-slate-400 text-sm">We listen to the behavioral and academic challenges together.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Character-Focused</h4>
                  <p className="text-slate-400 text-sm">Recommendations include habit building and discipline tips.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            {!recommendation ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <select 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value as Subject)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-emerald-400 transition-colors"
                    >
                      {Object.values(Subject).map(s => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Grade</label>
                    <select 
                      value={grade} 
                      onChange={(e) => setGrade(e.target.value as Grade)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-emerald-400 transition-colors"
                    >
                      {Object.values(Grade).map(g => <option key={g} value={g} className="bg-slate-900">{g}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Describe the Struggle</label>
                  <textarea 
                    placeholder="e.g., My son is struggling with Physics formulas and lacks the discipline to finish homework..."
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>
                <button 
                  disabled={loading}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                >
                  {loading ? 'Consulting Our Mentors...' : 'Get Immediate Guidance'}
                </button>
              </form>
            ) : (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-emerald-400">Counselor Recommendation</h4>
                  <button onClick={() => setRecommendation('')} className="text-sm text-slate-400 hover:text-white">Start Over</button>
                </div>
                <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {recommendation.split('\n').map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-sm">Ready to meet a mentor?</span>
                  <button className="text-emerald-400 font-bold hover:underline">Browse Tutors &rarr;</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
