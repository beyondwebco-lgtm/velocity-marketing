import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CoverageNetwork } from './components/CoverageNetwork';
import { ClientEcosystem } from './components/ClientEcosystem';
import { WhyUsAndContact } from './components/WhyUsAndContact';
import { ProposalModal } from './components/ProposalModal';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { ProcessAndTouchpoints } from './components/ProcessAndTouchpoints';
import { IndustriesGrid } from './components/IndustriesGrid';
import { HowWeDeliver } from './components/HowWeDeliver';
import { ServicesProcessPage } from './pages/ServicesProcessPage';

const HomePage = ({ handleOpenQuote }) => (
  <main>
    <Hero onOpenQuote={handleOpenQuote} />
    <ClientEcosystem onOpenQuote={handleOpenQuote} />
    <AboutSection />
    <ProcessAndTouchpoints />
    <Services onOpenQuote={handleOpenQuote} />
    <IndustriesGrid />
    <HowWeDeliver />
    <CoverageNetwork onOpenQuote={handleOpenQuote} />
    <WhyUsAndContact onOpenQuote={handleOpenQuote} />
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
        <Route path="/process" element={<ServicesProcessPage onOpenQuote={handleOpenQuote} />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Campaign Proposal Modal */}
      <ProposalModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}

export default App;
