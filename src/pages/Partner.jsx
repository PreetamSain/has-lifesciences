import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Partner() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    dosageFormat: 'Softgel Encapsulation',
    targetActive: '',
    estimatedVolume: 'Pilot Scale (50-100 kg)',
    timeline: '3-6 Months',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const formats = [
    'Standardized Extraction',
    'Softgel Encapsulation',
    'Nutraceutical Gummies',
    'Low-Humidity Effervescents',
    'Tablets & Capsules',
    'Pravahi Kwath Liquids',
    'Complete Turnkey Development'
  ];

  const volumes = [
    'R&D Lab Batch (1-5 kg)',
    'Pilot Scale (50-100 kg)',
    'Commercial Run (500-2,000 kg)',
    'Industrial Scale (5,000+ kg)'
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
          tag="SECTION 08 // PROJECT INTAKE"
          badge="[ CDMO ENGAGEMENT ]"
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
          <span className="monogram-badge">PROJECT INTAKE // HAS-FORM-08</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ TECHNICAL SPECIFICATION SHEET ]</span>
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
                [ Submit Another Project Brief ]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Form Section 1: Organization & Contact */}
              <div className="space-y-6">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold border-b border-slate-200 pb-3">
                  01 // ORGANIZATION & PRINCIPAL CONTACT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Company / Brand Entity *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pure Botanics Global Ltd."
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
                      placeholder="e.g. aryan@purebotanics.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
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
                  02 // TARGET DOSAGE DELIVERY FORMAT
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
                  03 // FORMULATION & VOLUME PARAMETERS
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
                      Estimated Initial Batch Volume
                    </label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                    >
                      {volumes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-architekt uppercase tracking-wider text-[#030914] mb-2">
                    Project Notes / Special Technical Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on target markets, regulatory requirements (FSSAI/AYUSH/US FDA), packaging format, or stability parameters..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-300 text-[#030914] text-sm focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 font-telegraf"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="colossal-big-button w-full sm:w-auto cursor-pointer"
                >
                  <span>Transmit Technical Project Brief</span>
                  <span className="plus-icon">+</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

    </div>
  );
}
