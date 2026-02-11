
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-indigo-950">EduVanguard</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Premium online tutoring for students who aspire for more. We combine high-level STEM instruction with deep character mentorship to prepare students for a meaningful life.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'LinkedIn', 'YouTube', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Our Subjects</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-600">Mathematics Mastery</a></li>
              <li><a href="#" className="hover:text-indigo-600">Advanced Physics</a></li>
              <li><a href="#" className="hover:text-indigo-600">Chemistry Solutions</a></li>
              <li><a href="#" className="hover:text-indigo-600">Coding & Logic</a></li>
              <li><a href="#" className="hover:text-indigo-600">Holiday Coaching</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Mentorship</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-600">Counseling Sessions</a></li>
              <li><a href="#" className="hover:text-indigo-600">Character Building</a></li>
              <li><a href="#" className="hover:text-indigo-600">Parent Consultations</a></li>
              <li><a href="#" className="hover:text-indigo-600">Success Stories</a></li>
              <li><a href="#" className="hover:text-indigo-600">Values & Ethics</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2024 EduVanguard Tutoring & Mentorship. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
