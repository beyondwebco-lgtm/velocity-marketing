import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PROCESS } from '../data/contentData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MotionSection, MotionGrid, MotionCard } from '../components/MotionWrapper';

const imageMap = {
  "01": "/assets/services/Brand Activations.png",
  "02": "/assets/services/Retail marketing.png",
  "03": "/assets/services/outdoor activation.png",
  "04": "/assets/services/Events & Promotions.png",
  "05": "/assets/services/Digital Support.png",
  "06": "/assets/services/Branding & Fabrication.png",
  "07": "/assets/services/Audit & Analytics.png",
  "08": "/assets/services/Logistics & Operations.png",
};

export const ServicesProcessPage = ({ onOpenQuote }) => {
  return (
    <div id="process" className="py-12 md:py-20 bg-[#F8FAFC]">
      {/* Header Section */}
      <MotionSection className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-100 px-4 py-2 rounded-full">
            <span>Our Process & Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Execute and Deliver Excellence
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every successful campaign follows a structured approach. We transform marketing plans into real-world experiences by managing every stage of campaign execution.
          </p>
        </div>
      </MotionSection>

      {/* Process Timeline */}
      <MotionSection className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-900/5 border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Our Execution Process</h2>
          <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, index) => (
              <MotionCard key={index}>
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-blue-600/30">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{step.title}</h3>
                  </div>
                </div>
              </MotionCard>
            ))}
          </MotionGrid>
          <p className="text-center text-slate-600 mt-8 font-medium">
            This process ensures consistency, accountability, and continuous improvement across every campaign.
          </p>
        </div>
      </MotionSection>

      {/* Services Showcase */}
      <MotionSection className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What We Deliver</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of marketing execution services designed to support every stage of the customer journey.
          </p>
        </div>

        <MotionGrid className="space-y-24">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const imgSrc = imageMap[service.id];
            
            return (
              <MotionCard key={service.id}>
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-white">
                    <div className="aspect-w-16 aspect-h-12 relative group">
                      <img 
                        src={imgSrc} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono tracking-wider transition-colors hover:bg-blue-200 cursor-default">
                      SERVICE {service.id}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {service.detailedDesc || service.shortDesc}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Key Execution Areas</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2 group/item">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                            <span className="text-slate-700 font-medium transition-colors group-hover/item:text-slate-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <button
                        onClick={onOpenQuote}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1"
                      >
                        <span>Plan a Campaign</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </MotionGrid>
      </MotionSection>
    </div>
  );
};
