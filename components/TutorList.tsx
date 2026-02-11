
import React from 'react';
import TutorCard from './TutorCard.tsx';
import { Tutor, Subject } from '../types.ts';

const mockTutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialties: [Subject.Physics, Subject.Math],
    bio: 'Former university professor specializing in making complex physics intuitive.',
    experience: 12,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/sarah/600/600',
    availability: 'Assigned on demand',
    approach: 'Conceptual & Rigorous'
  },
  {
    id: '2',
    name: 'James Olu',
    specialties: [Subject.Coding, Subject.Math],
    bio: 'Software engineer by day, mentor by night. I focus on logic and problem-solving.',
    experience: 8,
    rating: 5.0,
    imageUrl: 'https://picsum.photos/seed/james/600/600',
    availability: 'Assigned on demand',
    approach: 'Project-Based'
  },
  {
    id: '3',
    name: 'Mrs. Elena Rodriguez',
    specialties: [Subject.Chemistry],
    bio: 'Specialist in Grade 11-12 Chemistry. I help students conquer the periodic table.',
    experience: 15,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/elena/600/600',
    availability: 'Assigned on demand',
    approach: 'Patient & Detailed'
  }
];

const TutorList: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3">Our Expert Pool</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Meet the Mentors <br /> Who Change Lives.</h3>
            <p className="text-slate-500 text-sm md:text-base">
              These are just a few of our 150+ registered tutors. When you register, we analyze your child's personality and academic needs to assign the mentor that fits best.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockTutors.map(tutor => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
          <p className="text-indigo-900 font-bold text-sm">All our tutors undergo strict background checks and character assessments.</p>
        </div>
      </div>
    </section>
  );
};

export default TutorList;
