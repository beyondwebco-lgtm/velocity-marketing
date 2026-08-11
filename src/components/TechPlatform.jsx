import React, { useState } from 'react';
import { Smartphone, MapPin, Camera, BarChart3, CheckCircle2, RefreshCw } from 'lucide-react';
import { MotionSection } from './MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export const TechPlatform = () => {
  const [activeTab, setActiveTab] = useState('gps');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshSim = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <MotionSection id="tech-platform" dataTheme="light" className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Proprietary Field Intelligence Tech</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            NO GUESSWORK. <br />
            <span className="text-gradient-blue">VERIFIED FIELD AUDITS IN REAL-TIME.</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            We operate with complete digital accountability. Clients receive live dashboard access featuring geo-fenced attendance, timestamped photo proof, and automated audit analytics.
          </p>
        </div>

        {/* Interactive Tech Dashboard Simulator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl shadow-blue-900/5">
          
          {/* Top Bar Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-600 ml-4 hidden sm:inline font-bold">
                VELOCITY INTELLIGENCE SUITE v4.2
              </span>
            </div>

            <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('gps')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
                  activeTab === 'gps' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-slate-700 hover:text-slate-900 font-semibold'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>GPS Attendance</span>
              </button>
              <button
                onClick={() => setActiveTab('photo')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
                  activeTab === 'photo' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-slate-700 hover:text-slate-900 font-semibold'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Live Photo Proof</span>
              </button>
              <button
                onClick={() => setActiveTab('roi')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
                  activeTab === 'roi' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-slate-700 hover:text-slate-900 font-semibold'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>ROI Analytics</span>
              </button>
            </div>

            <button
              onClick={handleRefreshSim}
              className="p-2 rounded-xl bg-white text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors border border-slate-200 shadow-sm"
              title="Refresh Live Data Feed"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
            </button>
          </div>

          {/* Simulator Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeTab === 'gps' && (
                    <div className="space-y-4">
                      <div className="text-xs font-mono text-blue-700 font-extrabold uppercase tracking-widest">MODULE 01 / GEO-FENCING</div>
                      <h3 className="text-2xl font-bold text-slate-900">GPS Attendance & Live Route Verification</h3>
                      <p className="text-sm text-slate-700 font-normal leading-relaxed">
                        Promoters and merchandisers can only check in within 50 meters of their assigned retail outlet or activation stall. Location spoofing is strictly impossible.
                      </p>
                      <ul className="space-y-2.5 text-xs font-mono text-slate-800 font-medium">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Geo-fenced check-in radius enforcement</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Real-time shift timer and active break tracking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Automated supervisor discrepancy alerts</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'photo' && (
                    <div className="space-y-4">
                      <div className="text-xs font-mono text-blue-700 font-extrabold uppercase tracking-widest">MODULE 02 / AUDIT PROOF</div>
                      <h3 className="text-2xl font-bold text-slate-900">Timestamped & Geo-Tagged Photo Audits</h3>
                      <p className="text-sm text-slate-700 font-normal leading-relaxed">
                        Every POSM installation, shelf setup, and sampling booth requires instant high-resolution photo uploads with embedded timestamp and GPS coordinates.
                      </p>
                      <ul className="space-y-2.5 text-xs font-mono text-slate-800 font-medium">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Watermarked date, time, and coordinates on photos</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Before & after shelf compliance comparisons</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Direct client cloud gallery access</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'roi' && (
                    <div className="space-y-4">
                      <div className="text-xs font-mono text-blue-700 font-extrabold uppercase tracking-widest">MODULE 03 / ANALYTICS</div>
                      <h3 className="text-2xl font-bold text-slate-900">Campaign Reach & Conversion Metrics</h3>
                      <p className="text-sm text-slate-700 font-normal leading-relaxed">
                        Track sample distributions, consumer interactions, product demos, and retail stock movements through real-time aggregated reporting dashboards.
                      </p>
                      <ul className="space-y-2.5 text-xs font-mono text-slate-800 font-medium">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Sample-to-conversion estimation formulas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>City-wise engagement performance benchmarking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Exportable PDF & CSV audit logs</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Simulator Display */}
            <div className="lg:col-span-7">
              <div data-theme="dark" className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 font-mono text-xs space-y-6 relative overflow-hidden shadow-2xl">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-[10px] text-slate-400">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-bold">STREAMING FEED: BENGALURU & HYDERABAD</span>
                  </span>
                  <span>LAT: 12.9716° N | LON: 77.5946° E</span>
                </div>

                {/* Dynamic Content Preview based on tab */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    {activeTab === 'gps' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between text-slate-200">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                            <div>
                              <div className="font-bold text-white">OPERATIVE #V-882 (Priya S.)</div>
                              <div className="text-[10px] text-slate-300">Ratnadeep Retail - Indiranagar, Bengaluru</div>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 bg-emerald-500/20 rounded-lg text-[10px] uppercase font-bold text-emerald-400 border border-emerald-500/30">
                            VERIFIED IN-RANGE (12m)
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-amber-400" />
                            <div>
                              <div className="font-bold text-white">OPERATIVE #V-914 (Rahul K.)</div>
                              <div className="text-[10px] text-slate-300">Zepto Hub - HSR Layout, Bengaluru</div>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-[10px] uppercase font-bold border border-amber-500/30">
                            SHIFT ACTIVE (5h 22m)
                          </span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'photo' && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                          <div className="h-28 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 text-[10px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-2">
                              <span className="text-[9px] text-emerald-400 font-mono font-bold">✓ POSM STANDEE VERIFIED</span>
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-300">Flipkart Minutes Hub - Gachibowli, Hyd</div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                          <div className="h-28 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 text-[10px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-2">
                              <span className="text-[9px] text-emerald-400 font-mono font-bold">✓ SHELF BRANDING OK</span>
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-300">Blinkit Dark Store - T. Nagar, Chennai</div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'roi' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <div className="text-xl font-bold text-white">12,450</div>
                            <div className="text-[9px] text-slate-300 uppercase">Samples Distributed</div>
                          </div>
                          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <div className="text-xl font-bold text-blue-400">84.2%</div>
                            <div className="text-[9px] text-slate-300 uppercase">Audit Compliance</div>
                          </div>
                          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                            <div className="text-xl font-bold text-emerald-400">4.8 / 5</div>
                            <div className="text-[9px] text-slate-300 uppercase">Customer Sentiment</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Console Footer */}
                <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <span>CLIENT ACCESS API: SECURE ENCRYPTED PORTAL</span>
                  <span className="text-blue-400 font-bold">REAL-TIME SYNC</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </MotionSection>
  );
};
