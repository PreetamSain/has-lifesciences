import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function ResearchDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'Botanical Chemistry & Active Isolation',
      desc: 'Screening raw botanical materials for marker compounds, active principles, pesticide residue profiles, and heavy metal limits using high-performance chromatography.',
      tag: 'Phytochemistry Lab',
      points: [
        'Chromatographic profiling (HPLC & HPTLC)',
        'Standardization of active bio-markers (Withanolides, Curcuminoids)',
        'Botanical identity verification & voucher specimen preservation',
        'Seasonal and geographic variation mapping'
      ]
    },
    {
      num: '02',
      title: 'Formulation Design & Dosage Technology',
      desc: 'Overcoming delivery hurdles: lipid self-emulsification, low-humidity effervescent kinetics, taste-masking of bitter extracts, and dissolution optimization.',
      tag: 'Dosage Engineering',
      points: [
        'Lipid & oil delivery formulation for softgel encapsulation',
        'Hydrocolloid structuring & gel strength optimization for pectin gummies',
        'Controlled organic acid / carbonate kinetics for effervescent stability',
        'Micro-encapsulation and enteric coating for gastric protection'
      ]
    },
    {
      num: '03',
      title: 'Sensory Science & Taste Masking',
      desc: 'Transforming potent, bitter, astringent herbal extracts into consumer-preferred chewable gummies, effervescent drinks, syrups, and flavoured nutritional powders.',
      tag: 'Organoleptic Science',
      points: [
        'Specialized botanical bitterness suppression technologies',
        'Natural flavor modulation, masking systems, and mouthfeel enhancement',
        'Sugar-free, stevia, and natural sweetener profiling',
        'Organoleptic stability over shelf life'
      ]
    },
    {
      num: '04',
      title: 'Analytical Method Development & Stability',
      desc: 'Developing in-house validated analytical methods for novel multi-herb mixtures, proprietary blends, and functional finished dosage matrixes.',
      tag: 'Method Validation',
      points: [
        'Assay method development for single and multi-ingredient blends',
        'Dissolution and disintegration testing across simulated digestive media',
        'Real-time & accelerated stability chamber protocols (ICH Q1A)',
        'Comprehensive Certificate of Analysis (CoA) generation'
      ]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="R&D Phytotherapy & Formulation Science | HAS Lifesciences"
        description="Explore research and development at HAS Lifesciences: botanical active isolation, dosage engineering, organoleptic taste masking, and validated analytical stability methods."
        keywords="Phytotherapy R&D India, Botanical Taste Masking Technology, Herbal Formulation Development, Bioavailability Enhancer CDMO, Analytical Method Validation"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="Science-Driven Formulation."
          description="At HAS Lifesciences, research and development is focused on solving real formulation, delivery, bioavailability, stability, and sensory challenges in botanical and nutraceutical products."
          primaryBtnText="Initiate R&D Brief"
          primaryBtnLink="/partner"
          secondaryBtnText="Quality Systems"
          secondaryBtnLink="/quality"
          bgImage="/assets/generated/has_analytical_hplc_lab_1787820264292.jpg"
        />
      </section>

      {/* 2. FOUR CORE R&D PILLARS */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            R&D Formulation & Science
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-slate-200 pb-4 mb-4">
                  <span className="font-architekt text-3xl font-bold text-[#0052FF]">
                    {item.num}
                  </span>
                </div>

                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold mb-2">
                  {item.tag}
                </div>

                <h3 className="font-architekt font-bold text-2xl md:text-3xl text-[#030914] mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="font-telegraf text-slate-600 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="font-architekt text-[11px] uppercase text-slate-400 font-bold tracking-widest">
                    LAB CAPABILITIES
                  </div>
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-architekt text-slate-700">
                      <span className="text-[#0052FF] font-bold">+</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/partner"
                  className="text-xs font-architekt uppercase tracking-wider text-[#030914] hover:text-[#0052FF] flex items-center justify-between transition-colors font-bold"
                >
                  <span>Submit Formulation Brief</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
