import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES, SOUTH_INDIA_NETWORK } from '../data/contentData';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer = ({ onOpenQuote }) => {
  return (
    <footer data-theme="dark" className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm font-normal pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg shadow-slate-900/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/Logo.webp"
                  alt="Velocity Marketing"
                  width="48"
                  height="48"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  VELOCITY <span className="font-light text-slate-400">MARKETING</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono font-bold">
                  On-Ground Execution Studio
                </span>
              </div>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
              {COMPANY_INFO.tagline}
            </p>
            <div className="pt-4 border-t border-slate-800">
              <a href={COMPANY_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                <div className="mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white uppercase tracking-widest font-bold mb-1">Office Location</div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/process" className="hover:text-blue-400 transition-colors">Our Process</Link></li>
              <li><Link to="/#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
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
                  <Link to="/process" className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
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

          {/* Social Links */}
          <div className="lg:col-span-1 space-y-4">
            <div className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Socials
            </div>
            <ul className="space-y-4 text-xs text-slate-300 font-medium">
              <li>
                <a href="https://www.instagram.com/vellocitymarketing?utm_source=qr&igsi=MWVxejEwYmp2djc3Yw==" target="_blank" rel="noopener noreferrer" aria-label="Velocity Marketing Instagram" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/18EEBPnMJu/" target="_blank" rel="noopener noreferrer" aria-label="Velocity Marketing Facebook" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/velocitymarketing9/" target="_blank" rel="noopener noreferrer" aria-label="Velocity Marketing LinkedIn" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
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
