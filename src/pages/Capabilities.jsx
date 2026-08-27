import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function Capabilities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      id: 'extraction',
      num: '01',
      code: 'EXT-VAC',
      title: 'Botanical Extraction & Concentration',
      headline: 'Phytochemistry & Active Standardization',
      desc: 'Our primary extraction hall houses multi-stage falling-film vacuum evaporators, solid-liquid counter-current extractors, and automated filtration presses designed for standardized botanicals and classical Ayurvedic matrices.',
      specs: [
        'Falling-film vacuum evaporation at low thermal load (<45°C)',
        'HPLC active biomarker quantification (≥95% purity yields)',
        'Stainless steel SS316 food & pharmaceutical contact surfaces',
        'Solvent recovery loops (Ethanol, Hydro-alcoholic & Aqueous)'
      ],
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg'
    },
    {
      id: 'softgels',
      num: '02',
      code: 'ENCAP-SG',
      title: 'Rotary Die Softgel Encapsulation',
      headline: 'Lipid Solutions & Oil Suspensions',
      desc: 'Precision continuous rotary die encapsulation lines capable of processing highly viscous oil suspensions, CoQ10 formulations, omega fatty acid matrices, and lipid-soluble herbal extracts with airtight hermetic sealing.',
      specs: [
        'Bovine, porcine, and 100% vegetarian seaweed carrageenan ribbons',
        'Laser-inspected fill accuracy with ±1.5% volumetric tolerance',
        'Continuous tumbling drying suites with dew point management',
        'Enteric-coated softgels for targeted intestinal release'
      ],
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg'
    },
    {
      id: 'gummies',
      num: '03',
      code: 'GUM-PUD',
      title: 'Pectin & Gelatin Gummy Line',
      headline: 'Functional Confectionery Delivery',
      desc: 'Starchless automated depositor lines engineered specifically for active nutraceutical delivery. High heat-tolerance pectin bases prevent active botanical denaturation during deposition and curing.',
      specs: [
        '100% citrus pectin, gelatin, and hybrid base formulations',
        'Active load capacity up to 15% without flavor degradation',
        'Organic tapioca & monk fruit sugar-free sweetening systems',
        'Automated mineral sanding and anti-stick oil finishing'
      ],
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg'
    },
    {
      id: 'effervescents',
      num: '04',
      code: 'EFF-TAB',
      title: 'Effervescent Tablet Technology',
      headline: 'Rapid Dissolution & Instant Bioavailability',
      desc: 'Operating within specialized low-humidity cleanroom suites (<20% relative humidity), our effervescent compression suites produce instantly soluble tablets containing electrolyte complexes, vitamins, and standardized botanical actives.',
      specs: [
        'Desiccant dehumidification maintaining <20% relative humidity',
        'Fast dissolution profile (<120 seconds in 200ml ambient water)',
        'Desiccant-stoppered aluminium tube automated packaging',
        'Complete taste masking of bitter herbal saponins and tannins'
      ],
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg'
    },
    {
      id: 'solids',
      num: '05',
      code: 'SOL-TAB',
      title: 'Solid Oral Tablets & Hard Capsules',
      headline: 'Bilayer Compression & Modified Release',
      desc: 'High-tonnage rotary tablet presses equipped with real-time compression force monitoring, automated weight rejection, and aqueous/organic film coating pans for sustained, delayed, or rapid release.',
      specs: [
        'Double-rotary presses producing up to 250,000 tablets/hour',
        'Bilayer tablet capability for incompatible dual active ingredients',
        'Size 00, 0, 1, 2 vegetarian (HPMC) and gelatin capsule filling',
        'Aqueous moisture-barrier and enteric pH-dependent coatings'
      ],
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg'
    },
    {
      id: 'traditional',
      num: '06',
      code: 'LIQ-BOT',
      title: 'Ayurvedic Liquids, Syrups & Asava-Arishta',
      headline: 'Classical & Contemporary Liquid Dosage',
      desc: 'Closed-loop SS316 decoction and fermentation halls honoring traditional Ayurvedic texts (Sharngadhara Samhita, Charaka Samhita) paired with modern micro-filtration, pasteurization, and automatic bottling lines.',
      specs: [
        'SS316 temperature-controlled closed brewing & decoction vessels',
        'Traditional self-generated natural fermentation chambers',
        'Sugar-free prebiotic base formulations for modern diabetic care',
        'High-speed rotary liquid filling, capping, and induction sealing'
      ],
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="Dosage Delivery Capabilities | Softgels, Gummies & Effervescents | HAS Lifesciences"
        description="Explore HAS Lifesciences manufacturing capabilities: Standardized botanical extraction, rotary softgel encapsulation, pectin nutraceutical gummies, effervescent dissolution, bilayer tablets, and Ayurvedic liquids."
        keywords="Nutraceutical Gummies Manufacturer India, Softgel CDMO India, Effervescent Tablets Manufacturer, Botanical Extraction Facility, Bilayer Tablets Pharma India, Ayurvedic Kwath Bottling"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="Validated Dosage Platforms."
          description="A comprehensive overview of our specialized manufacturing suites — engineered to scale complex botanical formulations from laboratory prototypes into commercial high-speed production."
          primaryBtnText="Explore Platforms"
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
                    {p.headline}
                  </div>
                </div>

                <p className="font-telegraf text-slate-700 text-lg sm:text-xl leading-relaxed">
                  {p.desc}
                </p>

                {/* Technical Bullet Grid */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="font-architekt text-xs uppercase text-slate-400 tracking-widest">
                    VALIDATED PARAMETERS & STANDARDS
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

              {/* Right Column: Panoramic Card */}
              <div className="lg:col-span-6">
                <div className="rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl bg-[#030914] group relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
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
