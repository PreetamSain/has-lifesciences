import React from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Quality() {
  const steps = [
    { num: '01', code: 'QC-ID-01', title: 'Botanical Voucher Verification', desc: 'Macroscopic, microscopic, and TLC botanical identity fingerprinting against Ayurvedic Pharmacopoeia (API) reference standards.' },
    { num: '02', code: 'QC-MTL-02', title: 'Heavy Metals ICP-MS Screening', desc: 'Trace elemental quantification for Lead (Pb), Cadmium (Cd), Mercury (Hg), and Arsenic (As) adhering strictly to USP <2232> limits.' },
    { num: '03', code: 'QC-PST-03', title: 'Pesticide & Aflatoxin Assay', desc: 'Screening for 100+ organochlorine and organophosphate pesticide residues alongside aflatoxins (B1, B2, G1, G2) and Ochratoxin A.' },
    { num: '04', code: 'QC-BIO-04', title: 'Microbiology & Pathogen Testing', desc: 'Total aerobic microbial count (TAMC), total yeast/mold count (TYMC), and absolute absence of E. coli, Salmonella, and S. aureus in Class 10k cleanrooms.' },
    { num: '05', code: 'QC-IPQC-05', title: 'In-Process Controls (IPQC)', desc: 'Real-time monitoring of granulation moisture loss on drying (LOD), tablet hardness, friability (<1%), disintegration, and softgel ribbon thickness.' },
    { num: '06', code: 'QC-HPLC-06', title: 'HPLC / HPTLC Active Marker Assay', desc: 'High-performance liquid chromatography quantification of key bioactives (Withanolides ≥5%, Curcuminoids ≥95%, Boswellic acids ≥65%).' },
    { num: '07', code: 'QC-LEAK-07', title: 'Packaging Seal & Leak Integrity', desc: 'Methylene blue vacuum desiccator leak testing on Alu-Alu blister cavities, induction seal torque testing on HDPE bottles.' },
    { num: '08', code: 'QC-STAB-08', title: 'ICH Q1A Stability Protocols', desc: 'Real-time and accelerated stability chambers (40°C ± 2°C / 75% RH ± 5% RH) to establish verifiable shelf-life and degradation kinetics.' },
    { num: '09', code: 'QC-REL-09', title: 'Finished Batch QP Release', desc: 'Comprehensive Batch Manufacturing Record (BMR) reconciliation, CoA generation, and formal release by Quality Assurance.' }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          tag="SECTION 05 // QUALITY & QC"
          badge="[ ANALYTICAL PROTOCOL ]"
          headlineMain="9-Stage Quality Framework."
          description="Analytical testing, active marker chromatography, and cGMP batch release protocols ensuring absolute botanical purity and pharmacological consistency."
          primaryBtnText="Explore QC Steps"
          primaryBtnLink="#framework"
          secondaryBtnText="Request Sample CoA"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_analytical_hplc_lab_1787820264292.jpg"
        />
      </section>

      {/* 2. 9-STAGE QUALITY PROTOCOLS (Glass Card Grid) */}
      <section id="framework" className="max-w-[1800px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="flex items-center gap-6 border-b border-slate-300 pb-4 mb-16">
          <span className="monogram-badge">9-STAGE PROTOCOLS // GATES</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ BATCH ASSAY VERIFICATION ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4 group"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-architekt text-3xl font-bold text-[#0052FF] group-hover:scale-110 transition-transform">
                  STAGE [{step.num}]
                </span>
                <span className="font-architekt text-xs text-slate-400">[{step.code}]</span>
              </div>
              <h3 className="font-architekt font-bold text-2xl text-[#030914] leading-tight">
                {step.title}
              </h3>
              <p className="font-telegraf text-slate-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INSTRUMENTAL ANALYTICAL LAB */}
      <section className="py-28 px-6 md:px-16 bg-[#030914] text-white">
        <div className="max-w-[1800px] mx-auto space-y-16">
          
          <div className="flex items-center gap-6 border-b border-white/20 pb-4">
            <span className="monogram-badge-dark">INSTRUMENTAL SUITES</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">[ TESTING LABS ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-architekt text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.04]">
                Chromatographic & Microbial Integrity
              </h2>
              <p className="font-telegraf text-slate-300 text-lg sm:text-xl leading-relaxed">
                Our in-house analytical testing laboratories feature high-precision instrumentation for phytochemical assay quantification, dissolution kinetics, and bioburden screening.
              </p>

              <div className="pt-4">
                <Link to="/partner" className="colossal-big-button light">
                  <span>Schedule Technical Audit</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D2FF] transition-colors">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">[ HPLC & UPLC ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">High-Performance Liquid Chromatography</h4>
                <p className="font-telegraf text-xs text-slate-400">Quantification of Withanolides, Curcumin, and secondary botanical metabolites.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D2FF] transition-colors">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">[ HPTLC ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">High-Performance Thin Layer Chromatography</h4>
                <p className="font-telegraf text-xs text-slate-400">Botanical fingerprinting and identification against pharmacopoeial monographs.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D2FF] transition-colors">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">[ FTIR ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">Fourier-Transform Infrared Spectrometry</h4>
                <p className="font-telegraf text-xs text-slate-400">Raw material excipient validation and molecular structure verification.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D2FF] transition-colors">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">[ STABILITY ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">ICH Climatic Chambers</h4>
                <p className="font-telegraf text-xs text-slate-400">Accelerated & real-time stability testing for multi-zone global compliance.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
