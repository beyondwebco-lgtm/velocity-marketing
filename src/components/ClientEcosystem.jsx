import React from 'react';
import { CLIENT_PARTNERS, CLIENT_SECTION } from '../data/contentData';
import { Award } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';

export const ClientEcosystem = () => {
  const clientLogos = {
    "Flipkart Minutes": "/assets/clients/flipkart-minutes-logo.svg",
    "Zepto": "/assets/clients/zepto-logo.svg",
    "Blinkit": "/assets/clients/blinkit-logo.svg",
    "Ratnadeep Retail": "/assets/clients/ratnadeep-retail-logo.svg"
  };

  return (
    <MotionSection id="clients" dataTheme="light" className="py-20 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {CLIENT_SECTION.heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            {CLIENT_SECTION.description}
          </p>
        </div>

        {/* Client Partners Showcase Row */}
        <MotionGrid className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
          {CLIENT_PARTNERS.map((client, idx) => (
            <MotionCard key={idx}>
              <div
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all h-full flex flex-col items-center justify-center text-center group"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4">
                  <img 
                    src={clientLogos[client.name]} 
                    alt={`${client.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                  {client.category}
                </div>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>
      </div>
    </MotionSection>
  );
};
