
import React, { useState } from 'react';
import TutorCard from './TutorCard';
import { Tutor, Subject } from '../types';

const mockTutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialties: [Subject.Physics, Subject.Math],
    bio: 'Former university professor specializing in making complex physics intuitive. Passionate about helping students build academic discipline and deep understanding.',
    experience: 12,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/sarah/600/600',
    availability: 'Today, 4:00 PM',
    approach: 'Conceptual & Rigorous'
  },
  {
    id: '2',
    name: 'James Olu',
    specialties: [Subject.Coding, Subject.Math],
    bio: 'Software engineer by day, mentor by night. I focus on logic, problem-solving, and building impactful digital solutions. Dedicated to instilling a hard-work ethic.',
    experience: 8,
    rating: 5.0,
    imageUrl: 'https://picsum.photos/seed/james/600/600',
    availability: 'Tomorrow, 10:00 AM',
    approach: 'Project-Based'
  },
  {
    id: '3',
    name: 'Mrs. Elena Rodriguez',
    specialties: [Subject.Chemistry],
    bio: 'Specialist in Grade 11-12 Chemistry. I help students conquer the periodic table while teaching the values of responsibility and meticulousness.',
    experience: 15,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/elena/600/600',
    availability: 'Wednesday, 3:00 PM',
    approach: 'Patient & Detailed'
  }
];

const TutorList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Subject | 'All'>('All');

  const filteredTutors = activeTab === 'All' 
    ? mockTutors 
    : mockTutors.filter(t => t.specialties.includes(activeTab as Subject));

  return (
    <section id="tutors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Expert Mentors</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Find the Right Guide</h3>
            <p className="text-slate-500 text-lg">
              Our teachers are selected not just for their expertise, but for their ability to model character and lead with integrity.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...Object.values(Subject)].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutors.map(tutor => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center mx-auto space-x-2">
            <span>View All 150+ Tutors</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorList;
