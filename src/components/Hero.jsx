import React, { lazy, Suspense } from 'react';
import { isBot } from '../utils';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CountUp } from './CountUp';
import { METRICS, COMPANY_INFO } from '../data/contentData';

const WebThreads = lazy(() => import('./WebThreads'));

export const Hero = ({ onOpenQuote }) => {
  const [videoSrc, setVideoSrc] = React.useState('');

  React.useEffect(() => {
    // Defer loading and play of the heavy mp4 video to avoid blocking startup main-thread
    const timer = setTimeout(() => {
      setVideoSrc('/assets/Company_Logo.webp'); // Fallback / Poster or actual MP4
      setVideoSrc('/assets/Company_Logo.webm');
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-theme="light"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50"
    >
      {/* ── WebThreads Background Layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!isBot() && (
          <Suspense fallback={<div className="w-full h-full bg-slate-50" />}>
          <WebThreads
            color1="#2563EB"
            color2="#60A5FA"
            color3="#DBEAFE"
            speed={0.15}
            threadCount={5}
            frequency={4.0}
            spread={0.22}
            taper={1.2}
            position={0.45}
            fanMode="center"
            glow={0.025}
            falloff={0.55}
            thickness={1.3}
            brightness={0.5}
            opacity={0.35}
            mirror={true}
            shimmer={true}
            grain={true}
            grainIntensity={0.03}
            mouseInteraction={true}
            mouseStrength={0.25}
          />
        </Suspense>
        )}
      </div>

      {/* ── Ambient Gradient Overlays ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-slate-50/90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-500/8 blur-[80px] rounded-full" />
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-[fadeIn_0.8s_ease-out_forwards]">
          {/* Status Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-blue-900 border border-blue-200/60 shadow-lg shadow-blue-900/5 font-semibold animate-pulse">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              <span>{COMPANY_INFO.heroLabel}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            {COMPANY_INFO.heroHeading.split('.')[0]}.{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-blue font-black">
              {COMPANY_INFO.heroHeading.split('.')[1]}.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all duration-300 flex items-center space-x-3"
            >
              <span>{COMPANY_INFO.primaryCta}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#contact"
              className="px-7 py-4 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-slate-900 font-bold text-base transition-all duration-300 flex items-center space-x-2 border border-slate-200 shadow-sm hover:shadow-md"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_INFO.secondaryCta}</span>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono text-slate-600">
            {COMPANY_INFO.trustIndicators.map((text) => (
              <div key={text} className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>

          {/* Company Video Container */}
          <div className="mt-12 flex justify-center w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200/50">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto object-cover"
            >
              {videoSrc && <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ── Metrics Ribbon ── */}
        <div className="mt-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
            {METRICS.slice(0, 4).map((metric, i) => (
              <div key={i} className="pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 text-center md:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight flex items-baseline justify-center md:justify-start space-x-1">
                  <CountUp value={metric.value} duration={2200} />
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">{metric.label}</div>
                <div className="text-xs text-slate-500 font-mono font-medium mt-0.5">{metric.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
