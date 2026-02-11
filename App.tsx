
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import TutorList from './components/TutorList.tsx';
import AIConsultant from './components/AIConsultant.tsx';
import RegistrationSection from './components/RegistrationSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        {/* Value Prop Mobile Stack */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-10">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl md:order-2">
                <img 
                  src="https://picsum.photos/seed/tutor-mentorship/800/600" 
                  alt="Online Tutoring Session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-3">Reinforce & Excel</h2>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  Hand-in-hand with <br /> school curriculum.
                </h3>
                <div className="space-y-4 text-slate-600 text-sm md:text-base">
                  <p>
                    We match your child with a tutor who specializes in their specific school syllabus, ensuring every lesson supports classroom goals.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start space-x-3">
                      <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full text-[10px]">✓</span>
                      <span>Targeted homework and assignment mastery.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full text-[10px]">✓</span>
                      <span>Discipline and character building sessions.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full text-[10px]">✓</span>
                      <span>Weekly progress reports for parents.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIConsultant />

        <RegistrationSection />

        <TutorList />

        {/* Mobile-Friendly Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-indigo-950 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
            
            <h2 className="text-white text-3xl md:text-5xl font-serif font-bold mb-6 relative z-10">
              Transform Your Child's Future Today.
            </h2>
            <p className="text-indigo-200 text-sm md:text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
              Don't wait for exams. Build the foundation now through discipline and professional STEM expertise.
            </p>
            <a href="#register" className="inline-block px-10 py-5 bg-white text-indigo-950 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95 relative z-10">
              Start Enrollment Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
