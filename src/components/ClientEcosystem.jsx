import React from 'react';
import { CLIENT_PARTNERS, CLIENT_SECTION } from '../data/contentData';
import { MotionSection } from './MotionWrapper';

export const ClientEcosystem = () => {
  const clientLogos = {
    "Flipkart Minutes": "/assets/clients/flipkart-minutes-logo.svg",
    "Zepto": "/assets/clients/zepto-logo.svg",
    "Blinkit": "/assets/clients/blinkit-logo.svg",
    "Ratnadeep Retail": "/assets/clients/ratnadeep-retail-logo.svg",
    "Narayana Schools": "/assets/clients/narayana-schools.webp",
    "DMart": "/assets/clients/dmart.webp",
    "Sun Pharma": "/assets/clients/sun-pharma.webp"
  };

  const renderLogoTrack = () => (
    <div className="flex space-x-8 animate-marquee py-4 flex-shrink-0">
      {CLIENT_PARTNERS.map((client, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 min-w-[340px] shadow-sm hover:shadow-md hover:border-blue-400 hover:bg-white transition-all duration-300 group flex-shrink-0"
        >
          <div className="w-24 h-16 flex items-center justify-center bg-white rounded-xl p-2.5 border border-slate-100 flex-shrink-0 shadow-sm">
            <img 
              src={clientLogos[client.name]} 
              alt={`${client.name} logo`} 
              width="96"
              height="64"
              loading="lazy"
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-left">
            <h4 className="font-extrabold text-slate-900 text-base tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
              {client.name}
            </h4>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-500 transition-colors block mt-0.5">
              {client.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <MotionSection id="clients" dataTheme="light" className="py-20 relative overflow-hidden bg-white border-y border-slate-200 w-full">
      
      {/* Section Header - remains centered within max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {CLIENT_SECTION.heading}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            {CLIENT_SECTION.description}
          </p>
        </div>
      </div>

      {/* Marquee Wrapper - outside max-w-7xl for full-screen edge-to-edge scroll */}
      <div className="w-full overflow-hidden flex relative select-none">
        {/* Gradient Overlay left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Gradient Overlay right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Seamless Infinite Loop Container */}
        <div className="flex flex-row flex-nowrap space-x-0">
          {renderLogoTrack()}
          {renderLogoTrack()}
        </div>
      </div>

    </MotionSection>
  );
};
