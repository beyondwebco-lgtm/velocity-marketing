import React from 'react';
import { HOW_WE_DELIVER } from '../data/contentData';
import { MotionSection, MotionCard } from './MotionWrapper';
import { Truck, CheckCircle2 } from 'lucide-react';

export const HowWeDeliver = () => {
  return (
    <MotionSection id="how-we-deliver" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            <span>HOW WE DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Operational Excellence in <span className="text-gradient-blue">Execution</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
            Velocity Marketing transforms marketing plans into real-world experiences by managing every stage of campaign execution.
          </p>
        </div>

        {/* Methodology Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_WE_DELIVER.map((item, idx) => (
            <MotionCard key={idx}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 h-full flex flex-col hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.step}</h3>
                <p className="text-slate-600 font-normal leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center space-x-2 text-xs font-mono font-bold text-blue-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Execution</span>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>

      </div>
    </MotionSection>
  );
};
