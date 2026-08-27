import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Maximize2, Sparkles, Dna, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroTrailer() {
  const scenes = [
    {
      id: '01',
      title: 'cGMP Cleanroom Suite',
      category: 'AUTOMATED MANUFACTURING',
      image: '/assets/generated/has_cleanroom_hero_1787739262235.jpg',
      stat: 'Class 10,000 / ISO 7',
      desc: 'Positive-pressure HVAC cleanroom suites with automated processing.'
    },
    {
      id: '02',
      title: 'Agilent HPLC Chromatography',
      category: 'ANALYTICAL SCIENCE',
      image: '/assets/generated/has_analytical_hplc_lab_1787820264292.jpg',
      stat: 'Purity ≥ 99.2%',
      desc: 'High-performance chromatographic assay validation for bio-markers.'
    },
    {
      id: '03',
      title: 'Falling-Film Vacuum Extraction',
      category: 'BOTANICAL CHEMISTRY',
      image: '/assets/generated/has_botanical_extraction_1787739370349.jpg',
      stat: 'Low-Temp Recovery',
      desc: 'Thermolabile active preservation under continuous vacuum extraction.'
    },
    {
      id: '04',
      title: 'Rotary Die Softgel Line',
      category: 'LIPID ENCAPSULATION',
      image: '/assets/generated/has_softgels_macro_1787739287054.jpg',
      stat: 'High-Throughput Die',
      desc: 'Hermetic gelatin and plant-based vegetarian softgel encapsulation.'
    },
    {
      id: '05',
      title: 'Effervescent Dissolution Kinetics',
      category: 'EFFERVESCENT DOSAGE',
      image: '/assets/generated/has_effervescent_macro_1787820101278.jpg',
      stat: '<20% RH Controlled',
      desc: 'Rapid dispersion mineral and vitamin hydration delivery platforms.'
    },
    {
      id: '06',
      title: 'Pectin Nutraceutical Gummies',
      category: 'CONFECTIONERY DELIVERY',
      image: '/assets/generated/has_gummies_macro_1787739307098.jpg',
      stat: 'Clean Hydrocolloid',
      desc: 'Thermally stabilized chewable gummies with organic fruit flavor profiles.'
    },
    {
      id: '07',
      title: 'Precision Bilayer Compression',
      category: 'SOLID ORAL TABLETING',
      image: '/assets/generated/has_tablets_macro_1787820225149.jpg',
      stat: 'Controlled Release',
      desc: 'Multi-layer high-tonnage rotary compression for modified dissolution.'
    },
    {
      id: '08',
      title: '~78,000 Sq. Ft. Biotech Campus',
      category: 'MASTER INFRASTRUCTURE',
      image: '/assets/generated/has_campus_hero_1787739337547.jpg',
      stat: '3-Level Integrated Campus',
      desc: 'State-of-the-art pharmaceutical CDMO infrastructure in Jaipur, Rajasthan.'
    },
    {
      id: '09',
      title: 'Automated Alu-Alu Blistering',
      category: 'BARRIER PACKAGING',
      image: '/assets/generated/has_pharma_packaging_1787820244617.jpg',
      stat: 'Zero Moisture Ingress',
      desc: 'Cold-form barrier blister packing with in-line pinhole detection.'
    },
    {
      id: '10',
      title: 'Classical Ayurvedic Kwath Extraction',
      category: 'HERITAGE PHARMA',
      image: '/assets/generated/has_ayurvedic_liquid_1787820189306.jpg',
      stat: 'SS316 Closed Loop',
      desc: 'Aseptic liquid decoctions and swaras juice processing lines.'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [flashCut, setFlashCut] = useState(false);
  const [timecode, setTimecode] = useState('00:00:01:00');
  const [theaterMode, setTheaterMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const durationPerScene = 1800; // 1.8 seconds per scene for rapid cinema cuts
  const timerRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Running Timecode
  useEffect(() => {
    const tcInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const mins = String(Math.floor((elapsed / 60000) % 60)).padStart(2, '0');
      const secs = String(Math.floor((elapsed / 1000) % 60)).padStart(2, '0');
      const frames = String(Math.floor((elapsed % 1000) / 40)).padStart(2, '0');
      setTimecode(`00:${mins}:${secs}:${frames}`);
    }, 40);
    return () => clearInterval(tcInterval);
  }, []);

  // Rapid Trailer Scene Cycling
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress
    let stepCount = 0;
    const totalSteps = durationPerScene / intervalTime;

    const interval = setInterval(() => {
      stepCount += 1;
      const p = (stepCount / totalSteps) * 100;
      setProgress(p);

      if (stepCount >= totalSteps) {
        // Trigger quick cut flash
        setFlashCut(true);
        setTimeout(() => setFlashCut(false), 90);
        setCurrentIdx((prev) => (prev + 1) % scenes.length);
        stepCount = 0;
        setProgress(0);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, scenes.length, currentIdx]);

  const handleNext = () => {
    setFlashCut(true);
    setTimeout(() => setFlashCut(false), 90);
    setCurrentIdx((prev) => (prev + 1) % scenes.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setFlashCut(true);
    setTimeout(() => setFlashCut(false), 90);
    setCurrentIdx((prev) => (prev - 1 + scenes.length) % scenes.length);
    setProgress(0);
  };

  const handleSelectScene = (idx) => {
    setFlashCut(true);
    setTimeout(() => setFlashCut(false), 90);
    setCurrentIdx(idx);
    setProgress(0);
  };

  const currentScene = scenes[currentIdx];

  return (
    <section
      id="section-hero"
      className={`relative w-full text-white overflow-hidden transition-all duration-700 select-none ${
        theaterMode
          ? 'fixed inset-0 z-50 bg-black min-h-screen flex flex-col justify-between p-6 md:p-12'
          : 'min-h-screen bg-[#030914] flex flex-col justify-between pt-32 pb-14 px-6 md:px-16'
      }`}
    >
      {/* 1. CINEMATIC MULTI-SCENE BACKGROUND MONTAGE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {scenes.map((scene, idx) => {
          const isActive = idx === currentIdx;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Ken Burns Zoom & Pan Animation */}
              <img
                src={scene.image}
                alt={scene.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[2200ms] ease-out ${
                  isActive ? 'scale-110 translate-x-1 -translate-y-1' : 'scale-100'
                } opacity-40 mix-blend-luminosity`}
              />
            </div>
          );
        })}

        {/* Rapid Flash Cut Overlay */}
        <div
          className={`absolute inset-0 bg-white/20 mix-blend-overlay z-20 pointer-events-none transition-opacity duration-75 ${
            flashCut ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Science Blue Radial Glows */}
        <div className="absolute top-1/4 -left-40 w-[650px] h-[650px] rounded-full bg-[#0052FF]/25 blur-[150px]" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-[#00D2FF]/20 blur-[140px]" />

        {/* Film Grain & Blueprint Scanline Overlays */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/40 to-[#030914]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-transparent to-[#030914]/80" />
      </div>

      {/* 2. TOP TRAILER HUD & LIVE STATUS */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 font-architekt text-xs uppercase tracking-[0.2em] text-white/80 border-b border-white/15 pb-4">
          
          {/* Live Recording / Trailer Indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_12px_#EF4444]" />
            </span>
            <span className="font-bold text-white tracking-widest">CDMO CINEMATIC REEL</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-[#00D2FF] font-bold hidden sm:inline">4K UHD • 60 FPS</span>
          </div>

          {/* Timecode & Active Scene Tag */}
          <div className="flex items-center gap-4 text-xs font-architekt">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-mono text-[#00D2FF]">
              {timecode}
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/70">
              <span>SCENE {currentScene.id} / {String(scenes.length).padStart(2, '0')}:</span>
              <strong className="text-white">{currentScene.title}</strong>
            </div>
          </div>

        </div>

        {/* Segmented Scene Progress Bar (Colossal / Reels Style) */}
        <div className="grid grid-cols-10 gap-1.5 pt-3 w-full">
          {scenes.map((scene, idx) => {
            const isPast = idx < currentIdx;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={scene.id}
                onClick={() => handleSelectScene(idx)}
                title={`${scene.id}: ${scene.title}`}
                className="h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer group hover:bg-white/40 transition-colors relative"
              >
                <div
                  className="h-full bg-[#00D2FF] transition-all duration-75"
                  style={{
                    width: isPast ? '100%' : isCurrent ? `${progress}%` : '0%'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. HERO CENTER CONTENT (HIGH-CONTRAST TYPOGRAPHY) */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Bold Slogan & Dynamic Badge */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-architekt font-bold uppercase tracking-widest text-[#00D2FF]">
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#00D2FF]" />
              <span>{currentScene.category} • {currentScene.stat}</span>
            </div>

            <h1 className="font-architekt text-6xl sm:text-7xl md:text-8xl lg:text-[116px] xl:text-[136px] text-white tracking-[0.01em] leading-[0.86] uppercase select-none drop-shadow-2xl">
              NATURE.<br />
              SCIENCE.<br />
              <span className="text-gradient-blue">NEXT.</span>
            </h1>
          </div>

          {/* Right Column: Live Context & CTA Buttons */}
          <div className="lg:col-span-4 space-y-8 pb-4">
            <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-architekt text-[#00D2FF] font-bold tracking-wider uppercase">
                <span>SCENE [{currentScene.id}]</span>
                <span>{currentScene.stat}</span>
              </div>
              <h3 className="font-architekt font-bold text-xl text-white">
                {currentScene.title}
              </h3>
              <p className="font-telegraf text-slate-300 text-sm leading-relaxed">
                {currentScene.desc}
              </p>
            </div>

            <p className="font-telegraf text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
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

      {/* 4. BOTTOM TRAILER CONTROLS & METRIC BAR */}
      <div className="relative z-30 max-w-[1800px] mx-auto w-full border-t border-white/15 pt-6 font-architekt text-xs text-white/70 flex flex-wrap items-center justify-between gap-6">
        
        {/* Left: Trailer Playback Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer flex items-center justify-center"
            title={isPlaying ? 'Pause Reel' : 'Play Reel'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer"
            title="Previous Scene"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer"
            title="Next Scene"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          <span className="text-[11px] text-white/50 pl-2 hidden sm:inline">
            TRAILER: <strong>{currentScene.title}</strong>
          </span>
        </div>

        {/* Center: Specs */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] text-white/60">
          <span>FACILITY: ~78,000 SQ. FT.</span>
          <span>•</span>
          <span>STANDARDS: cGMP • HPLC • ISO 7 CLEANROOMS</span>
        </div>

        {/* Right: Theater Mode Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheaterMode(!theaterMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all cursor-pointer text-[11px] uppercase tracking-wider"
          >
            <Maximize2 className="w-3 h-3" />
            <span>{theaterMode ? 'Exit Theater' : 'Theater View'}</span>
          </button>
        </div>

      </div>

    </section>
  );
}
