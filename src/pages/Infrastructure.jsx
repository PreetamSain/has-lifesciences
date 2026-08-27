import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: 'Ground Floor: Extraction & Bulk Materials',
      desc: 'Heavy botanical pulverization, SS316 solvent extraction batteries, falling-film vacuum evaporation, raw botanical quarantine storage, and cold-chain storage suites.',
      rooms: [
        'Botanical Raw Herb Cleaning & Milling Suite',
        'Falling-Film Vacuum Evaporator Hall',
        'Closed-Loop Ethanol & Aqueous Extraction Battery',
        'Steam-Jacketed Classical Decoction Units',
        'Raw Material Quarantine & Controlled Cold Storage',
        'Hazardous Solvent Recovery & Waste Treatment Facility'
      ]
    },
    {
      level: 2,
      title: 'First Floor: Cleanroom Suites & Formulations',
      desc: 'Class 10,000 / ISO 7 cleanroom suites housing rotary die softgel encapsulation, low-humidity effervescent tableting, functional gummy mogul depositors, and tablet compression.',
      rooms: [
        'Rotary Die Softgel Encapsulation Cleanrooms',
        'Softgel Tumble Drying & Inspection Tunnels',
        '<20% RH Desiccant Effervescent Tableting Suite',
        'Continuous Starchless Gummy Depositing Line',
        'High-Speed Bilayer Tablet Rotary Compression',
        'Aqueous & Enteric Tablet Film Coating Suite'
      ]
    },
    {
      level: 3,
      title: 'Second Floor: Packaging & Analytical Testing Labs',
      desc: 'Automated barrier packaging lines (Alu-Alu blister, HDPE bottling, stick-packs) integrated alongside Agilent HPLC analytical laboratories, Class 10k microbiology, and corporate offices.',
      rooms: [
        'High-Speed Rotary Alu-Alu Blister Packaging',
        'Automated HDPE & Amber Glass Bottling Line',
        'Multi-Lane Effervescent Desiccant Tube Filling',
        'Analytical Phyto-Chemistry Lab (Agilent HPLC & HPTLC)',
        'Class 10,000 Sterility & Microbiology Suite',
        'ICH Q1A Stability Chambers (Real-time & Accelerated)'
      ]
    }
  ];

  const currentData = levels.find((l) => l.level === selectedLevel) || levels[0];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="78,000 Sq. Ft. Manufacturing Campus | Jaipur | HAS Lifesciences"
        description="Explore the HAS Lifesciences ~78,000 sq. ft. 3-level pharmaceutical and botanical manufacturing campus in Jaipur, Rajasthan. Class 10,000 cleanrooms, HPLC testing labs, and <20% RH effervescent suites."
        keywords="Pharma Manufacturing Plant Jaipur, cGMP Facility Rajasthan, Cleanroom Manufacturing Campus, 78000 sq ft CDMO Plant, Ayush GMP Factory Jaipur, HAS Lifesciences Campus"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="~78,000 Sq. Ft. Manufacturing Campus."
          description="A multi-tier pharmaceutical and botanical manufacturing campus engineered from the ground up for strict zoning, zero cross-contamination, and high-throughput commercial scale."
          primaryBtnText="Explore Blueprint"
          primaryBtnLink="#blueprint"
          secondaryBtnText="Audit Facility Desk"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_campus_hero_1787739337547.jpg"
        />
      </section>

      {/* 2. INTERACTIVE 3-LEVEL BLUEPRINT EXPLORER */}
      <section id="blueprint" className="max-w-[1800px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            Zoned Facility Architecture
          </h2>
        </div>

        {/* Level Switcher Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {levels.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl.level)}
              className={`p-8 rounded-3xl border text-left transition-all duration-300 cursor-pointer ${
                selectedLevel === lvl.level
                  ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-2xl shadow-blue-500/25 scale-[1.02]'
                  : 'glass-light text-[#030914] border-slate-300 hover:border-[#0052FF]'
              }`}
            >
              <div className="font-architekt text-xs uppercase tracking-widest font-bold mb-2 opacity-80">
                Floor 0{lvl.level}
              </div>
              <div className="font-architekt font-bold text-2xl">
                {lvl.level === 1 ? 'Extraction & Liquids' : lvl.level === 2 ? 'Solids & Effervescents' : 'Packaging & Labs'}
              </div>
            </button>
          ))}
        </div>

        {/* Active Level Detail Display */}
        <div className="rounded-[44px] bg-[#030914] text-white p-8 sm:p-14 md:p-20 border border-slate-800 shadow-2xl space-y-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0052FF]/15 blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start justify-between border-b border-white/15 pb-12 relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-architekt font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase">
                {currentData.title}
              </h3>
              <p className="font-telegraf text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                {currentData.desc}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="colossal-disc border-white/30">
                <div className="colossal-dot-cyan" />
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="space-y-6 relative z-10">
            <div className="font-architekt text-xs uppercase text-white/50 tracking-widest">
              ZONED SUITES & OPERATIONAL SECTORS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.rooms.map((room, rIdx) => (
                <div
                  key={rIdx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-[#00D2FF] hover:bg-white/10 transition-colors"
                >
                  <span className="font-architekt text-[#00D2FF] text-sm">{rIdx + 1 < 10 ? `0${rIdx + 1}` : rIdx + 1}</span>
                  <span className="font-telegraf text-sm sm:text-base text-slate-200">{room}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. HVAC & UTILITIES TECHNICAL SPECIFICATIONS */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            Environmental Control & Purity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">01</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">HEPA Cleanroom Air</h3>
            <p className="font-telegraf text-slate-600 text-sm md:text-base leading-relaxed">
              AHU systems equipped with 0.3-micron terminal HEPA filtration ensuring positive air pressure and 20+ air changes per hour to prevent airborne particulate ingress.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">02</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">USP Purified Water Loop</h3>
            <p className="font-telegraf text-slate-600 text-sm md:text-base leading-relaxed">
              Continuous circulation pharmaceutical water system utilizing double-pass reverse osmosis (RO) and EDI with sanitizing UV lamp arrays.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">03</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">&lt;20% RH Dehumidification</h3>
            <p className="font-telegraf text-slate-600 text-sm md:text-base leading-relaxed">
              Desiccant rotor dehumidification for our effervescent and moisture-reactive encapsulation suites, guaranteeing product chemical stability.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
