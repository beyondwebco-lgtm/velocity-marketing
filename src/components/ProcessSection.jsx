import React from 'react';
import { PROCESS } from '../data/contentData';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';

export const ProcessSection = () => {
  return (
    <MotionSection id="process" className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-900/5 border border-slate-200">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Our Execution Process</h2>
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((step, index) => (
            <MotionCard key={index}>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-blue-600/30">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">{step.title}</h3>
                </div>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>
        <p className="text-center text-slate-600 mt-8 font-medium">
          This process ensures consistency, accountability, and continuous improvement across every campaign.
        </p>
      </div>
    </MotionSection>
  );
};
