import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CoverageNetwork } from './components/CoverageNetwork';
import { ClientEcosystem } from './components/ClientEcosystem';
import { WhyUs, ContactSection } from './components/WhyUsAndContact';
import { ProposalModal } from './components/ProposalModal';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { IndustriesGrid } from './components/IndustriesGrid';
import { HowWeDeliver } from './components/HowWeDeliver';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StatisticsSection } from './components/StatisticsSection';
import { ProcessSection } from './components/ProcessSection';

const HomePage = ({ handleOpenQuote }) => (
  <main>
    <Hero onOpenQuote={handleOpenQuote} />
    <div id="about">
      <AboutUsPage isStandalone={false} />
    </div>
    <div id="services">
      <Services />
      <ServicesPage isStandalone={false} />
    </div>
    <div id="process">
      <ProcessPage isStandalone={false} />
    </div>
    <IndustriesGrid />
    <HowWeDeliver />
    <CoverageNetwork onOpenQuote={handleOpenQuote} />
    <StatisticsSection />
    <WhyUs />
    <ClientEcosystem onOpenQuote={handleOpenQuote} />
    <ContactSection onOpenQuote={handleOpenQuote} />
  </main>
);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    // Show Preloader with brand logo on initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Brand Preloader displaying logo during initial site load */}
      {isLoading && <Preloader />}

      {/* Global Navigation Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage handleOpenQuote={handleOpenQuote} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
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
