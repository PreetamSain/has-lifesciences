import React from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Capabilities() {
  const platforms = [
    {
      id: 'extraction',
      num: '02A',
      code: 'EXT-VAC-01',
      title: 'Standardized Botanical Extraction',
      headline: 'Vacuum Falling-Film & Phytomolecular Isolation',
      desc: 'Engineered for high-yield isolation of active markers (Withanolides, Curcuminoids, Boswellic acids, Bacopasides). Features low-temperature hydro-alcoholic percolation loops, falling-film vacuum concentrators, and shelf vacuum dryers to prevent thermal degradation of delicate bioactives.',
      specs: [
        'Chromatographic Active Assay Verification (HPLC / HPTLC)',
        'Solvent-Free Water / Ethanol Low-Temp Extraction Loops',
        'Batch Capacities from 500 kg to Multi-Ton Commercial Scaling',
        'Standardized Powder & High-Viscosity Paste Formats'
      ],
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg'
    },
    {
      id: 'softgels',
      num: '02B',
      code: 'SFT-ROT-02',
      title: 'Rotary Die Softgel Encapsulation',
      headline: 'High-Precision Lipid & Botanical Oil Delivery',
      desc: 'Planned 8-inch high-speed rotary die softgel platform tailored for oil-soluble vitamins, botanical CO2 extracts, Omega-3 fatty acids, and CoQ10. Equipped with chilled micro-drum gelatin ribbons and automated optical sorting.',
      specs: [
        'Gelatin & 100% Vegetarian (Plant-Based Pectin/Tapioca) Shells',
        'Hermetically Sealed for Maximum Oxidation Defense',
        'Custom Shapes: Oval, Oblong, Round, Tube Format',
        'Automatic In-Line Laser Printing & Leak Inspection'
      ],
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg'
    },
    {
      id: 'gummies',
      num: '02C',
      code: 'GUM-PCT-03',
      title: 'Nutraceutical Gummies Suite',
      headline: 'Continuous Starch-Free Pectin Setting Technology',
      desc: 'Modern consumer wellness gummy line featuring automated continuous batch cooking, active ingredient dosing, and stainless-steel quick-setting cooling tunnels.',
      specs: [
        '100% Vegan Pectin Base (No Gelatin, Non-GMO Certified)',
        'Active Botanical, Mineral, and Nootropic Fortification',
        'Sugar-Free & Low-Glycemic Sweetener Systems',
        'Multi-Flavor Layering & Functional Surface Sanding'
      ],
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg'
    },
    {
      id: 'effervescents',
      num: '02D',
      code: 'EFF-RH20-04',
      title: 'Low-Humidity Effervescent Suite',
      headline: 'Dedicated <20% RH Cleanroom Facility',
      desc: 'Custom-engineered climate-controlled cleanroom (<20% Relative Humidity, 21°C) designed specifically to handle highly moisture-sensitive sodium bicarbonate and organic acid effervescent reactions.',
      specs: [
        'Rapid In-Glass Dissolution (<60 Seconds Clean Break)',
        'Automated Desiccant-Cap Tube Packing & Induction Sealing',
        'Electrolyte, Vitamin C, & Energy Hydration Formulas',
        'Zero Sticking Rotary Compression Tooling'
      ],
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg'
    },
    {
      id: 'solids',
      num: '02E',
      code: 'SOL-TAB-05',
      title: 'Solid Oral Tablets & Hard Capsules',
      headline: 'High-Speed Rotary Compression & Auto-Filling',
      desc: 'Comprehensive solid dosage production suite covering high-shear wet granulation, fluid bed drying (FBD), multi-station rotary tablet compression, aqueous film coating, and automatic capsule filling.',
      specs: [
        'Modified Release, Enteric Coating, & Bi-Layer Tablets',
        'Vegetarian HPMC & Bovine Gelatin Shell Encapsulation',
        'Micro-Pellet & Powder Combination Capsule Filling',
        'Real-Time In-Line Weight and Hardness IPQC Logging'
      ],
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg'
    },
    {
      id: 'traditional',
      num: '02F',
      code: 'LIQ-PRA-06',
      title: 'Classical Pravahi Kwath & Swaras',
      headline: 'GMP-Standardized Ayurvedic Liquid Decoctions',
      desc: 'Dedicated classical Ayurvedic processing floor featuring fresh herb crushing, steam-jacketed boiling kettles for Pravahi Kwath decoctions, multi-stage filtration, and aseptic liquid bottling.',
      specs: [
        'Fresh Herb Extraction & Cold Pressed Swaras Juices',
        'Classical Asava, Arishta, and Modern Syrups',
        'Glass Bottle & HDPE Packaging with Tamper-Evident Caps',
        'Preservative-Free Nitrogen Dosing Options Available'
      ],
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          tag="SECTION 02 // DOSAGE INDEX"
          badge="[ MANUFACTURING MATRIX ]"
          headlineMain="Validated Dosage Platforms."
          description="A comprehensive overview of our 9 specialized manufacturing suites — engineered to scale complex botanical formulations from laboratory prototypes into commercial high-speed production."
          primaryBtnText="Explore All Platforms"
          primaryBtnLink="#extraction"
          secondaryBtnText="Submit Formulation Brief"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_cleanroom_hero_1787739262235.jpg"
        />
      </section>

      {/* 2. PLATFORMS LIST */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16 space-y-36">
        {platforms.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className="border-t border-slate-300 pt-16 scroll-mt-32"
          >
            {/* Header Line */}
            <div className="flex items-center gap-6 border-b border-slate-200 pb-4 mb-12">
              <span className="monogram-badge">
                {p.num} // {p.code}
              </span>
              <span className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">///////////////////////////////////</span>
              <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">[ SPECIFICATION SHEET ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Typography & Specs */}
              <div className="lg:col-span-6 space-y-8">
                <div className="colossal-disc border-[#0052FF]">
                  <div className="colossal-dot-green" />
                </div>

                <div>
                  <h2 className="font-architekt text-4xl sm:text-5xl lg:text-6xl text-[#030914] uppercase tracking-tight leading-[1.02]">
                    {p.title}
                  </h2>
                  <div className="font-architekt text-sm uppercase text-[#0052FF] font-bold tracking-wider mt-3">
                    [{p.headline}]
                  </div>
                </div>

                <p className="font-telegraf text-slate-700 text-lg sm:text-xl leading-relaxed">
                  {p.desc}
                </p>

                {/* Technical Bullet Grid */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="font-architekt text-xs uppercase text-slate-400 tracking-widest">
                    [ VALIDATED PARAMETERS & STANDARDS ]
                  </div>
                  <div className="space-y-3">
                    {p.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <span className="font-architekt text-[#0052FF] font-bold text-sm">+</span>
                        <span className="font-telegraf text-slate-800 text-base">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/partner"
                    className="colossal-big-button"
                  >
                    <span>Request Technical Specs</span>
                    <span className="plus-icon">+</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: 4K Panoramic Card */}
              <div className="lg:col-span-6">
                <div className="rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl bg-[#030914] group relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                  </div>
                  <div className="p-8 bg-[#030914] text-white flex items-center justify-between font-architekt text-xs border-t border-white/10">
                    <span className="text-[#00D2FF] font-bold">[ MATRIX: {p.num} // {p.code} ]</span>
                    <span className="text-white/60">cGMP QUALIFIED</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
