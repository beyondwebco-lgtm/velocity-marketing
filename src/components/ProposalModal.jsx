import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { SERVICES } from '../data/contentData';

export const ProposalModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: SERVICES[0].title,
    cities: ['Bengaluru'],
    timeline: 'Immediate (< 2 Weeks)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full rounded-3xl p-8 border border-slate-200 shadow-2xl relative space-y-6 animate-in zoom-in-95 duration-200 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close Proposal Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-mono text-blue-700 font-extrabold uppercase tracking-widest">
                CAMPAIGN DISPATCH PROPOSAL REQUEST
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Configure Your Execution Scope
              </h3>
              <p className="text-xs text-slate-600 font-normal mt-1">
                Fill in your campaign parameters. Our South India operations team will send a tailored pitch deck & estimate within 2 hours.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-800 font-bold block mb-1">YOUR NAME *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Vikram Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-600 focus:bg-white outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-800 font-bold block mb-1">BRAND / COMPANY NAME *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Flipkart / Zepto"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-600 focus:bg-white outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-800 font-bold block mb-1">OFFICIAL EMAIL *</label>
                <input
                  required
                  type="email"
                  placeholder="vikram@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-600 focus:bg-white outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-800 font-bold block mb-1">PHONE / WHATSAPP *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-600 focus:bg-white outline-none transition-colors font-medium"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="text-xs font-mono text-slate-800 font-bold block mb-2">PRIMARY SERVICE VERTICAL</label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-blue-600 outline-none font-medium"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="text-xs font-mono text-slate-800 font-bold block mb-1">CAMPAIGN OBJECTIVES / SCOPE NOTES</label>
              <textarea
                rows={3}
                placeholder="Mention target locations, duration, promoter count or specific POSM requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:border-blue-600 focus:bg-white outline-none transition-colors font-medium"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2"
            >
              <span>Submit & Generate Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Proposal Request Received!</h3>
            <p className="text-slate-700 text-sm max-w-md mx-auto font-normal leading-relaxed">
              Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our South India Campaign Director for <span className="text-blue-700 font-bold">{formData.company}</span> has been notified and will reach out via WhatsApp & Email within 2 hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs font-mono text-slate-700 font-medium">
              <div>✓ Assigned Hub: Bengaluru / Regional Ops</div>
              <div>✓ Live Audit Dashboard Credentials: Will be shared via email</div>
            </div>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-xs font-mono font-bold"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
