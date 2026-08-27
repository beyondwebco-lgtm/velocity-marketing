import React from 'react';
import { WHY_CHOOSE_US, CTA_SECTION, COMPANY_INFO } from '../data/contentData';
import { ShieldCheck, Phone, Mail } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from './MotionWrapper';

export const WhyUs = () => {
  return (
    <MotionSection id="why-us" dataTheme="light" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Why Choose Velocity Grid */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>WHY VELOCITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Execution That Delivers Results
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed mt-4">
            Successful marketing requires more than a strong idea—it requires disciplined execution. Velocity Marketing combines experienced field teams, nationwide operational capability, dedicated project management, and technology-enabled reporting to deliver campaigns with speed, precision, and accountability.
          </p>
        </div>

        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {WHY_CHOOSE_US.map((item, idx) => (
            <MotionCard key={idx}>
              <div className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-4 h-full flex flex-col justify-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-base border border-blue-200 mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-slate-700 text-sm font-normal leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

      </div>
    </MotionSection>
  );
};

export const ContactSection = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* High-Touch Conversion Hub Banner */}
        <div id="contact" className="rounded-3xl p-8 sm:p-12 border border-blue-500/40 relative overflow-hidden bg-blue-700 text-white shadow-2xl shadow-blue-900/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {CTA_SECTION.heading}
              </h3>
              <p className="text-blue-50 text-base font-normal max-w-2xl leading-relaxed">
                {CTA_SECTION.description}
              </p>
              <p className="text-blue-50 text-base font-normal max-w-2xl leading-relaxed">
                {CTA_SECTION.subDescription}
              </p>
              <p className="text-blue-100 text-sm font-medium italic max-w-2xl leading-relaxed">
                {CTA_SECTION.footer}
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-white font-bold">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-white mt-1" />
                  <div className="flex flex-col space-y-1">
                    {COMPANY_INFO.emails.map((email, idx) => (
                      <span key={idx}>{email}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-start lg:justify-end gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-5 rounded-full bg-white hover:bg-slate-100 text-blue-900 font-black text-base shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-center"
              >
                {CTA_SECTION.primaryButton} &rarr;
              </button>
              <a
                href={`mailto:${COMPANY_INFO.emails[0]}`}
                className="px-8 py-4 rounded-full bg-blue-800 hover:bg-blue-900 text-white border border-blue-600 font-bold text-sm uppercase tracking-wider text-center transition-all duration-300"
              >
                {CTA_SECTION.secondaryButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
