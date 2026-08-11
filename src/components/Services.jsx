import React, { useState } from 'react';
import { SERVICES } from '../data/contentData';
import { Sparkles, ShoppingBag, ShieldCheck, Users, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Sparkles: Sparkles,
  ShoppingBag: ShoppingBag,
  ShieldCheck: ShieldCheck,
  Users: Users,
};

export const Services = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const [selectedServiceItem, setSelectedServiceItem] = useState(null);

  const activeServiceGroup = SERVICES.find((s) => s.id === activeTab);

  return (
    <MotionSection id="services" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0 border-b border-slate-200 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              PRECISION EXECUTION. <br />
              <span className="text-gradient-blue">AT EVERY TOUCHPOINT.</span>
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            We bridge the gap between strategic brand vision and real-world execution through our core operational verticals.
          </p>
        </div>

        {/* Vertical Tabs Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4 border ${
                    isActive
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/25 translate-x-2'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white text-blue-600 shadow-sm border border-slate-200'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono uppercase tracking-wider mb-1 font-bold ${isActive ? 'text-blue-100' : 'text-blue-700'}`}>
                      {service.category}
                    </div>
                    <h3 className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${isActive ? 'text-blue-100 font-normal' : 'text-slate-600 font-normal'}`}>{service.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Grid with AnimatePresence */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceGroup.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-8 relative shadow-xl shadow-slate-900/5"
              >
                {/* Header inside active service */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold">
                      ACTIVE VERTICAL: {activeServiceGroup.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      {activeServiceGroup.title}
                    </h3>
                    <p className="text-slate-700 text-sm mt-2 font-normal">
                      {activeServiceGroup.tagline}
                    </p>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                  >
                    <span>Book Vertical</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Service Sub-Items Cards Grid */}
                <MotionGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                  {activeServiceGroup.items.map((item, idx) => (
                    <MotionCard key={idx}>
                      <div
                        onClick={() => setSelectedServiceItem(item)}
                        className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 group cursor-pointer shadow-sm h-full flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono text-xs font-bold">
                              0{idx + 1}
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </MotionCard>
                  ))}
                </MotionGrid>

                {/* Footer Banner */}
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-blue-950 font-bold">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>Custom scope? We construct tailored campaign frameworks in under 24 hours.</span>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-blue-700 hover:underline"
                  >
                    Configure Campaign &rarr;
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Modal for Service Item Deep Dive */}
      <AnimatePresence>
        {selectedServiceItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white max-w-lg w-full rounded-3xl p-8 border border-slate-200 shadow-2xl relative space-y-6 text-slate-900"
            >
              <button
                onClick={() => setSelectedServiceItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-slate-900 bg-slate-100"
              >
                ✕
              </button>
              <div className="text-xs font-mono text-blue-700 font-bold uppercase tracking-widest">
                SERVICE SPECIFICATION
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedServiceItem.name}</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {selectedServiceItem.desc}
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs font-mono text-slate-800 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Deployment SLA: 24 to 48 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>South India & PAN India Operational Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Live Photo Proof & GPS Audit Dashboard Included</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setSelectedServiceItem(null);
                    onOpenQuote();
                  }}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center text-sm shadow-md"
                >
                  Inquire For This Service
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  );
};
