import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, 
  FlaskConical, Sparkles, Building2, Microchip, Layers, 
  Activity, RefreshCw, BarChart3, Database, Globe, ChevronRight, Dna, Factory
} from 'lucide-react';
import HeroTrailer from '../components/HeroTrailer';
import GinkgoHeroCard from '../components/GinkgoHeroCard';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      num: '01',
      code: 'EXT-VAC',
      title: 'Botanical Extraction Hall',
      category: 'Phytochemistry & Active Standardization',
      desc: 'Falling-film vacuum evaporators and fractional crystallization targeting high-potency standardized phytochemical markers.',
      spec: 'HPLC ≥95% Purity Standard',
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg',
      link: '/capabilities#extraction',
      badge: 'Core Infrastructure'
    },
    {
      num: '02',
      code: 'ENCAP-SG',
      title: 'Rotary Softgel Encapsulation',
      category: 'Lipid Solutions & Oil Suspensions',
      desc: 'High-speed rotary die encapsulation for CoQ10, omega fatty acids, phytosterols, and specialized lipid-soluble botanical extracts.',
      spec: 'Seamless Gelatin / Veg-Cap',
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg',
      link: '/capabilities#softgels',
      badge: 'High Precision'
    },
    {
      num: '03',
      code: 'GUM-PUD',
      title: 'Pectin & Gelatin Gummy Line',
      category: 'Confectionery Nutraceuticals',
      desc: 'Starchless mogul depositor technology engineered for thermal-stability and active botanical load without sugar degradation.',
      spec: 'Sugar-Free & 100% Pectin',
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg',
      link: '/capabilities#gummies',
      badge: 'Rapid Growth'
    },
    {
      num: '04',
      code: 'EFF-TAB',
      title: 'Effervescent Technology',
      category: 'Rapid Bioavailability Systems',
      desc: 'Desiccant-controlled low-humidity cleanrooms (<20% RH) ensuring instant effervescence and complete mineral-botanical solubility.',
      spec: '<20% RH Dry Suite',
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg',
      link: '/capabilities#effervescents',
      badge: 'Bio-Enhanced'
    },
    {
      num: '05',
      code: 'SOL-TAB',
      title: 'Tablets & Bilayer Solids',
      category: 'Controlled Release Delivery',
      desc: 'High-tonnage rotary presses with auto-weight rejection for modified-release bilayers, enteric coatings, and multi-herb matrices.',
      spec: 'Multi-Coating & Bilayer',
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg',
      link: '/capabilities#solids',
      badge: 'High Volume'
    },
    {
      num: '06',
      code: 'LIQ-BOT',
      title: 'Ayurvedic Syrups & Tonics',
      category: 'Classical & Modern Hydro-Extracts',
      desc: 'Stainless steel SS316 closed-loop brewing vessels for decoctions, classical kwaths, self-generated asavas, and modern nano-syrups.',
      spec: 'SS316 Closed Vessels',
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg',
      link: '/capabilities#traditional',
      badge: 'Heritage & Science'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#030914] text-white">
      
      {/* ========================================================================= */}
      {/* SECTION 00: CINEMATIC FULL-SCREEN HERO TRAILER (Colossal-Style Rapid Cuts) */}
      {/* ========================================================================= */}
      <HeroTrailer />

      {/* ========================================================================= */}
      {/* SECTION 01: THE BOTANICAL EVOLUTION                                       */}
      {/* ========================================================================= */}
      <section id="section-evolution" className="relative py-32 md:py-44 px-6 md:px-16 bg-[#F8FAFC] blueprint-grid-light border-b border-slate-200">
        
        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-20">
          <div className="flex items-center gap-6 border-b border-slate-300 pb-4">
            <span className="monogram-badge">SECTION 01 • THE BOTANICAL EVOLUTION</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">STRATEGIC REBRANDING</span>
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
              Standardized Purity is a Critical Industry Challenge.<br />
              <span className="text-[#0052FF]">HAS Lifesciences is Building the Solution.</span>
            </h3>

            <p className="font-telegraf text-slate-600 text-lg sm:text-xl leading-relaxed">
              For decades, herbal manufacturing suffered from active compound variability and lack of chromatographic standardization. We are re-engineering the paradigm.
            </p>

            <p className="font-telegraf text-slate-600 text-base sm:text-lg leading-relaxed">
              From our roots as <strong>HAS Herbal</strong>, we have evolved into <strong>HAS Lifesciences Private Limited</strong> — an integrated contract development and manufacturing powerhouse combining ancient botanical science with pharmaceutical-grade cGMP discipline.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="colossal-big-button"
              >
                <span>Read Our Evolution Story</span>
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="font-architekt text-xs uppercase text-[#0052FF] font-bold tracking-widest">PILLAR 01</div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Standardized Phyto-Assays</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                HPLC, HPTLC, and LC-MS validated extraction ensuring active marker concentrations are batch-consistent.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div className="font-architekt text-xs uppercase text-[#0052FF] font-bold tracking-widest">PILLAR 02</div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Zoned Cleanroom Campus</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                ~78,000 sq. ft. multi-level pharmaceutical manufacturing facility designed to prevent cross-contamination.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="font-architekt text-xs uppercase text-[#0052FF] font-bold tracking-widest">PILLAR 03</div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Advanced Delivery Formats</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                Gummies, rotary softgels, effervescents, bilayer tablets, and stabilized classical liquid extracts.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="font-architekt text-xs uppercase text-[#0052FF] font-bold tracking-widest">PILLAR 04</div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Global Compliance</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                Comprehensive dossier support, Certificate of Analysis (CoA) generation, stability data, and validation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: DOSAGE PLATFORMS DIRECTORY                                    */}
      {/* ========================================================================= */}
      <section id="section-platforms" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030914] text-white">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0052FF]/15 blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-24 relative z-10">
          <div className="flex items-center gap-6 border-b border-white/20 pb-4">
            <span className="monogram-badge-dark">SECTION 02 • DOSAGE DELIVERY PLATFORMS</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">MANUFACTURING DIRECTORY</span>
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

        {/* 6 High-Impact Dosage Cards */}
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
                  
                  {/* Big Number Badge */}
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
                  <span>Technical Specifications</span>
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
            <span className="monogram-badge">SECTION 03 • MANUFACTURING CAMPUS</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">FACILITY ENGINEERING</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase mt-8">
            ~78,000 Sq. Ft. Campus
          </h2>
        </div>

        {/* Panoramic Visual with Blueprint Overlay */}
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
                  THREE ZONED PHARMACEUTICAL LEVELS
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/15">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">LEVEL 01</div>
                <h4 className="font-architekt font-bold text-xl text-white">Extraction & Raw Materials</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Heavy botanical pulverizing, solvent extraction vessels, primary decanting & temperature-controlled warehouses.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">LEVEL 02</div>
                <h4 className="font-architekt font-bold text-xl text-white">Class 10,000 Cleanroom Suites</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Softgel rotary die lines, low-humidity effervescent suites, starchless gummy depositors & high-speed tablet compression.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-2xl font-bold text-[#00D2FF]">LEVEL 03</div>
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
            <span className="monogram-badge">SECTION 04 • MANUFACTURING PIPELINE</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-slate-500">10-STEP CDMO ROADMAP</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase mt-8">
            Idea to Commercial Scale
          </h2>
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">01</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">Concept & Brief</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Target dosage format selection, active phytomarker identification, and technical feasibility review.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">02</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">R&D Formulation</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Benchtop pilot batches, sensory bitterness masking, active assay testing, and client prototype sign-off.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">03</div>
            <h3 className="font-architekt font-bold text-2xl text-[#030914]">Scale-Up & QC</h3>
            <p className="font-telegraf text-slate-600 text-base leading-relaxed">
              Cleanroom batch execution, in-process controls (IPQC), and HPLC active compound verification.
            </p>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="font-architekt text-3xl font-bold text-[#0052FF]">04</div>
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
            <span className="monogram-badge-dark">SECTION 05 • QUALITY SYSTEMS</span>
            <span className="font-architekt text-xs uppercase tracking-widest text-white/60">ANALYTICAL SCIENCE & QC</span>
          </div>

          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white tracking-tight leading-[0.96] uppercase mt-8">
            9-Stage Quality Framework
          </h2>
        </div>

        {/* HPLC Lab Visual & QA Specs */}
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
              CHROMATOGRAPHIC & MICROBIAL TESTING SUITES
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
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">STAGES 01 - 03</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Raw Material & Microbial</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Botanical identity voucher verification, heavy metal spectrometry (Pb, Cd, Hg, As), and pathogen screening.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">STAGES 04 - 06</div>
            <h4 className="font-architekt font-bold text-2xl text-white">In-Process & HPLC Assays</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Continuous weight/hardness IPQC, chromatographic active marker quantification, and blister vacuum leak tests.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-2xl font-bold text-[#00D2FF]">STAGES 07 - 09</div>
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
            PROJECT INTAKE & PARTNERSHIP
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
