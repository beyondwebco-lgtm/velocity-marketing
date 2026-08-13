import React from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { MotionSection, MotionCard } from './MotionWrapper';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <MotionSection id="about" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
              <span>{COMPANY_INFO.aboutLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {COMPANY_INFO.aboutHeading}
            </h2>
            <div className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed space-y-4 whitespace-pre-line">
              {COMPANY_INFO.aboutContent}
            </div>
            <div className="pt-4 pb-2">
               <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl">
                 <p className="text-lg font-bold text-slate-900 italic">"{COMPANY_INFO.aboutHighlight}"</p>
                 <p className="text-sm text-slate-600 mt-2">{COMPANY_INFO.aboutExecution}</p>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-6 shadow-sm">
             <div className="w-full max-w-sm space-y-4">
               {COMPANY_INFO.aboutFlow.split('→').map((step, idx) => (
                 <React.Fragment key={idx}>
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-blue-700 font-bold text-lg">
                     {step.trim()}
                   </div>
                   {idx < 2 && (
                     <div className="flex justify-center text-slate-400">
                       <ArrowRight className="w-6 h-6 rotate-90" />
                     </div>
                   )}
                 </React.Fragment>
               ))}
             </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <MotionCard>
             <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl h-full flex flex-col shadow-lg shadow-blue-600/20">
               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                 <Target className="w-6 h-6 text-white" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
               <p className="text-blue-50 leading-relaxed font-normal">
                 {COMPANY_INFO.mission}
               </p>
             </div>
           </MotionCard>
           
           <MotionCard>
             <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl h-full flex flex-col shadow-lg">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                 <Lightbulb className="w-6 h-6 text-blue-400" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
               <p className="text-slate-300 leading-relaxed font-normal">
                 {COMPANY_INFO.vision}
               </p>
             </div>
           </MotionCard>
        </div>

        {/* Leadership */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-12 border-t border-slate-200">
           <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
             <Users className="w-8 h-8 text-blue-600" />
           </div>
           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
             {COMPANY_INFO.leadershipHeading}
           </h2>
           <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
             {COMPANY_INFO.leadershipDescription}
           </p>
        </div>

      </div>
    </MotionSection>
  );
};
