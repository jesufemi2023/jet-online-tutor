
import React from 'react';
import { Tutor } from '../types';

interface Props {
  tutor: Tutor;
}

const TutorCard: React.FC<Props> = ({ tutor }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tutor.imageUrl} 
          alt={tutor.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
          ⭐ {tutor.rating} (50+ reviews)
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {tutor.specialties.map(s => (
            <span key={s} className="bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{tutor.name}</h3>
        <p className="text-indigo-600 text-sm font-medium mb-3">{tutor.experience} Years Experience</p>
        <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed">
          {tutor.bio}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="text-xs text-slate-400 font-medium">Next available: <span className="text-slate-900 font-bold">{tutor.availability}</span></div>
          <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all px-4 py-2 rounded-lg text-sm font-bold">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
