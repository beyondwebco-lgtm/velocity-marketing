import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProposalModal } from './components/ProposalModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(module => ({ default: module.AboutUsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(module => ({ default: module.ProcessPage })));
const CoverageNetwork = lazy(() => import('./components/CoverageNetwork').then(module => ({ default: module.CoverageNetwork })));
const ClientEcosystem = lazy(() => import('./components/ClientEcosystem').then(module => ({ default: module.ClientEcosystem })));
const StatisticsSection = lazy(() => import('./components/StatisticsSection').then(module => ({ default: module.StatisticsSection })));
const IndustriesGrid = lazy(() => import('./components/IndustriesGrid').then(module => ({ default: module.IndustriesGrid })));
const HowWeDeliver = lazy(() => import('./components/HowWeDeliver').then(module => ({ default: module.HowWeDeliver })));
const WhyUs = lazy(() => import('./components/WhyUsAndContact').then(module => ({ default: module.WhyUs })));
const ContactSection = lazy(() => import('./components/WhyUsAndContact').then(module => ({ default: module.ContactSection })));
// Helper wrapper to defer loading until component is near viewport
const IntersectionDeferred = ({ children, height = '300px' }) => {
  const [load, setLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {load ? children : <div style={{ height }} className="bg-transparent" />}
    </div>
  );
};

const HomePage = ({ handleOpenQuote }) => (
  <main>
    <Hero onOpenQuote={handleOpenQuote} />
    
    <IntersectionDeferred height="800px">
      <Suspense fallback={<div className="h-96" />}>
        <div id="about">
          <AboutUsPage isStandalone={false} />
        </div>
      </Suspense>
    </IntersectionDeferred>

    <div id="services">
      <IntersectionDeferred height="800px">
        <Suspense fallback={<div className="h-96" />}>
          <Services onOpenQuote={handleOpenQuote} />
        </Suspense>
      </IntersectionDeferred>
      <IntersectionDeferred height="800px">
        <Suspense fallback={<div className="h-96" />}>
          <ServicesPage isStandalone={false} />
        </Suspense>
      </IntersectionDeferred>
    </div>

    <IntersectionDeferred height="600px">
      <Suspense fallback={<div className="h-96" />}>
        <div id="process">
          <ProcessPage isStandalone={false} />
        </div>
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="400px">
      <Suspense fallback={<div className="h-96" />}>
        <IndustriesGrid />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="500px">
      <Suspense fallback={<div className="h-96" />}>
        <HowWeDeliver />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="500px">
      <Suspense fallback={<div className="h-[500px] bg-slate-100 animate-pulse rounded-3xl" />}>
        <CoverageNetwork onOpenQuote={handleOpenQuote} />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="300px">
      <Suspense fallback={<div className="h-96" />}>
        <StatisticsSection />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="400px">
      <Suspense fallback={<div className="h-96" />}>
        <WhyUs />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="300px">
      <Suspense fallback={<div className="h-96" />}>
        <ClientEcosystem onOpenQuote={handleOpenQuote} />
      </Suspense>
    </IntersectionDeferred>

    <IntersectionDeferred height="400px">
      <Suspense fallback={<div className="h-96" />}>
        <ContactSection onOpenQuote={handleOpenQuote} />
      </Suspense>
    </IntersectionDeferred>
  </main>
);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    // Note: The timer is now handled inside Preloader component
    // We do not set isLoading(false) here immediately.
  }, []);

  const handlePreloaderDone = () => {
    setIsLoading(false);
  };

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Brand Preloader displaying logo during initial site load */}
      {isLoading && <Preloader onLoaded={handlePreloaderDone} />}

      {/* Global Navigation Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage handleOpenQuote={handleOpenQuote} />} />
        <Route path="/about" element={<Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}><AboutUsPage /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}><ServicesPage /></Suspense>} />
        <Route path="/process" element={<Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}><ProcessPage /></Suspense>} />
      </Routes>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Interactive Campaign Proposal Modal */}
      <ProposalModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}

export default App;
