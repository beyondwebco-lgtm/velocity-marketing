import React from 'react';
import { INDUSTRIES } from '../data/contentData';
import { MotionSection, MotionCard, MotionGrid } from './MotionWrapper';
import { Briefcase } from 'lucide-react';

export const IndustriesGrid = () => {
  return (
    <MotionSection id="industries" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>INDUSTRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Marketing Solutions Across Diverse Industries
          </h2>
        </div>

        <MotionGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.05}>
          {INDUSTRIES.map((industry, idx) => (
            <MotionCard key={idx}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center transition-all duration-300 shadow-sm">
                <span className="font-bold text-slate-900 text-sm leading-snug">
                  {industry}
                </span>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

      </div>
    </MotionSection>
  );
};
