import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Upload } from 'lucide-react';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    dosageFormat: 'Softgel Encapsulation',
    targetActive: '',
    batchVolume: '',
    timeline: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const formats = [
    'Botanical Extraction',
    'Softgel Encapsulation',
    'Pectin / Gelatin Gummies',
    'Effervescent Tablets',
    'Bilayer & Solid Tablets',
    'Ayurvedic Liquid / Kwath',
    'Multiple Dosage Formats'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          tag="SECTION 08 • PROJECT INTAKE"
          badge="CDMO ENGAGEMENT"
          headlineMain="Initiate A Formulation Project."
          description="Submit your product specifications, target botanical actives, dosage format, and volume requirements to our technical formulation team."
          primaryBtnText="Complete Project Intake"
          primaryBtnLink="#intake-form"
          secondaryBtnText="Corporate Desk"
          secondaryBtnLink="/contact"
          bgImage="/assets/generated/has_campus_hero_1787739337547.jpg"
        />
      </section>

      {/* 2. TECHNICAL PROJECT INTAKE FORM */}
      <section id="intake-form" className="max-w-[1400px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="flex items-center gap-6 border-b border-slate-300 pb-4 mb-16">
          <span className="monogram-badge">PROJECT INTAKE</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">TECHNICAL SPECIFICATION SHEET</span>
        </div>

        <div className="glass-light rounded-[44px] p-8 sm:p-14 md:p-20 shadow-2xl">
          {submitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-architekt font-bold text-4xl sm:text-5xl text-[#030914] uppercase">
                Intake Transmitted
              </h2>
              <p className="font-telegraf text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
                Your technical formulation brief has been assigned to our CDMO Business Development & Phytochemistry desk. A scientific representative will review feasibility and respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-10 py-4 rounded-full bg-[#0052FF] text-white font-architekt text-xs uppercase tracking-widest hover:bg-[#0036B3] transition-colors shadow-lg"
              >
                Submit Another Project Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Form Section 1: Organization & Contact */}
              <div className="space-y-6">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold border-b border-slate-200 pb-3">
                  01 • ORGANIZATION & PRINCIPAL CONTACT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Phytomed Global Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.sharma@phytomed.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Direct Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>
                </div>
              </div>

              {/* Form Section 2: Dosage Platform Selection */}
              <div className="space-y-6">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold border-b border-slate-200 pb-3">
                  02 • TARGET DOSAGE DELIVERY FORMAT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formats.map((fmt) => (
                    <button
                      type="button"
                      key={fmt}
                      onClick={() => setFormData({ ...formData, dosageFormat: fmt })}
                      className={`p-5 rounded-2xl border text-left font-architekt text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        formData.dosageFormat === fmt
                          ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-md font-bold'
                          : 'bg-white text-[#030914] border-slate-300 hover:border-[#0052FF]'
                      }`}
                    >
                      {formData.dosageFormat === fmt ? '● ' : '○ '} {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Section 3: Batch Volume & Actives */}
              <div className="space-y-6">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold border-b border-slate-200 pb-3">
                  03 • FORMULATION & VOLUME PARAMETERS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Target Botanical Actives & Markers
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ashwagandha 5% Withanolides, Curcumin 95%"
                      value={formData.targetActive}
                      onChange={(e) => setFormData({ ...formData, targetActive: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Anticipated Commercial Batch Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 50,000 units / month"
                      value={formData.batchVolume}
                      onChange={(e) => setFormData({ ...formData, batchVolume: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                    Project Scope, Delivery Specifications & Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on bioavailability goals, organic certifications, packaging requirements (blister vs bottle), or export destinations..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-xs text-slate-500 font-telegraf">
                  * All technical submissions are governed by our mutual non-disclosure and confidentiality protocol.
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#0052FF] hover:bg-[#0036B3] text-white font-architekt text-xs uppercase tracking-widest font-bold transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Transmit Technical Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

    </div>
  );
}
