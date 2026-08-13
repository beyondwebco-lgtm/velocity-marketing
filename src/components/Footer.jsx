import React from 'react';
import { COMPANY_INFO, SERVICES, SOUTH_INDIA_NETWORK } from '../data/contentData';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer = ({ onOpenQuote }) => {
  return (
    <footer data-theme="dark" className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm font-normal pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-extrabold text-white text-xl tracking-tighter shadow-lg shadow-blue-500/20">
                V
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                VELOCITY <span className="font-light text-slate-400">MARKETING</span>
              </span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
              Integrated marketing execution solutions across brand activation, retail marketing, merchandising, events, outdoor activations, branding, analytics, and campaign operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Industries</a></li>
              <li><a href="#coverage" className="hover:text-blue-400 transition-colors">Our Reach</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Services
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Direct Contact
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[10px]">PHONE</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-blue-400 font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px]">EMAIL</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-blue-400 font-mono font-bold">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs uppercase shadow-md"
              >
                Get a Quote
              </button>
            </div>
          </div>

        </div>

        {/* SEO Keywords & Copyright */}
        <div className="space-y-6 pt-2">
          <div className="text-[10px] font-mono text-slate-400 leading-relaxed max-w-5xl">
            <strong className="text-slate-200">SEO Focus Keywords:</strong> BTL Marketing Company Bengaluru, Retail Execution India, Brand Activation Agency South India, Mall Activations Hyderabad, Product Sampling Chennai, POSM Merchandising Vizag, Field Manpower Staffing Kerala, GPS Attendance Marketing Audit, Retail Audits India.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono border-t border-slate-800 pt-8">
            <div>
              &copy; {new Date().getFullYear()} Velocity Marketing. All rights reserved. Built for Next-Gen On-Ground Execution.
            </div>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0 font-medium">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Operational Compliance</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
