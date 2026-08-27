import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Plus, ShieldCheck, Microscope, Layers, Sparkles, Activity, Dna, Compass } from 'lucide-react';

export default function Home() {
  const [activeFloor, setActiveFloor] = useState(1);

  const platforms = [
    {
      num: '02A',
      code: 'EXT-VAC-01',
      title: 'Standardized Botanical Extraction',
      category: 'PHYTOCHEMISTRY & ACTIVE ISOLATION',
      desc: 'Hydro-alcoholic percolation loops, low-temperature vacuum falling-film evaporation, and vacuum shelf drying to preserve delicate, thermolabile bioactive withanolides and curcuminoids.',
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg',
      badge: 'HPLC STANDARDIZED',
      spec: 'BIOACTIVES: ≥95% PURITY',
      link: '/capabilities#extraction'
    },
    {
      num: '02B',
      code: 'SFT-ROT-02',
      title: 'Rotary Die Softgel Encapsulation',
      category: 'LIPID & BOTANICAL OIL DELIVERY',
      desc: 'Planned 8-inch high-speed rotary die encapsulation engineered for botanical extracts, omega fatty acids, and fat-soluble vitamins in gelatin and 100% vegetarian plant-based shells.',
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg',
      badge: 'HERMETIC SEALING',
      spec: 'ACCURACY: ±1.5% FILL',
      link: '/capabilities#softgels'
    },
    {
      num: '02C',
      code: 'GUM-PCT-03',
      title: 'Nutraceutical Gummies Suite',
      category: 'CONSUMER WELLNESS FORMATS',
      desc: 'Precision temperature-controlled continuous cooking and multi-nozzle depositing for 100% vegan pectin and gelatin functional wellness gummies with clean active dosing.',
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg',
      badge: '100% VEGAN PECTIN',
      spec: 'TEXTURE: STARCH-FREE GEL',
      link: '/capabilities#gummies'
    },
    {
      num: '02D',
      code: 'EFF-RH20-04',
      title: 'Low-Humidity Effervescent Suite',
      category: '<20% RH CLEANROOM TECH',
      desc: 'Dedicated climate-controlled cleanroom (<20% RH, 21°C) with rotary compression tooling and automated desiccant tube packing for rapid-dissolving effervescent hydration drinks.',
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg',
      badge: '<60s DISSOLUTION',
      spec: 'CLIMATE: <20% RH @ 21°C',
      link: '/capabilities#effervescents'
    },
    {
      num: '02E',
      code: 'SOL-TAB-05',
      title: 'Bi-Layer Tablets & Hard Capsules',
      category: 'SOLID ORAL DOSAGE',
      desc: 'High-speed rotary tablet compression and aqueous film coating alongside automatic micro-pellet and powder encapsulation in vegetarian (HPMC) and gelatin shells.',
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg',
      badge: 'IPQC MONITORED',
      spec: 'FRIABILITY: <0.8%',
      link: '/capabilities#solids'
    },
    {
      num: '02F',
      code: 'LIQ-PRA-06',
      title: 'Classical Pravahi Kwath & Swaras',
      category: 'AYURVEDIC LIQUID DECOCTIONS',
      desc: 'Fresh botanical sorting, crushing, and steam-jacketed boiling vessels for classical Ayurvedic decoctions, fresh herbal juices, and aseptic liquid bottling.',
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg',
      badge: 'CLASSICAL EXTRACTION',
      spec: 'ASEPTIC: 0.22μ FILTERED',
      link: '/capabilities#traditional'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] overflow-hidden font-telegraf">
      
      {/* ========================================================================= */}
      {/* SECTION 00: CINEMATIC FULL-SCREEN HERO (Colossal NB Architekt + Telegraf) */}
      {/* ========================================================================= */}
      <section id="section-hero" className="relative w-full min-h-screen bg-[#030914] text-white flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 overflow-hidden">
        
        {/* 4K Background Cleanroom Visual */}
        <img
          src="/assets/generated/has_cleanroom_hero_1787739262235.jpg"
          alt="HAS Lifesciences High-Tech Cleanroom"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105 pointer-events-none"
        />
        
        {/* Glowing Science Blue Radial Gradients */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-[#0052FF]/25 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#00D2FF]/20 blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/80 pointer-events-none" />

        {/* Technical Corner Crosshairs & Coordinates */}
        <div className="absolute top-28 left-8 text-white/30 font-architekt text-xs select-none">
          + [LAT: 26.9124° N]
        </div>
        <div className="absolute top-28 right-8 text-white/30 font-architekt text-xs select-none">
          [LONG: 75.7873° E] +
        </div>
        <div className="absolute bottom-16 left-8 text-white/30 font-architekt text-xs select-none">
          + [GMP FACILITY // ZONED]
        </div>
        <div className="absolute bottom-16 right-8 text-white/30 font-architekt text-xs select-none">
          [ISO 9001:2015] +
        </div>

        {/* Top Header Row (Colossal NB Architekt Ticker) */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 font-architekt text-xs uppercase tracking-[0.25em] text-white/80 border-b border-white/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF] animate-pulse" />
              <span className="font-bold text-white">THE SCIENCE OF BOTANICALS. THE BUSINESS OF DISCOVERY.</span>
            </div>
            <div className="text-[#00D2FF] font-architekt tracking-widest hidden sm:block">///////////////////////////////////</div>
            <div className="text-white/60 text-[11px] font-architekt">HAS-CDMO-MATRIX // 2026</div>
          </div>
        </div>

        {/* Hero Center Typography (Colossal NB Architekt Display) */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full my-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="monogram-badge-dark">
                <Dna className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>[ CDMO PROTOCOL // 00-INTRO ]</span>
              </div>

              <h1 className="font-architekt text-6xl sm:text-7xl md:text-8xl lg:text-[116px] xl:text-[132px] text-white tracking-[0.02em] leading-[0.88] uppercase select-none">
                NATURE.<br />
                SCIENCE.<br />
                <span className="text-gradient-blue">NEXT.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-8 pb-4">
              <div className="colossal-disc border-white/40">
                <div className="colossal-dot-cyan" />
              </div>

              <p className="font-telegraf text-slate-200 text-lg sm:text-xl md:text-2xl leading-[1.6] font-normal">
                Building India's premier integrated CDMO for standardized botanical extraction, classical Ayurveda, and advanced nutraceutical delivery systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/capabilities"
                  className="colossal-big-button light"
                >
                  <span>Explore Capabilities</span>
                  <span className="plus-icon">+</span>
                </Link>

                <Link
                  to="/partner"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-architekt text-xs uppercase tracking-wider font-bold border border-white/20 transition-all backdrop-blur-md"
                >
                  [ Initiate Brief ]
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Live Metric Chips */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full border-t border-white/15 pt-6 font-architekt text-xs text-white/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#00D2FF]">●</span>
            <span>CAMPUS: ~78,000 SQ. FT. MULTI-LEVEL PLATFORM</span>
          </div>
          <div className="text-[11px]">STANDARDS: cGMP • HPLC ASSAYS • CLASS 10,000 CLEANROOMS</div>
          <div className="text-[#00D2FF] font-bold">SCROLL DOWN TO EXPLORE ↓</div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 01: THE BOTANICAL EVOLUTION (Colossal NB Architekt Layout)        */}
      {/* ========================================================================= */}
      <section id="section-evolution" className="relative py-32 md:py-44 px-6 md:px-16 bg-[#F8FAFC] blueprint-grid-light border-b border-slate-200">
        
        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-20">
          <div className="flex items-center gap-6 border-b border-slate-300 pb-4">
            <span className="monogram-badge">SECTION 01 // INTRO</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ STRATEGIC REBRANDING ]</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase mt-8">
            The Botanical Evolution
          </h2>
        </div>

        {/* 2-Column High Contrast Layout */}
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="colossal-disc border-[#0052FF]">
              <div className="colossal-dot-green" />
            </div>

            <h3 className="font-architekt text-3xl sm:text-4xl lg:text-[44px] text-[#030914] uppercase leading-[1.1]">
              Extinction of Standardized Purity is a Critical Industry Challenge.<br />
              <span className="text-[#0052FF]">HAS Lifesciences is Building the Solution.</span>
            </h3>

            <p className="font-telegraf text-slate-600 text-lg sm:text-xl leading-relaxed">
              For decades, herbal manufacturing suffered from active compound variability and lack of chromatographic standardization. We are re-engineering the paradigm.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-light p-10 sm:p-12 rounded-[40px] space-y-6">
              <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold block">
                [ NOTICE: HAS HERBAL → HAS LIFESCIENCES ]
              </span>

              <h4 className="font-architekt text-2xl sm:text-3xl text-[#030914] leading-snug">
                From HAS Herbal to HAS Lifesciences Private Limited.
              </h4>

              <p className="font-telegraf text-slate-700 text-base sm:text-lg leading-relaxed">
                Combining the ancient science of Ayurveda with the business of discovery, we endeavor to jumpstart India's phytomolecular manufacturing heartbeat. To advance the economies of biology and healing through standardized botanical extraction, precision liquid Pravahi Kwath, and high-growth dosage delivery systems like vegetarian softgels, pectin gummies, and effervescents.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="colossal-big-button"
                >
                  <span>Learn More About Our Evolution</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Card Luxury Interactive Metric Strip */}
        <div className="max-w-[1800px] mx-auto mt-28 pt-16 border-t border-slate-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="glass-light glass-card-hover p-8 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-architekt text-xs text-[#0052FF] font-bold tracking-widest uppercase">[ CODE: FAC-78K ]</span>
                <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
              </div>
              <div className="font-architekt text-4xl sm:text-5xl font-bold text-[#030914]">
                ~78,000
              </div>
              <div className="font-architekt text-xs uppercase tracking-wider text-[#0052FF] font-bold">
                SQ. FT. BUILT-UP CAMPUS
              </div>
              <p className="font-telegraf text-sm text-slate-600 leading-relaxed">
                Integrated 3-level facility under active engineering development.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-8 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-architekt text-xs text-[#0052FF] font-bold tracking-widest uppercase">[ CODE: PLT-09F ]</span>
                <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
              </div>
              <div className="font-architekt text-4xl sm:text-5xl font-bold text-[#030914]">
                09
              </div>
              <div className="font-architekt text-xs uppercase tracking-wider text-[#0052FF] font-bold">
                VALIDATED PLATFORMS
              </div>
              <p className="font-telegraf text-sm text-slate-600 leading-relaxed">
                Extraction, softgels, gummies, effervescents, solids & liquids.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-8 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-architekt text-xs text-[#0052FF] font-bold tracking-widest uppercase">[ CODE: CLM-RH20 ]</span>
                <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
              </div>
              <div className="font-architekt text-4xl sm:text-5xl font-bold text-[#030914]">
                &lt;20% RH
              </div>
              <div className="font-architekt text-xs uppercase tracking-wider text-[#0052FF] font-bold">
                LOW-HUMIDITY SUITE
              </div>
              <p className="font-telegraf text-sm text-slate-600 leading-relaxed">
                Dedicated climate suite for moisture-sensitive effervescent drinks.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-8 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-architekt text-xs text-[#0052FF] font-bold tracking-widest uppercase">[ CODE: HPLC-100 ]</span>
                <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
              </div>
              <div className="font-architekt text-4xl sm:text-5xl font-bold text-[#030914]">
                100%
              </div>
              <div className="font-architekt text-xs uppercase tracking-wider text-[#0052FF] font-bold">
                PHYTOMARKER TRACEABILITY
              </div>
              <p className="font-telegraf text-sm text-slate-600 leading-relaxed">
                HPLC/HPTLC active compound assay verification on every batch.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: DOSAGE PLATFORMS DIRECTORY (Colossal Style + 4K AI Imagery)  */}
      {/* ========================================================================= */}
      <section id="section-platforms" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030914] text-white">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0052FF]/15 blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-24 relative z-10">
          <div className="flex items-center gap-6 border-b border-white/20 pb-4">
            <span className="monogram-badge-dark">SECTION 02 // DIRECTORY</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">[ DOSAGE PLATFORMS MATRIX ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8">
            <div className="lg:col-span-8">
              <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white tracking-tight leading-[0.96] uppercase">
                Manufacturing Index
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-telegraf text-slate-300 text-lg md:text-xl leading-relaxed">
                Explore our validated dosage delivery formats engineered for formulation stability, bio-efficacy, and global commercial scale.
              </p>
            </div>
          </div>
        </div>

        {/* 6 High-Impact Dosage Cards with 4K Generated Photos & Monogram Codes */}
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {platforms.map((p) => (
            <div
              key={p.num}
              className="group relative rounded-[36px] overflow-hidden glass-dark flex flex-col justify-between hover:border-[#00D2FF] transition-all duration-500 hover:-translate-y-2.5"
            >
              <div>
                {/* 16:10 4K Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Big Number & Monogram Code Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="font-architekt text-base font-bold text-white px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 shadow-lg">
                      {p.num}
                    </span>
                    <span className="font-architekt text-[11px] font-bold text-slate-300 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      {p.code}
                    </span>
                  </div>

                  <span className="absolute top-5 right-5 font-architekt text-[10px] font-bold text-[#00D2FF] px-3 py-1.5 rounded-full bg-[#0052FF]/40 backdrop-blur-md border border-[#00D2FF]/40 uppercase tracking-widest">
                    {p.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between font-architekt text-xs">
                    <span className="uppercase tracking-widest text-[#00D2FF] font-bold">{p.category}</span>
                  </div>

                  <h3 className="font-architekt font-bold text-2xl sm:text-3xl text-white group-hover:text-[#00D2FF] transition-colors leading-tight">
                    {p.title}
                  </h3>

                  <p className="font-telegraf text-slate-300 text-sm md:text-base leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="pt-2 font-architekt text-xs text-slate-400 border-t border-white/10 flex items-center justify-between">
                    <span>SPECIFICATION:</span>
                    <span className="text-[#00D2FF] font-bold">{p.spec}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0">
                <Link
                  to={p.link}
                  className="w-full py-4 px-6 rounded-full border border-white/20 group-hover:border-[#00D2FF] group-hover:bg-[#0052FF] text-white text-xs font-architekt font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-between"
                >
                  <span>[ Technical Blueprint ]</span>
                  <span className="text-base font-light group-hover:rotate-90 transition-transform duration-300">+</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1800px] mx-auto mt-20 text-center relative z-10">
          <Link
            to="/capabilities"
            className="colossal-big-button light"
          >
            <span>View Full Capabilities Directory</span>
            <span className="plus-icon">+</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: 78,000 SQ. FT. CAMPUS BLUEPRINT                              */}
      {/* ========================================================================= */}
      <section id="section-facility" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#F8FAFC] border-b border-slate-200">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <div className="flex items-center gap-6 border-b border-slate-300 pb-4">
            <span className="monogram-badge">SECTION 03 // CAMPUS</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ FACILITY ENGINEERING ]</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase mt-8">
            ~78,000 Sq. Ft. Campus
          </h2>
        </div>

        {/* Panoramic 4K Visual with Blueprint Overlay */}
        <div className="max-w-[1800px] mx-auto rounded-[44px] overflow-hidden shadow-2xl bg-[#030914] text-white border border-slate-800 relative">
          
          <div className="relative aspect-[21/9] min-h-[420px] md:min-h-[540px] overflow-hidden">
            <img
              src="/assets/generated/has_campus_hero_1787739337547.jpg"
              alt="HAS Lifesciences Integrated Campus"
              className="w-full h-full object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/40 to-transparent pointer-events-none" />
          </div>

          {/* Blueprint Detail & Floor Level Explorer */}
          <div className="p-8 sm:p-14 md:p-20 relative z-10 space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-architekt text-xs text-[#00D2FF] uppercase tracking-[0.25em] font-bold">
                  [ MASTER FACILITY BLUEPRINT // 3 ZONED LEVELS ]
                </span>
                <h3 className="font-architekt font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                  Zoned for Zero Cross-Contamination & Pharma cGMP
                </h3>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/infrastructure"
                  className="colossal-big-button light"
                >
                  <span>Interactive Blueprint</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>

            {/* 3 Level Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ LEVEL 01 ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">Wet Processing & Softgels</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Botanical extraction hall, Pravahi Kwath decoction vessels, rotary die softgel encapsulation & gummy lines.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ LEVEL 02 ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">Solid Dosage & Effervescents</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Granulation, rotary tablet presses, capsule filling & dedicated &lt;20% RH low-humidity cleanroom suite.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ LEVEL 03 ]</div>
                <h4 className="font-architekt font-bold text-xl text-white">Packaging & Analytical Labs</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Alu-Alu blistering, automated bottling, HPLC/HPTLC testing, microbiology suites & corporate offices.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: CDMO PROCESS PIPELINE                                        */}
      {/* ========================================================================= */}
      <section id="section-pipeline" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#F8FAFC] border-b border-slate-200">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <div className="flex items-center gap-6 border-b border-slate-300 pb-4">
            <span className="monogram-badge">SECTION 04 // PIPELINE</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ 10-STEP CDMO ROADMAP ]</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase mt-8">
            Idea to Commercial Scale
          </h2>
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 01 ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">Concept & Brief</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Target dosage format selection, active phytomarker identification, and technical feasibility review.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 02 ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">R&D Formulation</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Benchtop pilot batches, sensory bitterness masking, active assay testing, and client prototype sign-off.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 03 ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">Scale-Up & QC</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Cleanroom batch execution, in-process controls (IPQC), and HPLC active compound verification.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">[ 04 ]</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">Release & Packaging</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Alu-Alu blister or bottle packaging, Certificate of Analysis (CoA) generation, and global dispatch.
            </p>
          </div>

        </div>

        <div className="max-w-[1800px] mx-auto mt-20 text-center">
          <Link
            to="/contract-manufacturing"
            className="colossal-big-button"
          >
            <span>Explore 10-Step CDMO Pipeline</span>
            <span className="plus-icon">+</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 05: 9-STAGE QUALITY FRAMEWORK                                     */}
      {/* ========================================================================= */}
      <section id="section-quality" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030914] text-white">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <div className="flex items-center gap-6 border-b border-white/20 pb-4">
            <span className="monogram-badge-dark">SECTION 05 // QUALITY</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">///////////////////////////////////</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">[ ANALYTICAL SCIENCE & QC ]</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white tracking-tight leading-[0.96] uppercase mt-8">
            9-Stage Quality Framework
          </h2>
        </div>

        {/* 4K HPLC Lab Visual & QA Specs */}
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 rounded-[36px] overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="/assets/generated/has_analytical_hplc_lab_1787820264292.jpg"
              alt="HAS Lifesciences HPLC Testing Laboratory"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="lg:col-span-6 space-y-6">
            <div className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">
              [ PROTOCOL: CHROMATOGRAPHIC & MICROBIAL CERTIFICATION ]
            </div>
            <h3 className="font-architekt font-bold text-3xl sm:text-4xl text-white">
              Every Batch Backed by Instrumental Proof
            </h3>
            <p className="font-telegraf text-slate-300 text-lg leading-relaxed">
              We employ Agilent HPLC and Camag HPTLC systems for active bio-marker assay testing, alongside ICP-MS heavy metals testing and Class 10,000 cleanroom microbiology testing.
            </p>
            <div className="pt-2">
              <Link to="/quality" className="colossal-big-button light">
                <span>View All 9 QC Stages</span>
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ 01 - 03 ]</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Raw Material & Microbial</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Botanical identity voucher verification, heavy metal spectrometry (Pb, Cd, Hg, As), and pathogen screening.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ 04 - 06 ]</div>
            <h4 className="font-architekt font-bold text-2xl text-white">In-Process & HPLC Assays</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Continuous weight/hardness IPQC, chromatographic active marker quantification, and blister vacuum leak tests.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">[ 07 - 09 ]</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Finished Release & BMR Sign-off</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              ICH Q1A stability chamber monitoring, complete Batch Manufacturing Record audit, and formal QP release.
            </p>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 06: B2B PARTNERSHIP INTAKE CALLOUT                                */}
      {/* ========================================================================= */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 text-center bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <span className="monogram-badge">
            [ PROJECT INTAKE & PARTNERSHIP // HAS-CDMO ]
          </span>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#030914] tracking-tight leading-[0.96] uppercase">
            Have a Formulation Concept?<br />
            <span className="text-[#0052FF]">Let's Build It Together.</span>
          </h2>

          <p className="font-telegraf text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Share your dosage format, target botanical actives, batch volume requirements, and launch timeline with our technical formulation team.
          </p>

          <div className="pt-6">
            <Link
              to="/partner"
              className="colossal-big-button"
            >
              <span>Submit A Project Brief</span>
              <span className="plus-icon">+</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
