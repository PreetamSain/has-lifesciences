import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Plus, Sparkles } from 'lucide-react';
import HeroTypewriterV2 from '../components/HeroTypewriterV2';
import TypewriterTextV2 from '../components/TypewriterTextV2';
import ScienceParticleEngine from '../components/ScienceParticleEngine';

export default function HomeV2() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const disciplines = [
    {
      num: '01',
      title: 'Standardized Botanical Extraction',
      description: 'Closed-loop SS-316 hydro-ethanolic and supercritical fluid extraction standardized to precise phytomarker fingerprints via HPLC & GC-MS.',
      link: '/capabilities'
    },
    {
      num: '02',
      title: 'Vegetarian & Gelatin Softgels',
      description: 'High-speed encapsulation for botanical lipid extracts, fat-soluble vitamins, and nano-emulsified nutraceutical suspensions.',
      link: '/capabilities'
    },
    {
      num: '03',
      title: 'Functional Pectin & Gelatin Gummies',
      description: 'Thermally stable 100% pectin gummy matrices engineered for zero active degradation, clean label, and delicious sensory profiles.',
      link: '/capabilities'
    },
    {
      num: '04',
      title: 'Effervescent & Compressed Tablets',
      description: 'Humidity-controlled tableting suites operating under <20% RH with rapid dissolution kinetics and moisture-barrier blister packaging.',
      link: '/capabilities'
    }
  ];

  const faqs = [
    {
      q: 'What distinguishes HAS Lifesciences as a next-generation CDMO?',
      a: 'We unite classical botanical mastery with pharmaceutical-grade cGMP cleanroom automation, HPLC standardized phyto-actives, and modern delivery dosage forms all under one ~78,000 sq. ft. campus in Jaipur.'
    },
    {
      q: 'What dosage formats are manufactured on-site?',
      a: 'Our facility produces vegetarian/gelatin softgels, functional pectin gummies, effervescent tablets, oral liquids, topical ayurvedic formulations, and standardized powdered botanical extracts.'
    },
    {
      q: 'Can HAS Lifesciences support custom pilot formulation to commercial scale?',
      a: 'Yes. Our analytical laboratories and pilot suites develop custom monographs, stability profiles, and sensory optimization before scaling into multi-million unit commercial batches.'
    },
    {
      q: 'What analytical and regulatory testing is conducted for every batch?',
      a: 'Every production lot undergoes raw identity verification, heavy metals ICP-MS, residual solvent analysis, microbial pathogen screens, and active assay quantification via HPLC.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#030914] min-h-screen">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXPANSIVE SCIENTIFIC PARTICLE & MOLECULAR VECTOR ENGINE) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[96vh] flex flex-col justify-between pt-36 sm:pt-40 pb-10 px-6 sm:px-10 lg:px-16 xl:px-20 grid-laboratory border-b border-slate-200">
        
        {/* Hero Main Content */}
        <div className="relative z-10 max-w-[1780px] mx-auto w-full my-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Monumental Clean Typography */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-8 xl:space-y-10">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1566F3]/8 border border-[#1566F3]/25 font-architekt text-xs text-[#1566F3] uppercase tracking-[0.2em] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Integrated Botanical & Pharma CDMO</span>
              </div>

              <h1 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[108px] text-[#030914] tracking-[0.02em] leading-[0.92] uppercase select-none">
                <span className="block">NATURE.</span>
                <span className="block">SCIENCE.</span>
                <span className="block whitespace-nowrap">
                  <HeroTypewriterV2 colorClass="text-[#1566F3]" cursorColor="bg-[#030914]" />
                </span>
              </h1>

              <p className="font-telegraf text-slate-600 text-lg sm:text-xl xl:text-2xl leading-relaxed font-light max-w-xl">
                India's premier integrated CDMO for standardized botanical extraction, classical Ayurveda, and advanced nutraceutical delivery systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-5">
                <Link
                  to="/capabilities"
                  className="btn-v2-primary group cursor-pointer"
                >
                  <span>Explore Disciplines</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="btn-v2-outline cursor-pointer"
                >
                  Initiate Brief
                </Link>
              </div>

            </div>

            {/* Right Column: 100% Pure Unboxed Particle Art (Zero Text / Zero Buttons) */}
            <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center items-center">
              <ScienceParticleEngine />
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar (Clean Minimal Scroll Indicator - Address Removed) */}
        <div className="relative z-10 max-w-[1780px] mx-auto w-full border-t border-slate-200/80 pt-5 font-architekt text-xs flex items-center justify-end tracking-[0.14em]">
          <div className="text-[#1566F3] font-bold flex items-center gap-2">
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* 2. THE MANIFESTO / PHILOSOPHY (AIRY 95% NEGATIVE WHITESPACE)               */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-3 font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold sticky top-36">
              PHILOSOPHY & VISION
            </div>

            <div className="lg:col-span-9 space-y-16">
              <p className="font-telegraf text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#030914] font-light leading-[1.25] tracking-tight max-w-5xl [text-wrap:balance]">
                Where botanical wisdom converges with high-throughput pharmaceutical cleanroom engineering to formulate and scale the remedies of tomorrow.
              </p>
              
              {/* Clean Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                
                <div className="cleanroom-card p-8 space-y-3">
                  <div className="font-architekt text-3xl sm:text-4xl font-bold text-[#030914]">~78,000</div>
                  <div className="font-architekt text-xs text-slate-500 uppercase tracking-wider font-bold">Sq. Ft. cGMP Campus</div>
                </div>

                <div className="cleanroom-card p-8 space-y-3">
                  <div className="font-architekt text-3xl sm:text-4xl font-bold text-[#1566F3]">HPLC / GC-MS</div>
                  <div className="font-architekt text-xs text-slate-500 uppercase tracking-wider font-bold">Assay Standardized</div>
                </div>

                <div className="cleanroom-card p-8 space-y-3">
                  <div className="font-architekt text-3xl sm:text-4xl font-bold text-[#030914]">CLASS 10,000</div>
                  <div className="font-architekt text-xs text-slate-500 uppercase tracking-wider font-bold">Cleanroom Suites</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. ROYAL ELECTRIC BLUE CDMO SCIENCE MONOLITH (#1566F3 ACTIVE SHOWCASE)    */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 bg-[#1566F3] text-white border-b border-blue-600">
        
        <div className="max-w-[1720px] mx-auto space-y-24">
          
          <div className="max-w-3xl space-y-4">
            <div className="font-architekt text-xs text-cyan-200 uppercase tracking-[0.24em] font-bold">
              SCIENTIFIC STANDARDIZATION
            </div>
            <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight">
              Precision at Every Molecular Scale
            </h2>
            <p className="font-telegraf text-white/90 text-xl font-light leading-relaxed">
              Synthesizing nature's purest bio-active compounds into standardized, high-bioavailability finished dosage formats.
            </p>
          </div>

          {/* Dual 4K Formulation & Distillation Exhibits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Exhibit 1: Macro Softgels & Crystal Actives */}
            <div className="rounded-3xl border border-white/20 bg-white/5 p-8 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/generated/macro_botanical_science.jpg"
                  alt="Standardized Softgels and Phyto-Active Crystals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2 px-2">
                <div className="font-architekt text-xs text-cyan-200 uppercase tracking-wider font-bold">STANDARDIZED PHYTOMARKERS</div>
                <h3 className="font-architekt text-2xl text-white uppercase">Pure Herbal Oils & Crystal Assays</h3>
                <p className="font-telegraf text-white/80 text-sm font-light leading-relaxed">
                  Engineered with HPLC-quantified active compounds, clean vegetarian gelatin shells, and nano-emulsified active suspensions.
                </p>
              </div>
            </div>

            {/* Exhibit 2: Closed-Loop Distillation Columns */}
            <div className="rounded-3xl border border-white/20 bg-white/5 p-8 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/generated/has_botanical_extraction_1787739370349.jpg"
                  alt="Closed-Loop Botanical Distillation Plant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2 px-2">
                <div className="font-architekt text-xs text-cyan-200 uppercase tracking-wider font-bold">EXTRACTION INFRASTRUCTURE</div>
                <h3 className="font-architekt text-2xl text-white uppercase">High-Yield Closed-Loop Distillation</h3>
                <p className="font-telegraf text-white/80 text-sm font-light leading-relaxed">
                  Automated SS-316 extraction lines operating under temperature-controlled vacuum to preserve heat-sensitive phyto-nutrients.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. CORE DISCIPLINES (SPRAWLING MINIMALIST ROWS ON CLEAN WHITE)            */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto space-y-28">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-200 pb-16">
            <div className="lg:col-span-8 space-y-3">
              <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
                MANUFACTURING PLATFORMS
              </div>
              <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#030914] uppercase tracking-tight leading-none">
                Integrated CDMO Platform
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/capabilities" className="btn-v2-outline text-xs py-3 px-6">
                <span>View Full Specifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Clean Sprawling Rows */}
          <div className="divide-y divide-slate-200">
            {disciplines.map((item) => (
              <div 
                key={item.num}
                className="group py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start transition-all duration-300 hover:bg-slate-50/60"
              >
                <div className="lg:col-span-2 font-architekt text-6xl md:text-8xl text-slate-300 group-hover:text-[#1566F3] transition-colors font-bold">
                  {item.num}
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <h3 className="font-architekt text-2xl sm:text-3xl md:text-4xl text-[#030914] uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <p className="font-telegraf text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div>
                    <Link
                      to={item.link}
                      className="font-architekt text-xs uppercase tracking-[0.14em] text-[#1566F3] font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. FACILITY & TECHNOLOGY GALLERY                                          */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto space-y-28">
          
          <div className="max-w-3xl space-y-4">
            <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
              CAMPUS INFRASTRUCTURE
            </div>
            <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
              High-Precision Cleanrooms & Analytical Testing
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Card 1 */}
            <div className="space-y-5 group">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white aspect-[4/3]">
                <img
                  src="/assets/generated/has_cleanroom_hero_1787739262235.jpg"
                  alt="Automated Cleanroom Suites"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1.5">
                <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-wider font-bold">CLEANROOM AUTOMATION</div>
                <h4 className="font-architekt text-xl text-[#030914] uppercase">ISO 7 Air Filtration</h4>
                <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                  Class 10,000 cleanrooms with computerized batch monitoring and positive pressure airlocks.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-5 group lg:translate-y-10">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white aspect-[4/3]">
                <img
                  src="/assets/generated/has_softgels_macro_1787739287054.jpg"
                  alt="Softgel Encapsulation Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1.5">
                <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-wider font-bold">ENCAPSULATION SUITE</div>
                <h4 className="font-architekt text-xl text-[#030914] uppercase">Vegetarian & Gelatin Softgels</h4>
                <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                  Automated high-speed rotary die encapsulation under continuous positive-pressure air filtration.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="space-y-5 group lg:translate-y-20">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white aspect-[4/3]">
                <img
                  src="/assets/generated/has_analytical_hplc_lab_1787820264292.jpg"
                  alt="Analytical HPLC QC Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1.5">
                <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-wider font-bold">ANALYTICAL SUITE</div>
                <h4 className="font-architekt text-xl text-[#030914] uppercase">HPLC / ICP-MS Quality Assays</h4>
                <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                  Quantitative chromatographic active fingerprinting and heavy metal ICP-MS screening for every release.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. TYPEWRITER FAQ SECTION (SPACIOUS LUXURY ACCORDION)                     */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Title Column */}
            <div className="lg:col-span-5 space-y-6 sticky top-36">
              <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
                CLARITY & STANDARDS
              </div>
              <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="font-telegraf text-slate-600 text-lg font-light leading-relaxed max-w-md">
                Select any question below to initiate real-time scientific response typing.
              </p>
            </div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 divide-y divide-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="py-10 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start justify-between gap-8 text-left group cursor-pointer focus:outline-none"
                    >
                      <span className={`font-architekt text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                        isOpen ? 'text-[#1566F3] font-bold' : 'text-[#030914] group-hover:text-[#1566F3]'
                      }`}>
                        {faq.q}
                      </span>
                      <span className={`p-2 rounded-full border transition-all shrink-0 ${
                        isOpen 
                          ? 'border-[#1566F3] bg-[#1566F3] text-white rotate-45' 
                          : 'border-slate-300 text-slate-500 group-hover:border-[#1566F3] group-hover:text-[#1566F3]'
                      }`}>
                        <Plus className="w-4 h-4 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Animated Typewriter Answer */}
                    {isOpen && (
                      <div className="mt-8 pr-12 text-slate-700 font-telegraf text-lg md:text-xl leading-relaxed">
                        <TypewriterTextV2 text={faq.a} speed={14} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION (CRISP HIGH-IMPACT INTAKE)                              */}
      {/* ========================================================================= */}
      <section className="relative py-44 md:py-56 px-8 sm:px-12 lg:px-20 text-center bg-[#1566F3] text-white">
        
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 border border-white/20 font-architekt text-xs text-white uppercase tracking-[0.24em]">
            <span>PARTNERSHIP DESK</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.94]">
            Ready to Formulate & Scale?
          </h2>

          <p className="font-telegraf text-white/90 text-xl sm:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Schedule a technical consultation with our formulation scientists and campus engineering team.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 rounded-full bg-white text-[#1566F3] font-architekt text-xs uppercase tracking-[0.14em] font-bold hover:bg-slate-100 transition-all cursor-pointer"
            >
              Initiate Project Brief
            </Link>
            <Link
              to="/infrastructure"
              className="px-10 py-5 rounded-full bg-transparent border border-white/40 text-white font-architekt text-xs uppercase tracking-[0.14em] font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              Explore Campus Infrastructure
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
