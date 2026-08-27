import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Infrastructure() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      code: 'LVL-01-WET',
      title: 'Level 01: Botanical Extraction & Wet Processing',
      badge: 'GROUND FLOOR • EXTRACTION & LIQUIDS',
      desc: 'Dedicated heavy processing floor equipped with falling-film vacuum evaporators, hydro-alcoholic percolation loops, rotary die softgel encapsulation suites, continuous gummy setting tunnels, and fresh herbal swaras juice extraction.',
      rooms: [
        'Botanical Percolation & Solvent Extraction Loop Suites',
        'Vacuum Falling-Film Solvent Recovery Hall',
        '8-Inch Rotary Die Softgel Encapsulation Suite',
        'Continuous Pectin Gummy Cooking & Setting Tunnels',
        'Steam-Jacketed Pravahi Kwath Decoction Vessels',
        'Aseptic Liquid Bottling & Capping Cleanroom'
      ]
    },
    {
      level: 2,
      code: 'LVL-02-SLD',
      title: 'Level 02: Solid Oral Dosage & <20% RH Suite',
      badge: 'FIRST FLOOR • COMPRESSION & DRYING',
      desc: 'Engineered for high-volume powder handling and tableting. Includes rapid high-shear granulators, fluid bed dryers (FBD), multi-station rotary tablet presses, automated coating pans, and an isolated <20% RH low-humidity room for effervescents.',
      rooms: [
        'High-Shear Wet Granulation & Fluid Bed Drying (FBD)',
        'Multi-Station High-Speed Rotary Tablet Presses',
        'Automated Perforated Pan Aqueous Film Coating',
        'Automatic Vegetarian (HPMC) Capsule Filling Hall',
        'Dedicated <20% RH Climate-Controlled Effervescent Suite',
        'In-Process Quality Control (IPQC) Core Laboratory'
      ]
    },
    {
      level: 3,
      code: 'LVL-03-PKG',
      title: 'Level 03: High-Speed Packaging & QC Testing Labs',
      badge: 'SECOND FLOOR • PACKAGING & ANALYTICAL',
      desc: 'Houses automated packaging lines (Alu-Alu blister packaging, bottle induction sealing, sachet filling) alongside our analytical testing laboratory, microbiology isolation suites, stability chambers, and corporate offices.',
      rooms: [
        'High-Speed Thermoforming & Alu-Alu Blister Packing',
        'Automated Bottle Desiccant, Count & Induction Sealing',
        'Stick Pack & Sachet Vertical Form Fill Seal (VFFS)',
        'HPLC, HPTLC & FTIR Instrumental Testing Laboratories',
        'Class 10,000 Microbiology Inoculation & Bioburden Testing',
        'ICH Q1A Stability Chambers & Corporate Directorate'
      ]
    }
  ];

  const currentData = levels.find((l) => l.level === selectedLevel);

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          tag="SECTION 03 // INFRASTRUCTURE"
          badge="[ CAMPUS MASTERPLAN ]"
          headlineMain="~78,000 Sq. Ft. Integrated Campus."
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
        <div className="flex items-center gap-6 border-b border-slate-300 pb-4 mb-16">
          <span className="monogram-badge">FACILITY BLUEPRINT // 3-TIER</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ ZONING SCHEMATIC ]</span>
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
              <div className="font-architekt text-xs uppercase tracking-widest font-bold mb-2 opacity-80 flex items-center justify-between">
                <span>[ LEVEL 0{lvl.level} ]</span>
                <span>{lvl.code}</span>
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
              <span className="monogram-badge-dark">
                {currentData.badge}
              </span>
              <h2 className="font-architekt font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase">
                {currentData.title}
              </h2>
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
              [ ZONED CLEANROOM SUITES & OPERATIONAL SECTORS ]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.rooms.map((room, rIdx) => (
                <div
                  key={rIdx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-[#00D2FF] hover:bg-white/10 transition-colors"
                >
                  <span className="font-architekt text-[#00D2FF] text-sm">[{rIdx + 1 < 10 ? `0${rIdx + 1}` : rIdx + 1}]</span>
                  <span className="font-telegraf text-sm sm:text-base text-slate-200">{room}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. HVAC & UTILITIES TECHNICAL SPECIFICATIONS */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="flex items-center gap-6 border-b border-slate-300 pb-4 mb-16">
          <span className="monogram-badge">UTILITY ENGINEERING // SPECS</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
          <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ ENVIRONMENTAL CONTROL ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 01 / HVAC ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">HEPA Cleanroom Air</h3>
            <p className="font-telegraf text-slate-600 text-sm md:text-base leading-relaxed">
              AHU systems equipped with 0.3-micron terminal HEPA filtration ensuring positive air pressure and 20+ air changes per hour to prevent airborne particulate ingress.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 02 / WATER ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">USP Purified Water Loop</h3>
            <p className="font-telegraf text-slate-600 text-sm md:text-base leading-relaxed">
              Continuous circulation pharmaceutical water system utilizing double-pass reverse osmosis (RO) and EDI with sanitizing UV lamp arrays.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 03 / CLIMATE ]</div>
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
