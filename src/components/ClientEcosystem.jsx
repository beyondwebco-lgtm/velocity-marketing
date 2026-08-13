import React, { useState } from 'react';
import { CLIENT_PARTNERS, CLIENT_SECTION } from '../data/contentData';
import { Award, ArrowUpRight } from 'lucide-react';
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
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {CLIENT_SECTION.heading.toUpperCase()}.
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            {CLIENT_SECTION.description}
          </p>
        </div>

        {/* Client Partners Showcase Grid with Staggered Animations */}
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
          {CLIENT_PARTNERS.map((client, idx) => (
            <MotionCard key={idx}>
              <div
                onClick={() => setActivePartner(client)}
                className={`p-6 rounded-3xl transition-all duration-300 border cursor-pointer h-full flex flex-col items-center justify-center text-center ${
                  activePartner.name === client.name
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/25 -translate-y-1'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-2xl mb-4 border-2 ${
                  activePartner.name === client.name ? 'bg-white/20 text-white border-white/20' : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  {client.name.charAt(0)}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${activePartner.name === client.name ? 'text-white' : 'text-slate-900'}`}>{client.name}</h3>
                <div className={`text-xs font-mono uppercase tracking-wider font-extrabold ${
                  activePartner.name === client.name ? 'text-blue-100' : 'text-blue-700'
                }`}>
                  {client.category}
                </div>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

        <div className="flex justify-center">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 border border-slate-300 shadow-sm"
            >
              <span>Join Our Client Network</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </MotionSection>
  );
};
