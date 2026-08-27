import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function InfrastructureV2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilitySpecs = [
    { label: 'Campus Footprint', value: '~78,000 Sq. Ft.', sub: 'Multi-level cGMP Manufacturing Complex' },
    { label: 'Air Handling', value: 'Class 10,000 / ISO 7', sub: 'HEPA 0.3μ Filtration with Positive Pressure' },
    { label: 'Analytical Testing', value: 'HPLC • GC-MS • ICP-MS', sub: 'In-House Physical, Chemical & Microbiological Labs' },
    { label: 'Water Quality', value: 'USP Purified Water', sub: 'Multi-Stage RO + Continuous Electrodeionization' }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#030914] min-h-screen pt-40 pb-36 px-8 sm:px-12 lg:px-20 grid-laboratory">
      
      {/* Header */}
      <div className="max-w-[1720px] mx-auto space-y-10 border-b border-slate-200 pb-24">
        <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
          CAMPUS & CLEANROOMS
        </div>
        <h1 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#030914] uppercase tracking-tight leading-none">
          Industrial Campus Infrastructure
        </h1>
        <p className="font-telegraf text-slate-600 text-xl lg:text-2xl font-light max-w-3xl leading-relaxed">
          State-of-the-art cGMP facility located in Jaipur, Rajasthan, purpose-built for pharmaceutical-grade botanical extraction and high-capacity nutraceutical scaling.
        </p>
      </div>

      {/* Campus Metrics Grid */}
      <div className="max-w-[1720px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {facilitySpecs.map((spec, i) => (
          <div key={i} className="glass-cleanroom-card rounded-2xl p-8 space-y-3">
            <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-wider font-bold">{spec.label}</div>
            <div className="font-architekt text-3xl font-bold text-[#030914] uppercase">{spec.value}</div>
            <div className="font-telegraf text-slate-500 text-sm font-light leading-relaxed">{spec.sub}</div>
          </div>
        ))}
      </div>

      {/* Visual Cleanroom Gallery */}
      <div className="max-w-[1720px] mx-auto py-20 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 aspect-video shadow-md">
              <img
                src="/assets/generated/has_cleanroom_hero_1787739262235.jpg"
                alt="HAS Cleanroom Suites"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-architekt text-2xl text-[#030914] uppercase">Automated Cleanroom Suites</h3>
            <p className="font-telegraf text-slate-600 font-light leading-relaxed">
              Equipped with computerized batch tracking and validated automated HVAC air-locks to prevent cross-contamination.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 aspect-video shadow-md">
              <img
                src="/assets/generated/has_analytical_hplc_lab_1787820264292.jpg"
                alt="Analytical HPLC QC Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-architekt text-2xl text-[#030914] uppercase">Analytical HPLC & Stability Chambers</h3>
            <p className="font-telegraf text-slate-600 font-light leading-relaxed">
              Real-time active compound quantification, ICH-guideline accelerated stability testing, and batch release certification.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-[1720px] mx-auto pt-16 text-center">
        <Link to="/contact" className="btn-v2-primary">
          <span>Schedule an In-Person Campus Audit</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
