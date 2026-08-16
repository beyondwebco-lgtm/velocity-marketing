import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProcessSection } from '../components/ProcessSection';
import { MotionSection } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';

export const ProcessPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-sm font-bold text-blue-800 tracking-wider">
            <span>OPERATIONAL EXCELLENCE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Deliver
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every successful campaign follows a structured approach. This process ensures consistency, accountability, and continuous improvement across every campaign.
          </p>
        </div>

        {/* Process Section Content */}
        <ProcessSection />

        {/* Bottom CTA */}
        <MotionSection className="mt-12 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Your Next Successful Campaign</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              Partner with us to transform ideas into impactful marketing experiences and measurable business success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg group w-full sm:w-auto justify-center">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/#contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-all duration-300 border border-slate-700 w-full sm:w-auto justify-center">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </MotionSection>

      </div>
    </div>
  );
};
