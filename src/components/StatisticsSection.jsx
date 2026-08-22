import React from 'react';
import { STATISTICS } from '../data/detailedData';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';
import { CountUp } from './CountUp';

export const StatisticsSection = () => {
  return (
    <MotionSection id="statistics" dataTheme="light" className="py-24 relative overflow-hidden bg-blue-900 border-b border-blue-950">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-800/50 border border-blue-700/50 text-xs font-mono text-blue-200 uppercase tracking-widest font-bold">
            <span>At a Glance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Velocity Marketing at a Glance
          </h2>
        </div>

        <MotionGrid className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" staggerDelay={0.05}>
          {STATISTICS.map((stat, idx) => (
            <MotionCard key={idx}>
              <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center hover:bg-blue-700/50 transition-all duration-300">
                <span className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  <CountUp value={stat.value} duration={2000} />
                </span>
                <span className="font-medium text-blue-200 text-sm md:text-base leading-snug">
                  {stat.label}
                </span>
                {stat.note && (
                  <span className="text-blue-400/80 text-xs mt-1 italic">
                    {stat.note}
                  </span>
                )}
              </div>
            </MotionCard>
          ))}
        </MotionGrid>
      </div>
    </MotionSection>
  );
};
