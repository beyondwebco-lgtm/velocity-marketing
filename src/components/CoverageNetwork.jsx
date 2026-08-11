import React, { useState } from 'react';
import { SOUTH_INDIA_NETWORK } from '../data/contentData';
import { MapPin, Zap, Users, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { CountUp } from './CountUp';
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
              <span>Operational Dominance Across South India</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              STRATEGIC HUB REACH. <br />
              <span className="text-gradient-blue">10+ METROS & TIER-2 CITIES.</span>
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Whether you need a single-city high-octane launch or synchronized multi-state execution, our operational network ensures rapid turnaround.
          </p>
        </div>

        {/* Network Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive City Hub Buttons */}
          <div className="lg:col-span-5 space-y-3">
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

                  <div className="text-right">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${
                      isSelected ? 'bg-white/10 text-white border-white/20' : 'bg-white text-slate-800 border-slate-200'
                    }`}>
                      {item.hub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Hub Status Card with Motion */}
          <div className="lg:col-span-7">
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
                      SELECTED OPERATIONAL HUB
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
                      {selectedCity.city} Operations
                    </h3>
                    <p className="text-slate-600 text-xs font-mono font-medium mt-1">
                      Primary Region: {selectedCity.state}
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-300 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>ACTIVE HUB</span>
                  </div>
                </div>

                {/* Hub Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-700 font-bold mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>Promoter Capacity</span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900">
                      <CountUp key={selectedCity.city} value={selectedCity.teamSize} duration={1500} />
                    </div>
                    <p className="text-[10px] text-slate-600 mt-1 font-medium">Trained promoters & merchandisers ready</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                    <div className="flex items-center space-x-2 text-xs font-mono text-blue-800 font-bold mb-2">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span>Deployment SLA</span>
                    </div>
                    <div className="text-2xl font-extrabold text-blue-900">{selectedCity.speed}</div>
                    <p className="text-[10px] text-blue-800 mt-1 font-medium">Rapid response campaign dispatch</p>
                  </div>
                </div>

                {/* State-wide Coverage Pills */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-800 font-bold">
                    SOUTH INDIA REGIONAL COVERAGE FOOTPRINT:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Bengaluru", "Hyderabad", "Chennai", "Vijayawada", "Visakhapatnam", "Coimbatore", "Mysuru", "Puducherry", "Kerala (State-wide)", "Karnataka", "Andhra Pradesh", "Tamil Nadu", "Telangana"].map((c, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                          c.includes(selectedCity.city)
                            ? 'bg-blue-600 border-blue-600 text-white font-bold'
                            : 'bg-white border-slate-200 text-slate-800 font-medium'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Ribbon */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-mono font-medium">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Includes full local permissions & logistics handling</span>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-blue-600/20"
                  >
                    <span>Launch In {selectedCity.city}</span>
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
