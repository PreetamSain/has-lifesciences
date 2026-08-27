import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, Dna, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroTrailer() {
  // 12-beat high-energy cinematic sequence with variable trailer durations (0.5s to 2.0s)
  const cuts = [
    {
      id: '01',
      title: 'Automated cGMP Cleanroom',
      tag: 'CLASS 10,000 SUITE',
      image: '/assets/generated/has_cleanroom_hero_1787739262235.jpg',
      duration: 1200, // 1.2s
      zoomType: 'zoom-in'
    },
    {
      id: '02',
      title: 'Phyto-Active Botanical Extraction',
      tag: 'FALLING-FILM VACUUM',
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg',
      duration: 600, // 0.6s (rapid cut)
      zoomType: 'pan-right'
    },
    {
      id: '03',
      title: 'Agilent HPLC Chromatography',
      tag: 'ASSAY PURITY ≥99%',
      image: '/assets/generated/has_analytical_hplc_lab_1787820264292.jpg',
      duration: 800, // 0.8s
      zoomType: 'zoom-out'
    },
    {
      id: '04',
      title: 'Rotary Die Softgel Encapsulation',
      tag: 'LIPID DOSAGE PLATFORM',
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg',
      duration: 1800, // 1.8s (macro focus)
      zoomType: 'zoom-in'
    },
    {
      id: '05',
      title: 'Effervescent Reaction Kinetics',
      tag: 'RAPID DISSOLUTION',
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg',
      duration: 500, // 0.5s (fast impact)
      zoomType: 'pan-up'
    },
    {
      id: '06',
      title: 'Pectin Hydrocolloid Gummies',
      tag: 'CLEAN CONFECTIONERY',
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg',
      duration: 700, // 0.7s
      zoomType: 'zoom-out'
    },
    {
      id: '07',
      title: 'Bilayer Compression Tableting',
      tag: 'MODIFIED RELEASE',
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg',
      duration: 600, // 0.6s
      zoomType: 'zoom-in'
    },
    {
      id: '08',
      title: '~78,000 Sq. Ft. Biotech Campus',
      tag: '3-LEVEL INTEGRATED PLATFORM',
      image: '/assets/generated/has_campus_hero_1787739337547.jpg',
      duration: 2000, // 2.0s (grand wide panorama)
      zoomType: 'pan-left'
    },
    {
      id: '09',
      title: 'High-Barrier Alu-Alu Blistering',
      tag: 'AUTOMATED PACKAGING',
      image: '/assets/generated/has_pharma_packaging_1787820244617.jpg',
      duration: 500, // 0.5s (rapid cut)
      zoomType: 'zoom-out'
    },
    {
      id: '10',
      title: 'Classical Ayurvedic Extraction Tanks',
      tag: 'SS316 CLOSED LOOP',
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg',
      duration: 1400, // 1.4s
      zoomType: 'zoom-in'
    },
    {
      id: '11',
      title: 'Molecular Phytomarker Crystals',
      tag: 'BIO-CRYSTAL LATTICE',
      image: '/assets/generated/trailer_phytomarker_crystals_1787826789518.jpg',
      duration: 600, // 0.6s (laser cut)
      zoomType: 'zoom-in'
    },
    {
      id: '12',
      title: 'Bioluminescent Botanical DNA Matrix',
      tag: 'FUTURE BIOTECHNOLOGY',
      image: '/assets/generated/trailer_dna_botanical_helix_1787826761794.jpg',
      duration: 1600, // 1.6s
      zoomType: 'pan-right'
    }
  ];

  const [currentCut, setCurrentCut] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isShutter, setIsShutter] = useState(false);
  const [timecode, setTimecode] = useState('00:00:01:00');
  const [totalProgress, setTotalProgress] = useState(0);

  const startTimestampRef = useRef(Date.now());
  const activeCutRef = useRef(0);
  activeCutRef.current = currentCut;

  // Running Film Timecode
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimestampRef.current;
      const mins = String(Math.floor((elapsed / 60000) % 60)).padStart(2, '0');
      const secs = String(Math.floor((elapsed / 1000) % 60)).padStart(2, '0');
      const frames = String(Math.floor((elapsed % 1000) / 40)).padStart(2, '0');
      setTimecode(`00:${mins}:${secs}:${frames}`);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Continuous Video Loop Engine with variable durations
  useEffect(() => {
    if (!isPlaying) return;

    const currentDuration = cuts[currentCut].duration;
    
    // Shutter flash right before transition
    const shutterTimeout = setTimeout(() => {
      setIsShutter(true);
      setTimeout(() => setIsShutter(false), 70);
    }, currentDuration - 70);

    const cutTimeout = setTimeout(() => {
      setCurrentCut((prev) => (prev + 1) % cuts.length);
    }, currentDuration);

    return () => {
      clearTimeout(shutterTimeout);
      clearTimeout(cutTimeout);
    };
  }, [currentCut, isPlaying, cuts.length]);

  // Unified global progress calculation
  useEffect(() => {
    const totalDuration = cuts.reduce((acc, c) => acc + c.duration, 0);
    let cumulative = 0;
    for (let i = 0; i < currentCut; i++) {
      cumulative += cuts[i].duration;
    }
    const percent = ((cumulative + cuts[currentCut].duration * 0.5) / totalDuration) * 100;
    setTotalProgress(percent);
  }, [currentCut]);

  const activeScene = cuts[currentCut];

  return (
    <section
      id="section-hero"
      className="relative w-full min-h-screen bg-[#030914] text-white flex flex-col justify-between pt-32 pb-14 px-6 md:px-16 overflow-hidden select-none"
    >
      {/* 1. SEAMLESS BACKGROUND VIDEO ENGINE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {cuts.map((cut, idx) => {
          const isActive = idx === currentCut;
          return (
            <div
              key={cut.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Dynamic Camera Movement per scene */}
              <img
                src={cut.image}
                alt={cut.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[2400ms] ease-out ${
                  isActive
                    ? cut.zoomType === 'zoom-in'
                      ? 'scale-115'
                      : cut.zoomType === 'zoom-out'
                      ? 'scale-100'
                      : cut.zoomType === 'pan-right'
                      ? 'scale-110 translate-x-3'
                      : cut.zoomType === 'pan-left'
                      ? 'scale-110 -translate-x-3'
                      : 'scale-110 -translate-y-2'
                    : 'scale-105'
                } opacity-40 mix-blend-luminosity`}
              />
            </div>
          );
        })}

        {/* Rapid Camera Shutter Flash Effect */}
        <div
          className={`absolute inset-0 bg-white/25 mix-blend-screen z-20 pointer-events-none transition-opacity duration-75 ${
            isShutter ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Science Blue Radial Gradients */}
        <div className="absolute top-1/4 -left-40 w-[650px] h-[650px] rounded-full bg-[#0052FF]/25 blur-[150px]" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-[#00D2FF]/20 blur-[140px]" />

        {/* Cinematic Film Vignette & Gradients */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/40 to-[#030914]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-transparent to-[#030914]/80" />

        {/* Animated Horizontal Laser Scanline */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2FF]/60 to-transparent animate-[scan_6s_linear_infinite]" />
      </div>

      {/* 2. TOP TRAILER BROADCAST HEADER */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 font-architekt text-xs uppercase tracking-[0.2em] text-white/80 border-b border-white/15 pb-4">
          
          {/* Live Reel Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D2FF] shadow-[0_0_10px_#00D2FF]" />
            </span>
            <span className="font-bold text-white tracking-widest">CDMO CINEMATIC TRAILER</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-[#00D2FF] font-bold hidden sm:inline">4K UHD • 60 FPS</span>
          </div>

          {/* Active Cut Meta */}
          <div className="flex items-center gap-4 text-xs font-architekt">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-mono text-[#00D2FF] text-[11px]">
              {timecode}
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/70">
              <span className="text-white/50">SCENE {activeScene.id} / {String(cuts.length).padStart(2, '0')}:</span>
              <strong className="text-white">{activeScene.title}</strong>
            </div>
          </div>

        </div>

        {/* Global Continuous Running Progress Strip */}
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-[#0052FF] via-[#00D2FF] to-white transition-all duration-300 ease-linear shadow-[0_0_8px_#00D2FF]"
            style={{ width: `${totalProgress}%` }}
          />
        </div>
      </div>

      {/* 3. HERO CENTER CONTENT (CLEAN, NO CLUNKY BOXES) */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Monumental Slogan */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-architekt font-bold uppercase tracking-widest text-[#00D2FF]">
              <Dna className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>INTEGRATED CDMO PLATFORM • JAIPUR, INDIA</span>
            </div>

            <h1 className="font-architekt text-6xl sm:text-7xl md:text-8xl lg:text-[116px] xl:text-[136px] text-white tracking-[0.01em] leading-[0.86] uppercase select-none drop-shadow-2xl">
              NATURE.<br />
              SCIENCE.<br />
              <span className="text-gradient-blue">NEXT.</span>
            </h1>
          </div>

          {/* Right Column: Narrative & Action */}
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
                className="colossal-big-button light shadow-2xl"
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

      {/* 4. BOTTOM VIDEO TRAILER STATUS BAR */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full border-t border-white/15 pt-6 font-architekt text-xs text-white/70 flex flex-wrap items-center justify-between gap-6">
        
        {/* Playback Controls & Current Cut Tag */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer flex items-center justify-center"
            title={isPlaying ? 'Pause Trailer' : 'Play Trailer'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          <button
            onClick={() => setCurrentCut((prev) => (prev + 1) % cuts.length)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer"
            title="Next Cut"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          <div className="text-[11px] text-white/60 pl-2">
            CUT <strong className="text-[#00D2FF]">[{activeScene.id}]</strong>: {activeScene.title}
          </div>
        </div>

        {/* Facility Standards */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-white/60">
          <span>~78,000 SQ. FT. CAMPUS</span>
          <span>•</span>
          <span>cGMP • HPLC ASSAYS • ISO 7 CLEANROOMS</span>
        </div>

        {/* Scroll Indicator */}
        <div className="text-[#00D2FF] font-bold text-xs">
          SCROLL DOWN TO EXPLORE ↓
        </div>

      </div>

    </section>
  );
}
