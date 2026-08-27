import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function ContractManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { num: '01', code: 'STEP 01', title: 'Product Brief & Target Formula', desc: 'Define active botanical markers, delivery platform (softgels, gummies, effervescents), target dosage, and regulatory market requirements.' },
    { num: '02', code: 'STEP 02', title: 'Phytochemical Feasibility Review', desc: 'Assess ingredient compatibility, solubility parameters, bioavailability enhancers, and thermolabile stability factors.' },
    { num: '03', code: 'STEP 03', title: 'Laboratory Pilot Batch (1–5 kg)', desc: 'Formulate initial benchtop prototypes, optimize viscosity, moisture binding, and test active ingredient dispersion.' },
    { num: '04', code: 'STEP 04', title: 'Organoleptic & Taste Masking', desc: 'Advanced flavor engineering to neutralize bitter botanical astringency without synthetic aftertastes or compromising bioactivity.' },
    { num: '05', code: 'STEP 05', title: 'Client Prototype Sign-Off', desc: 'Physical sample submission for sensory, visual, dissolution, and initial client assay validation.' },
    { num: '06', code: 'STEP 06', title: 'Regulatory Dossier & Compliance', desc: 'Formulation compliance check against FSSAI, AYUSH, or target international export regulatory monographs.' },
    { num: '07', code: 'STEP 07', title: 'Pilot Commercial Scale-Up', desc: 'Transfer formulation to pilot industrial equipment (50–100 kg) to establish critical process parameters (CPPs).' },
    { num: '08', code: 'STEP 08', title: 'Analytical Assay & Stability Initiation', desc: 'HPLC potency quantification, heavy metals check, and ICH Q1A stability chamber sample placement.' },
    { num: '09', code: 'STEP 09', title: 'Commercial Cleanroom Run', desc: 'Full batch production execution under automated cGMP cleanroom parameters with in-line IPQC monitoring.' },
    { num: '10', code: 'STEP 10', title: 'QP Quality Release & Dispatch', desc: 'Batch Manufacturing Record (BMR) sign-off, Certificate of Analysis (CoA) generation, and climate-controlled dispatch.' }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          tag="SECTION 04 • CDMO PIPELINE"
          badge="TURNKEY WORKFLOW"
          headlineMain="10-Step CDMO Methodology."
          description="A structured, risk-mitigated formulation and commercialization roadmap designed to take complex botanical concepts from laboratory bench to high-volume commercial scale."
          primaryBtnText="Explore CDMO Steps"
          primaryBtnLink="#roadmap"
          secondaryBtnText="Initiate Project Brief"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_cleanroom_hero_1787739262235.jpg"
        />
      </section>

      {/* 2. 10-STEP ROADMAP */}
      <section id="roadmap" className="max-w-[1800px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="flex items-center gap-6 border-b border-slate-300 pb-4 mb-16">
          <span className="monogram-badge">METHODOLOGY ROADMAP</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">10 CRITICAL STAGES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                  <span className="font-architekt text-3xl font-bold text-[#0052FF]">
                    {s.num}
                  </span>
                  <span className="font-architekt text-xs uppercase tracking-widest text-slate-400">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-architekt font-bold text-2xl text-[#030914] mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="font-telegraf text-slate-600 text-sm sm:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 font-architekt text-xs text-[#0052FF]">
                <span>STAGE VERIFIED</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGAGEMENT MODELS */}
      <section className="py-28 px-6 md:px-16 bg-[#030914] text-white">
        <div className="max-w-[1800px] mx-auto space-y-16">
          
          <div className="flex items-center gap-6 border-b border-white/20 pb-4">
            <span className="monogram-badge-dark">ENGAGEMENT MODELS</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">B2B CONTRACTING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 space-y-6 hover:border-[#00D2FF] transition-colors">
              <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">MODEL 01 • TURNKEY</div>
              <h3 className="font-architekt font-bold text-3xl text-white">Turnkey Formulation & Manufacturing</h3>
              <p className="font-telegraf text-slate-300 text-base leading-relaxed">
                Complete end-to-end management: we source standardized raw botanical extracts, develop pilot prototypes, manage stability and regulatory documentation, manufacture in cleanrooms, and provide final blister/bottle packaging.
              </p>
              <div className="pt-4">
                <Link to="/partner" className="colossal-big-button light">
                  <span>Inquire Turnkey</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>

            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 space-y-6 hover:border-[#00D2FF] transition-colors">
              <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">MODEL 02 • TOLLING</div>
              <h3 className="font-architekt font-bold text-3xl text-white">Loan License & Dedicated Tolling</h3>
              <p className="font-telegraf text-slate-300 text-base leading-relaxed">
                For established pharmaceutical and consumer health enterprises with proprietary pre-tested formulations looking for dedicated cleanroom capacity, high-speed rotary die encapsulation, and batch scale-up.
              </p>
              <div className="pt-4">
                <Link to="/partner" className="colossal-big-button light">
                  <span>Inquire Tolling</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
