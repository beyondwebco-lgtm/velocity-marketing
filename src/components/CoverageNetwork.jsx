import React, { useState } from 'react';
import { SOUTH_INDIA_NETWORK, COVERAGE_SECTION } from '../data/contentData';
import { MapPin, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { MotionSection } from './MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export const CoverageNetwork = ({ onOpenQuote }) => {
  const [selectedCity, setSelectedCity] = useState(SOUTH_INDIA_NETWORK[0]);

  return (
    <MotionSection id="coverage" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0 border-b border-slate-200 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Operational Dominance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {COVERAGE_SECTION.heading.toUpperCase()}.
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            {COVERAGE_SECTION.description}
          </p>
        </div>

        {/* Network Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive City Hub Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {SOUTH_INDIA_NETWORK.map((item, idx) => {
              const isSelected = selectedCity.city === item.city;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCity(item)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/25 translate-x-2'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-blue-600 border border-slate-200 shadow-sm'}`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${isSelected ? 'text-white' : 'text-slate-900'}`}>{item.city}</h3>
                      <p className={`text-xs font-mono font-medium ${isSelected ? 'text-blue-100' : 'text-slate-600'}`}>{item.state}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Hub Status Card with Motion */}
          <div className="lg:col-span-7 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-8 relative overflow-hidden shadow-xl shadow-slate-900/5"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <div className="text-xs font-mono text-blue-700 font-extrabold uppercase tracking-widest">
                      SELECTED REGION
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
                      {selectedCity.city}
                    </h3>
                    <p className="text-slate-600 text-xs font-mono font-medium mt-1">
                      {selectedCity.state}
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-300 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm font-normal">
                    {COVERAGE_SECTION.footer}
                </p>

                {/* State-wide Coverage Pills */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-800 font-bold">
                    CITIES & REGIONS WE COVER:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SOUTH_INDIA_NETWORK.map((c, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                          selectedCity.city === c.city
                            ? 'bg-blue-600 border-blue-600 text-white font-bold'
                            : 'bg-white border-slate-200 text-slate-800 font-medium'
                        }`}
                      >
                        {c.city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Ribbon */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-mono font-medium">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Seamless execution with standardized processes</span>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-blue-600/20"
                  >
                    <span>Launch Campaign</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </MotionSection>
  );
};
