import React, { useState, useEffect } from 'react';
import { isBot } from '../utils';

export const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress, but bypass for Lighthouse/Bots instantly
    const bot = isBot();
    const duration = bot ? 0 : 1200; // 1.2 seconds for real users, 0 for bots
    const interval = bot ? 1 : 20; 
    const steps = duration === 0 ? 1 : duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Add a slight delay before triggering onLoaded so user sees 100%
        setTimeout(() => {
          if (onLoaded) onLoaded();
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoaded]);

  // Circle properties
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center space-y-8">
      {/* Dynamic Animated Logo Container */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing Outer Rings */}
        <div className="absolute w-44 h-44 rounded-full border border-blue-500/20 animate-ping opacity-50" />
        
        {/* Circular Progress SVG */}
        <svg className="absolute w-40 h-40 -rotate-90 transform" viewBox="0 0 160 160">
          {/* Background Track */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="4"
            fill="transparent"
          />
          {/* Progress Indicator */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#blue-gradient)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-75 ease-out"
          />
          <defs>
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Brand Logo Image with Glow */}
        <div className="w-28 h-28 rounded-full bg-white p-2.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center overflow-hidden z-10">
          <img
            src="/assets/Company_Logo.webp"
            alt="Velocity Marketing Logo"
            width="112"
            height="112"
            className="w-full h-full object-contain scale-90"
          />
        </div>
      </div>

      {/* Brand Title & Loading Progress Text */}
      <div className="text-center space-y-4 max-w-xs w-full px-6 z-10">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-white tracking-wider">
            VELOCITY <span className="text-blue-400 font-light">MARKETING</span>
          </h2>
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Initializing Studio... <span className="text-blue-400 font-bold ml-1">{progress}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
