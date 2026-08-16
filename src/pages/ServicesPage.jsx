import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/detailedData';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';

export const ServicesPage = ({ isStandalone = true }) => {
  return (
    <div className={`${isStandalone ? 'pt-24 pb-20 bg-slate-50 min-h-screen' : 'py-20 bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-sm font-bold text-blue-800 tracking-wider">
            <span>OUR COMPREHENSIVE SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Deliver
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a comprehensive range of marketing execution services designed to support every stage of the customer journey.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {DETAILED_SERVICES.map((service, index) => (
            <MotionSection key={index} className="scroll-mt-32" id={`service-${service.id}`}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-900/5 border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-blue-100">{service.id}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                
                <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
                  {service.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.subItems.map((sub, subIdx) => (
                    <MotionCard key={subIdx}>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-full hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <h3 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                          <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{sub.title}</span>
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed pl-7">
                          {sub.desc}
                        </p>
                      </div>
                    </MotionCard>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionSection className="mt-20">
          <div className="bg-blue-600 rounded-3xl p-12 text-center shadow-xl shadow-blue-900/20">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Your Brand?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Whether you're planning a product launch, retail promotion, or large-scale merchandising project, we are ready to help you execute with confidence.
            </p>
            <Link to="/#contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg group">
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </MotionSection>

      </div>
    </div>
  );
};
