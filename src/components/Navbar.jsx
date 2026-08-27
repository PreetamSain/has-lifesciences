import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('00 INTRO');
  const [indexOpen, setIndexOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        { id: 'section-hero', name: '00 INTRO' },
        { id: 'section-evolution', name: '01 THE EVOLUTION' },
        { id: 'section-platforms', name: '02 DOSAGE PLATFORMS' },
        { id: 'section-facility', name: '03 78K FACILITY' },
        { id: 'section-pipeline', name: '04 CDMO PIPELINE' },
        { id: 'section-quality', name: '05 9-STAGE QC' },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 120) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIndexOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { num: '01', name: 'Botanical Science', path: '/capabilities#extraction', desc: 'Falling-film vacuum extraction & active marker isolation' },
    { num: '02', name: 'Dosage Index', path: '/capabilities', desc: 'Softgels, gummies, effervescents, tablets & liquids' },
    { num: '03', name: '~78K Campus', path: '/infrastructure', desc: '3-level zoned pharmaceutical cGMP cleanrooms' },
    { num: '04', name: 'CDMO Pipeline', path: '/contract-manufacturing', desc: '10-step formulation roadmap & commercial scale' },
    { num: '05', name: 'Quality Systems', path: '/quality', desc: '9-stage QC framework & HPLC analytical testing' },
    { num: '06', name: 'Company & Evolution', path: '/about', desc: 'Rebranding from HAS Herbal to HAS Lifesciences' },
    { num: '07', name: 'R&D Phytotherapy', path: '/research-development', desc: 'Phytochemistry, bitterness masking & method validation' },
    { num: '08', name: 'Partner With Us', path: '/partner', desc: 'Submit formulation brief & volume requirements' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-architekt text-xs uppercase tracking-wider text-white">
        {/* High-Contrast Dark Biotech Bar (Never invisible on light pages!) */}
        <div className={`transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#030914]/95 backdrop-blur-2xl border-white/20 py-3 px-6 md:px-12 shadow-2xl shadow-black/40' 
            : 'bg-[#030914]/85 backdrop-blur-xl border-white/15 py-4 px-6 md:px-12 shadow-lg shadow-black/20'
        }`}>
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Logo size="default" />
            </div>

            {/* Desktop Navigation Groups with Colossal NB Architekt Styling */}
            <nav className="hidden xl:flex items-center">
              <div className="flex items-center border-l border-white/20">
                <Link to="/capabilities#extraction" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">01</span>
                  <span>Botanical Science</span>
                </Link>
                <Link to="/capabilities" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">02</span>
                  <span>Dosage Index</span>
                </Link>
                <Link to="/infrastructure" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">03</span>
                  <span>78K Campus</span>
                </Link>
                <Link to="/contract-manufacturing" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">04</span>
                  <span>CDMO Pipeline</span>
                </Link>
                <Link to="/quality" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">05</span>
                  <span>Quality & QC</span>
                </Link>
                <Link to="/about" className="px-5 py-2 border-r border-white/20 hover:text-[#00D2FF] hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="text-[#00D2FF] font-bold">06</span>
                  <span>Company</span>
                </Link>
              </div>
            </nav>

            {/* Right Status / Index Trigger */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3 text-[11px] text-white/70 border-r border-white/20 pr-4">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>SEC: <strong className="text-[#00D2FF]">{activeSection}</strong></span>
              </div>

              {/* Colossal Index + Button */}
              <button
                onClick={() => setIndexOpen(!indexOpen)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#0052FF] border border-white/25 hover:border-[#0052FF] transition-all cursor-pointer shadow-md text-white font-architekt"
              >
                <span>Index</span>
                <span className={`w-5 h-5 rounded-full border border-white flex items-center justify-center text-xs transition-transform duration-300 ${indexOpen ? 'rotate-45 bg-white text-black border-white' : ''}`}>
                  +
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Colossal Full-Screen Index Drawer */}
      {indexOpen && (
        <div className="fixed inset-0 z-40 bg-[#030914]/98 backdrop-blur-2xl text-white pt-28 px-8 md:px-20 overflow-y-auto animate-in fade-in duration-300 font-architekt">
          <div className="max-w-6xl mx-auto py-12 space-y-12">
            
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#00D2FF] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>MASTER DIRECTORY INDEX</span>
              </span>
              <button
                onClick={() => setIndexOpen(false)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>Close Index</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              {navItems.map((item) => (
                <Link
                  key={item.num}
                  to={item.path}
                  className="p-6 border border-white/15 rounded-3xl hover:border-[#00D2FF] hover:bg-[#0052FF]/10 transition-all flex flex-col justify-between group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[#00D2FF] font-bold text-lg">{item.num}</span>
                      <span className="uppercase text-xl font-bold group-hover:translate-x-2 transition-transform text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-white/40 group-hover:text-[#00D2FF] text-xl font-light">+</span>
                  </div>
                  <p className="font-telegraf text-xs text-slate-400 normal-case">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="pt-12 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
              <div>HAS LIFESCIENCES PRIVATE LIMITED • CDMO OPERATIONAL PLATFORM</div>
              <div className="text-[#00D2FF] font-bold">NATURE. SCIENCE. NEXT.</div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
