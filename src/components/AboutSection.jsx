import React from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { MotionSection } from './MotionWrapper';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <MotionSection id="about" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
              <p>
                Velocity Marketing is a leading integrated sales and marketing solutions company specializing in Below-the-Line (BTL) marketing, retail execution, brand activations, merchandising, field marketing, and business support services. 
              </p>
              <p>
                We partner with E-commerce, Quick Commerce, FMCG, consumer electronics, telecom, retail, and lifestyle brands to help them strengthen market presence, enhance customer engagement, and drive measurable business growth.
              </p>
            </div>
            <div className="pt-4 pb-2">
               <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl">
                 <p className="text-lg font-bold text-slate-900 italic">"{COMPANY_INFO.aboutHighlight}"</p>
               </div>
            </div>
            
            <div className="pt-4">
              <Link 
                to="/about"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold transition-all duration-300 shadow-md group"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
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

      </div>
    </MotionSection>
  );
};
