import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Layers, 
  Sparkles, 
  Award, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import TypewriterText from '../components/TypewriterText';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      num: '01',
      title: 'Botanical Extraction & Phyto-Actives',
      category: 'Phytochemistry & Standardization',
      desc: 'Falling-film vacuum extraction, low-temperature concentration, and chromatographic marker standardization.',
      spec: 'HPLC Assays • Withanolides • Curcuminoids',
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg',
      link: '/capabilities#extraction'
    },
    {
      num: '02',
      title: 'Rotary Die Softgel Encapsulation',
      category: 'Lipid & Oil Formulations',
      desc: 'Precision rotary die encapsulation for omega oils, fat-soluble vitamins, and botanical lipid emulsions.',
      spec: 'Gelatin & Plant Veggie Shells • Seamless Sealing',
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg',
      link: '/capabilities#softgels'
    },
    {
      num: '03',
      title: 'Pectin & Gelatin Functional Gummies',
      category: 'Nutraceutical Confectionery',
      desc: 'Clean-label 100% citrus pectin gummies engineered with thermo-tolerant active blending and natural fruit flavors.',
      spec: '100% Vegan Pectin • Sugar-Free Available',
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg',
      link: '/capabilities#gummies'
    },
    {
      num: '04',
      title: 'Low-Humidity Effervescent Tablets',
      category: 'Fast Dissolution Delivery',
      desc: 'Specialized low-humidity manufacturing (<20% RH) ensuring rapid effervescence, zero residue, and high bioavailability.',
      spec: '<20% RH Controlled Suites • Tube Packaging',
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg',
      link: '/capabilities#effervescent'
    },
    {
      num: '05',
      title: 'Solid Oral & Bilayer Tablets',
      category: 'High-Speed Compression',
      desc: 'High-speed rotary tablet compression with enteric and aqueous film coating for targeted sustained release.',
      spec: 'Bilayer Technology • Moisture-Barrier Coating',
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg',
      link: '/capabilities#tablets'
    },
    {
      num: '06',
      title: 'Classical Ayurvedic Liquids & Decoctions',
      category: 'Classical Pharmacology',
      desc: 'Authentic stainless-steel steam-jacketed decoctions (Kwath), fresh juice extracts (Swaras), and standardized syrups.',
      spec: 'Class 10k Aseptic Bottling • Amber Glass & HDPE',
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg',
      link: '/capabilities#traditional'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#030914] text-white">
      <SEO
        title="HAS Lifesciences | Next-Gen Botanical & Nutraceutical CDMO India"
        description="HAS Lifesciences Private Limited is India’s premier integrated CDMO for standardized botanical extraction, softgels, pectin gummies, effervescent tablets, and ~78,000 sq. ft. cGMP manufacturing facility in Jaipur, Rajasthan."
        keywords="HAS Lifesciences, HAS Herbal, Botanical CDMO, Nutraceutical Manufacturer India, Softgel CDMO India, Pectin Gummies Manufacturer India, Effervescent Tablets CDMO, Ayurvedic Contract Manufacturing, HPLC Standardized Extracts, cGMP Pharma Facility Jaipur, HAS Lifesciences Private Limited"
      />
      
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section id="section-hero" className="relative w-full min-h-screen bg-[#030914] text-white flex flex-col justify-between pt-32 pb-12 px-6 md:px-16 overflow-hidden">
        
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

        {/* Hero Center Typography */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full my-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            <div className="lg:col-span-8 space-y-6">
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
                India's premier integrated CDMO for standardized botanical extraction, classical Ayurveda, and advanced nutraceutical delivery systems.
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
                  Initiate Project Brief
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full border-t border-white/15 pt-6 font-architekt text-xs text-white/70 flex items-center justify-between">
          <div>JAIPUR, RAJASTHAN, INDIA</div>
          <div className="text-[#00D2FF] font-bold flex items-center gap-2">
            <span>EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* THE BOTANICAL EVOLUTION                                                   */}
      {/* ========================================================================= */}
      <section id="section-evolution" className="relative py-32 md:py-44 px-6 md:px-16 bg-[#F8FAFC] blueprint-grid-light border-b border-slate-200">
        
        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-20">
          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase">
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
                <span>Read Our Story</span>
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Strategic Features */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Standardized Phyto-Assays</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                HPLC, HPTLC, and LC-MS validated extraction ensuring active marker concentrations are batch-consistent.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Zoned Cleanroom Campus</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                ~78,000 sq. ft. multi-level pharmaceutical manufacturing facility designed to prevent cross-contamination.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Advanced Delivery Formats</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                Gummies, rotary softgels, effervescents, bilayer tablets, and stabilized classical liquid extracts.
              </p>
            </div>

            <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-architekt font-bold text-2xl text-[#030914]">Global Compliance</h4>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                Comprehensive dossier support, Certificate of Analysis (CoA) generation, stability data, and validation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* DOSAGE PLATFORMS DIRECTORY                                                */}
      {/* ========================================================================= */}
      <section id="section-platforms" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030914] text-white">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0052FF]/15 blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto mb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white tracking-tight leading-[0.96] uppercase">
                Dosage Delivery Formats
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
                {/* 16:10 Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Clean Number */}
                  <div className="absolute top-5 left-5">
                    <span className="font-architekt text-sm font-bold text-white px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 shadow-lg">
                      {p.num}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-4">
                  <span className="font-architekt text-xs uppercase tracking-widest text-[#00D2FF] font-bold">
                    {p.category}
                  </span>

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
            <span>View All Capabilities</span>
            <span className="plus-icon">+</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 78,000 SQ. FT. CAMPUS BLUEPRINT                                           */}
      {/* ========================================================================= */}
      <section id="section-facility" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#F8FAFC] border-b border-slate-200">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase">
            ~78,000 Sq. Ft. Manufacturing Campus
          </h2>
        </div>

        {/* Panoramic Visual with Overlay */}
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
                <h3 className="font-architekt font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                  Zoned for Zero Cross-Contamination & Pharma cGMP
                </h3>
                <p className="font-telegraf text-slate-300 text-lg leading-relaxed max-w-3xl">
                  Engineered with Class 10,000 cleanrooms, independent HVAC air handling units, and strict differential pressure regimes.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/infrastructure"
                  className="colossal-big-button light"
                >
                  <span>Explore Infrastructure</span>
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/15">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-xl font-bold text-[#00D2FF]">Ground Floor</div>
                <h4 className="font-architekt font-bold text-xl text-white">Extraction & Raw Materials</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Botanical pulverizing, solvent extraction vessels, primary decanting & temperature-controlled warehouses.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-xl font-bold text-[#00D2FF]">First Floor</div>
                <h4 className="font-architekt font-bold text-xl text-white">Class 10,000 Cleanrooms</h4>
                <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
                  Softgel rotary die lines, low-humidity effervescent suites, starchless gummy depositors & tablet compression.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="font-architekt text-xl font-bold text-[#00D2FF]">Second Floor</div>
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
      {/* CDMO METHODOLOGY PIPELINE                                                 */}
      {/* ========================================================================= */}
      <section id="section-pipeline" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#F8FAFC] border-b border-slate-200">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#030914] tracking-tight leading-[0.96] uppercase">
            Turnkey CDMO Workflow
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
            <span>Explore 10-Step Process</span>
            <span className="plus-icon">+</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* QUALITY & QC SYSTEMS                                                      */}
      {/* ========================================================================= */}
      <section id="section-quality" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030914] text-white">
        
        <div className="max-w-[1800px] mx-auto mb-20">
          <h2 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white tracking-tight leading-[0.96] uppercase">
            Quality Assurance & Testing
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
            <h3 className="font-architekt font-bold text-3xl sm:text-4xl text-white">
              Every Batch Backed by Instrumental Proof
            </h3>
            <p className="font-telegraf text-slate-300 text-lg leading-relaxed">
              We employ Agilent HPLC and Camag HPTLC systems for active bio-marker assay testing, alongside ICP-MS heavy metals testing and Class 10,000 cleanroom microbiology testing.
            </p>
            <div className="pt-2">
              <Link to="/quality" className="colossal-big-button light">
                <span>View Quality Systems</span>
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-xl font-bold text-[#00D2FF]">01. Raw Materials</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Identity & Purity</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Botanical identity voucher verification, heavy metal spectrometry (Pb, Cd, Hg, As), and pathogen screening.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-xl font-bold text-[#00D2FF]">02. In-Process</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Assays & Controls</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              Continuous weight/hardness IPQC, chromatographic active marker quantification, and blister vacuum leak tests.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="font-architekt text-xl font-bold text-[#00D2FF]">03. Final Release</div>
            <h4 className="font-architekt font-bold text-2xl text-white">Stability & Batch CoA</h4>
            <p className="font-telegraf text-sm text-slate-300 leading-relaxed">
              ICH Q1A stability chamber monitoring, complete Batch Manufacturing Record audit, and formal QP release.
            </p>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS (LIVE TYPEWRITER ACCORDION)                     */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 md:px-16 bg-[#030914] text-white">
        <div className="max-w-[1400px] mx-auto space-y-16">
          
          <div className="space-y-4">
            <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Frequently Asked Questions
            </h2>
            <p className="font-telegraf text-slate-400 text-base sm:text-lg">
              Click on any question to view live analytical and manufacturing responses.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What contract manufacturing services does HAS Lifesciences provide?',
                a: 'HAS Lifesciences Private Limited provides comprehensive end-to-end CDMO (Contract Development and Manufacturing) solutions covering standardized botanical extraction, rotary softgel encapsulation, pectin nutraceutical gummies, effervescent tablets, bilayer oral solid tablets, and classical Ayurvedic liquid decoctions (Kwath/Swaras).'
              },
              {
                q: 'Where is the HAS Lifesciences manufacturing campus located?',
                a: 'Our ~78,000 sq. ft. multi-level pharmaceutical and botanical manufacturing campus is located in Jaipur, Rajasthan, India, engineered in accordance with WHO-GMP and international export standards.'
              },
              {
                q: 'What quality testing and chromatographic validations do you perform?',
                a: 'Every production batch undergoes a 9-stage quality protocol including HPLC, HPTLC, and LC-MS active phytomarker assay quantification, heavy metal spectrometry (Pb, Cd, Hg, As), microbial bio-burden screening, and ICH Q1A real-time and accelerated stability testing.'
              },
              {
                q: 'Does HAS Lifesciences support custom formulation, taste masking, and pilot scaling?',
                a: 'Yes, our R&D Phytochemistry and Organoleptic labs specialize in custom recipe engineering, botanical bitterness masking for consumer gummies and drinks, laboratory pilot batches (1-5 kg), and seamless industrial scale-up.'
              },
              {
                q: 'What compliance and export regulatory dossiers do you support?',
                a: 'We provide full technical documentation including Batch Manufacturing Records (BMR), Certificates of Analysis (CoA), stability data, and regulatory dossiers compliant with FSSAI, AYUSH, US-FDA cGMP benchmarks, and global health authorities.'
              }
            ].map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  onClick={() => toggleFaq(fIdx)}
                  className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'bg-white/10 border-[#00D2FF] shadow-[0_0_30px_rgba(0,210,255,0.12)]'
                      : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="font-architekt font-bold text-xl sm:text-2xl text-white flex items-center justify-between gap-6">
                    <span className={isOpen ? 'text-[#00D2FF] transition-colors' : 'text-white'}>
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center text-lg font-light transition-transform duration-300 ${
                      isOpen ? 'rotate-45 border-[#00D2FF] text-[#00D2FF] bg-[#00D2FF]/15' : 'border-white/30 text-white/70'
                    }`}>
                      +
                    </span>
                  </div>

                  <TypewriterText text={faq.a} isActive={isOpen} speed={7} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROJECT INTAKE CALLOUT                                                    */}
      {/* ========================================================================= */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 text-center bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto space-y-10">
          
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
