import React from 'react';
import { PROCESS, TOUCHPOINTS } from '../data/contentData';
import { MotionSection, MotionCard } from './MotionWrapper';
import { Settings, Target, Map } from 'lucide-react';

export const ProcessAndTouchpoints = () => {
  return (
    <MotionSection id="process" dataTheme="light" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Process Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
              <Settings className="w-3.5 h-3.5 text-blue-600" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              From Strategy to <span className="text-gradient-blue">Successful Execution</span>
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-blue-100 -z-10" />
            
            <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10 overflow-x-auto pb-8 custom-scrollbar">
              {PROCESS.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-shrink-0 w-32 relative text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-200 text-blue-700 flex items-center justify-center text-xl font-bold font-mono shadow-sm group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10 relative">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Touchpoints Section */}
        <div className="pt-24 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Helping Brands Succeed Across Every Customer Touchpoint
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
              Velocity Marketing creates opportunities for brands to engage customers across retail stores, shopping malls, corporate parks, educational institutions, exhibitions, trade shows, residential communities, and public activations.
            </p>
            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
              By combining skilled manpower, operational expertise, and technology-driven reporting, we help brands maximize the effectiveness of their marketing investments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             {TOUCHPOINTS.map((touchpoint, idx) => (
               <MotionCard key={idx}>
                 <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center space-x-3 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                     <Map className="w-5 h-5" />
                   </div>
                   <span className="font-bold text-slate-900 text-sm">{touchpoint}</span>
                 </div>
               </MotionCard>
             ))}
          </div>
        </div>

      </div>
    </MotionSection>
  );
};
