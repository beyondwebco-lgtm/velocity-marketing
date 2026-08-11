import React, { useState } from 'react';
import { CLIENT_PARTNERS, INDUSTRIES_SERVED } from '../data/contentData';
import { Building2, Award, ChevronRight, ArrowUpRight } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';

export const ClientEcosystem = ({ onOpenQuote }) => {
  const [activePartner, setActivePartner] = useState(CLIENT_PARTNERS[0]);

  return (
    <MotionSection id="clients" dataTheme="light" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Trusted By Retail & Quick-Commerce Titans</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            TRUSTED BY LEADING BRANDS. <br />
            <span className="text-gradient-blue">PROVEN AT ENTERPRISE SCALE.</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            We partner with India's fastest-growing retail, quick-commerce, and FMCG powerhouses to deliver speed, visibility, and measurable return on campaign investment.
          </p>
        </div>

        {/* Client Partners Showcase Grid with Staggered Animations */}
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
          {CLIENT_PARTNERS.map((client, idx) => (
            <MotionCard key={idx}>
              <div
                onClick={() => setActivePartner(client)}
                className={`p-6 rounded-3xl transition-all duration-300 border cursor-pointer h-full ${
                  activePartner.name === client.name
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/25 -translate-y-1'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg mb-6 border ${
                  activePartner.name === client.name ? 'bg-white/20 text-white border-white/20' : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  {client.name.charAt(0)}
                </div>
                <div className={`text-xs font-mono uppercase tracking-wider mb-1 font-extrabold ${
                  activePartner.name === client.name ? 'text-blue-100' : 'text-blue-700'
                }`}>
                  {client.category}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${activePartner.name === client.name ? 'text-white' : 'text-slate-900'}`}>{client.name}</h3>
                <p className={`text-xs font-normal leading-relaxed ${activePartner.name === client.name ? 'text-blue-100' : 'text-slate-600'}`}>
                  {client.highlight}
                </p>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

        {/* Industries Footprint Section */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Versatile Operational Footprint</h3>
              <p className="text-xs text-slate-600 font-mono font-medium mt-1">
                Customized execution models built specifically for distinct market dynamics.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="text-xs font-mono text-blue-700 font-bold hover:underline flex items-center space-x-1"
            >
              <span>Discuss Industry Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDUSTRIES_SERVED.map((ind, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono font-medium flex items-center space-x-2 hover:border-blue-500 hover:text-blue-700 transition-colors shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MotionSection>
  );
};
