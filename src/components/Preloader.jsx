import React from 'react';

export const Preloader = ({ onLoaded }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center space-y-8 animate-out fade-out duration-700">
      {/* Dynamic Animated Logo Container */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing Outer Rings */}
        <div className="absolute w-44 h-44 rounded-full border-2 border-blue-500/30 animate-ping opacity-75" />
        <div className="absolute w-36 h-36 rounded-full border border-blue-400/50 animate-pulse" />
        
        {/* Brand Logo Image with Glow */}
        <div className="w-28 h-28 rounded-2xl bg-white p-2.5 shadow-2xl shadow-blue-500/50 border border-blue-400/50 flex items-center justify-center overflow-hidden z-10 animate-bounce">
          <img
            src="/assets/Logo.webp"
            alt="Velocity Marketing Logo"
            width="112"
            height="112"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Brand Title & Loading Progress Bar */}
      <div className="text-center space-y-4 max-w-xs w-full px-6 z-10">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-white tracking-wider">
            VELOCITY <span className="text-blue-400 font-light">MARKETING</span>
          </h2>
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Initializing On-Ground Execution Studio...
          </p>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <div className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 rounded-full w-full animate-[pulse_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
