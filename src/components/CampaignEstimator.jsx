import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { CountUp } from './CountUp';
import { MotionSection } from './MotionWrapper';

export const CampaignEstimator = ({ onOpenQuote }) => {
  const [campaignType, setCampaignType] = useState('sampling');
  const [cityCount, setCityCount] = useState(3);
  const [durationDays, setDurationDays] = useState(7);

  // Estimator logic
  const baseStaffPerCity = campaignType === 'sampling' ? 8 : campaignType === 'retail' ? 12 : 15;
  const estimatedStaff = baseStaffPerCity * cityCount;
  const estimatedTouchpoints = estimatedStaff * durationDays * (campaignType === 'sampling' ? 120 : 60);

  return (
    <MotionSection id="estimator" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Campaign Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              MODEL YOUR <br />
              <span className="text-gradient-blue">ON-GROUND CAMPAIGN.</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
              Use our interactive calculator to model promoter workforce strength, estimated customer touchpoints, and timeline requirements for your brand activation.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs font-mono text-slate-800 shadow-sm font-medium">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Includes real-time GPS tracking dashboard access</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-800 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Includes supervisor oversight & photo reporting</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-800 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>End-to-end municipal & venue permission handling</span>
              </div>
            </div>
          </div>

          {/* Right Column: Estimator Widget Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-8 shadow-2xl shadow-blue-900/5">
              
              {/* Campaign Type Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-800 uppercase tracking-wider font-extrabold">
                  1. SELECT CAMPAIGN TYPE
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'sampling', label: 'Product Sampling' },
                    { id: 'retail', label: 'Retail Merchandising' },
                    { id: 'mall', label: 'Mall & Roadshows' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setCampaignType(type.id)}
                      className={`p-3 rounded-xl text-xs font-mono transition-all border ${
                        campaignType === type.id
                          ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                          : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 font-semibold'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Cities Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-800">
                  <span className="uppercase tracking-wider font-extrabold">2. TARGET CITIES COVERAGE</span>
                  <span className="text-blue-700 font-extrabold">{cityCount} Cities</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={cityCount}
                  onChange={(e) => setCityCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-600 font-semibold">
                  <span>1 Metro Hub</span>
                  <span>5 Cities</span>
                  <span>10+ Pan-South Network</span>
                </div>
              </div>

              {/* Slider 2: Duration */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-800">
                  <span className="uppercase tracking-wider font-extrabold">3. CAMPAIGN DURATION</span>
                  <span className="text-blue-700 font-extrabold">{durationDays} Days</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  value={durationDays}
                  onChange={(e) => setDurationDays(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-600 font-semibold">
                  <span>3 Days (Weekend Launch)</span>
                  <span>14 Days (Standard)</span>
                  <span>30 Days (Full Scale)</span>
                </div>
              </div>

              {/* Output Card */}
              <div data-theme="dark" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 gap-4 text-center text-white">
                <div>
                  <div className="text-xs font-mono text-slate-300 uppercase font-bold">Estimated Operatives</div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    <CountUp key={`staff-${estimatedStaff}`} value={estimatedStaff} duration={800} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Trained Promoters & Leads</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-300 uppercase font-bold">Estimated Touchpoints</div>
                  <div className="text-3xl font-extrabold text-blue-400 mt-1">
                    <CountUp key={`touch-${estimatedTouchpoints}`} value={`${(estimatedTouchpoints / 1000).toFixed(1)}k`} duration={800} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Direct Consumer Impressions</div>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2"
              >
                <span>Request Detailed Breakdown For This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </MotionSection>
  );
};
