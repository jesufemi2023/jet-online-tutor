
import React from 'react';
import { Tutor } from '../types.ts';

interface Props {
  tutor: Tutor;
}

const TutorCard: React.FC<Props> = ({ tutor }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden group">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={tutor.imageUrl} 
          alt={tutor.name} 
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
          Registered Expert
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900">{tutor.name}</h3>
          <span className="text-xs font-bold text-emerald-600">⭐ {tutor.rating}</span>
        </div>
        <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
          {tutor.experience} Years Experience
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tutor.specialties.map(s => (
            <span key={s} className="bg-slate-50 text-slate-500 text-[9px] font-bold px-2 py-1 rounded border border-slate-100">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
