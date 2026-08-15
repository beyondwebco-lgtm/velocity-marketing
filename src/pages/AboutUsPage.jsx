import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, WHY_CHOOSE_US, COVERAGE_SECTION } from '../data/contentData';
import { Target, Lightbulb, Users, CheckCircle2, MapPin } from 'lucide-react';
import { MotionSection, MotionCard, MotionGrid } from '../components/MotionWrapper';

export const AboutUsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-[#F8FAFC]">
      {/* Header Section */}
      <MotionSection className="max-w-7xl mx-auto px-6 mb-16 mt-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-100 px-4 py-2 rounded-full">
            <span>ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Company Overview
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
            {COMPANY_INFO.aboutContent}
          </p>
        </div>
      </MotionSection>

      {/* Vision & Mission */}
      <MotionSection className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionCard>
            <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-3xl h-full flex flex-col shadow-xl shadow-blue-600/20">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-50 text-lg leading-relaxed font-medium whitespace-pre-line">
                {COMPANY_INFO.mission}
              </p>
            </div>
          </MotionCard>
           
          <MotionCard>
            <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl h-full flex flex-col shadow-xl">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium whitespace-pre-line">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </MotionCard>
        </div>
      </MotionSection>

      {/* Why Choose Us */}
      <MotionSection className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-900/5 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Velocity Marketing?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              At Velocity Marketing, we believe successful marketing goes beyond ideas—it requires flawless execution. With a strong PAN India network and real-time reporting systems, we ensure every campaign is delivered with precision and accountability.
            </p>
          </div>
          <MotionGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((reason, index) => (
              <MotionCard key={index}>
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{reason.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </MotionGrid>
        </div>
      </MotionSection>

      {/* Leadership & Presence */}
      <MotionSection className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Leadership */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {COMPANY_INFO.leadershipHeading}
            </h2>
            <p className="text-slate-700 text-lg font-medium leading-relaxed">
              {COMPANY_INFO.leadershipDescription}
            </p>
            <p className="text-slate-600 leading-relaxed">
              Guided by a customer-centric approach, the leadership team continuously focuses on quality, innovation, and long-term partnerships, ensuring every project exceeds client expectations.
            </p>
          </div>

          {/* PAN India Presence */}
          <div className="space-y-6 bg-slate-900 rounded-3xl p-10 text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {COVERAGE_SECTION.panIndiaHeading}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {COVERAGE_SECTION.panIndiaContent}
            </p>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};
