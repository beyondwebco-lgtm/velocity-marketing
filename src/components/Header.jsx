import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Menu, X, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/contentData';

export const Header = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/#about' },
    { name: 'OUR SERVICES', href: '/#services' },
    { name: 'OUR PROCESS', href: '/#process' },
    { name: 'HOW WE DELIVER', href: '/#how-we-deliver' },
    { name: 'CONTACT US', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      {/* Top Status Ticker Ribbon */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 mb-2 text-xs font-mono tracking-wider text-slate-700 border-b border-slate-200/80 pb-2">
        <div className="flex items-center space-x-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span className="text-blue-700 font-bold uppercase">LIVE FIELD STATUS:</span>
          <span className="text-slate-800 font-medium">250+ Promoters Active Across Bengaluru, Hyderabad, Chennai & Vizag</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1 text-slate-700 hover:text-blue-700 font-medium transition-colors cursor-pointer">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>GPS Geo-Fenced Reporting Active</span>
          </span>
          <span className="text-slate-300">|</span>
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-1 text-slate-800 hover:text-blue-700 font-bold transition-colors">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with Actual Image Asset */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-md shadow-slate-900/10 border border-slate-200 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/Logo.jpeg"
              alt="Velocity Marketing"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              VELOCITY <span className="font-semibold text-slate-500 text-sm">MARKETING</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-blue-700 font-mono font-bold">
              On-Ground Execution Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm text-slate-700 hover:text-blue-600 font-semibold tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenQuote}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-800 hover:text-blue-600 py-2.5 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
};
