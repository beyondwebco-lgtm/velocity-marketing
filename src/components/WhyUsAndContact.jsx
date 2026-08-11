import React from 'react';
import { WHY_CHOOSE_US } from '../data/contentData';
import { ShieldCheck, Zap, Layers, MapPin, Award, Phone, Mail, Clock } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';

export const WhyUsAndContact = ({ onOpenQuote }) => {
  return (
    <MotionSection id="why-us" dataTheme="light" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Why Choose Velocity Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Operational Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              WHY ENTERPRISES TRUST <br />
              <span className="text-gradient-blue">VELOCITY MARKETING.</span>
            </h2>
          </div>

          <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {WHY_CHOOSE_US.map((item, idx) => (
              <MotionCard key={idx}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 glass-panel-hover space-y-4 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-lg border border-blue-200 mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-700 text-sm font-normal leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </MotionGrid>
        </div>

        {/* High-Touch Conversion Hub Banner */}
        <div id="contact" className="rounded-3xl p-8 sm:p-12 border border-blue-500/40 relative overflow-hidden bg-blue-700 text-white shadow-2xl shadow-blue-900/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-blue-100 uppercase tracking-widest font-bold">
                READY TO ACCELERATE YOUR BRAND?
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                LET'S PUT YOUR BRAND IN MOTION.
              </h3>
              <p className="text-blue-50 text-sm sm:text-base font-normal max-w-2xl">
                Speak with our marketing execution strategists today. We will build a customized, budget-tailored campaign proposal in under 24 hours.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-white font-bold">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span>hello@velocitymarketing.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Response SLA: &lt; 2 Hours</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="px-8 py-5 rounded-full bg-white hover:bg-slate-100 text-blue-900 font-black text-base shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider"
              >
                Request Proposal Now &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};
