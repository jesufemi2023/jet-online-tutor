
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import TutorList from './components/TutorList.tsx';
import AIConsultant from './components/AIConsultant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Value Prop Section with Images */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/tutor-mentorship/800/800" 
                    alt="Online Tutoring Session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-emerald-500 text-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                  <p className="font-serif italic text-xl mb-4">"The focus on discipline changed my son's perspective on school. He's now a self-starter."</p>
                  <p className="font-bold text-sm">— Mrs. Adebayo, Grade 11 Parent</p>
                </div>
              </div>
              <div>
                <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Reinforce, Don't Replace</h2>
                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  Working hand-in-hand <br /> with school curriculum.
                </h3>
                <div className="space-y-6 text-slate-600 text-lg">
                  <p>
                    We believe students perform best when their additional support matches their classroom progress. We focus on:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full text-xs mt-1">✓</span>
                      <span>Explaining classroom concepts so they truly stick.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full text-xs mt-1">✓</span>
                      <span>Expert guidance on difficult assignments and projects.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full text-xs mt-1">✓</span>
                      <span>Holiday coaching to bridge learning gaps for the next term.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-slate-900 mt-8">
                    Our goal isn't to teach something new; it's to ensure what is taught in school is mastered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <AIConsultant />

        <TutorList />

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-indigo-600 rounded-[3rem] p-16 shadow-2xl shadow-indigo-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <h2 className="text-white text-4xl md:text-5xl font-serif font-bold mb-8 relative z-10">
              Ready to invest in your child's <br className="hidden md:block" /> character and academics?
            </h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of parents who have transformed their children's educational journey through discipline, mentorship, and STEM excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl">
                Register Your Student
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-indigo-700 text-white border border-indigo-500 rounded-full font-bold text-xl hover:bg-indigo-800 transition-all">
                Speak to a Consultant
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
