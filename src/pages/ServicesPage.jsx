import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/detailedData';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';

export const ServicesPage = ({ isStandalone = true }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = DETAILED_SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${isStandalone ? 'pt-28 pb-20 bg-slate-50 min-h-screen' : 'py-20 bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-800 tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>OUR COMPREHENSIVE SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What We Deliver
          </h1>
          <p className="text-slate-600 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            Velocity Marketing is a leading BTL (Below-the-Line) marketing agency delivering innovative, result-driven on-ground brand activation solutions across India. We specialize in creating impactful consumer experiences through product sampling, retail branding, outdoor advertising, transit branding, rural marketing, corporate activations, and promotional campaigns. With a skilled execution team and nationwide network, we help brands increase visibility, engage target audiences, generate quality leads, and drive measurable business growth through customized marketing solutions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            id="service-search-input"
            type="text"
            placeholder="Search services (e.g. Sampling, Van, Retail)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 font-bold text-slate-800 placeholder:text-slate-400 text-lg"
          />
        </div>

        {/* Services List (Horizontal Layout) */}
        {filteredServices.length > 0 ? (
          <div className="space-y-8">
            {filteredServices.map((service) => (
              <MotionCard key={service.id}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-stretch group min-h-[300px]">
                  
                  {/* Service Image Container - Contain Mode for Full Image */}
                  {service.image && (
                    <div className="md:w-1/2 bg-slate-100 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        width="480"
                        height="280"
                        loading="lazy"
                        className="w-full h-full max-h-[280px] object-contain group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-xs font-mono font-bold text-blue-700 shadow-sm">
                        {service.id}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                      <span className="flex items-center text-emerald-600">
                        <Check className="w-4 h-4 mr-1.5 flex-shrink-0" /> PAN India Execution
                      </span>
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium text-lg">No services found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Bottom CTA */}
        <MotionSection className="mt-24">
          <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-blue-900/20 text-white">
            <h2 className="text-3xl font-black mb-6">Ready to Accelerate Your Brand?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
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
