
import React from 'react';

const features = [
  {
    title: 'Reinforced Learning',
    description: 'We don\'t start from scratch. We build on what school teachers have taught, helping students understand difficult topics and master assignments.',
    icon: '📚',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Academic Counseling',
    description: 'Supportive guidance for students facing academic anxiety. We help them build the potential and confidence to tackle any challenge.',
    icon: '🤝',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Character First',
    description: 'Instilling discipline, responsibility, and God-fearing values. We encourage hard work and community impact through education.',
    icon: '🛡️',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    title: 'STEM Specialization',
    description: 'Expert-led deep dives into Mathematics, Physics, Chemistry, and Coding. Turning challenges into competitive advantages.',
    icon: '🧬',
    color: 'bg-amber-100 text-amber-600'
  }
];

const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Our Core Philosophy</h2>
          <p className="text-4xl font-serif font-bold text-slate-900 mb-4">More Than Just a Tutor</p>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We focus on the student as a whole person—combining academic rigor with character building and spiritual guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
