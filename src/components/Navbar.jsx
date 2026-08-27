import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIndexOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'CDMO Methodology', path: '/contract-manufacturing' },
    { name: 'Quality Systems', path: '/quality' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const directoryItems = [
    { num: '01', name: 'Botanical Extraction', path: '/capabilities#extraction', desc: 'Falling-film vacuum extraction & active marker isolation' },
    { num: '02', name: 'Dosage Platforms', path: '/capabilities', desc: 'Softgels, gummies, effervescents, tablets & liquids' },
    { num: '03', name: 'Manufacturing Campus', path: '/infrastructure', desc: '~78,000 sq. ft. zoned pharmaceutical cleanroom suites' },
    { num: '04', name: '10-Step Methodology', path: '/contract-manufacturing', desc: 'Turnkey formulation roadmap & commercial scale-up' },
    { num: '05', name: 'Quality Control & Labs', path: '/quality', desc: '9-stage QC framework & HPLC analytical testing' },
    { num: '06', name: 'Barrier Packaging', path: '/packaging', desc: 'Alu-Alu blister packaging & automated bottling lines' },
    { num: '07', name: 'R&D Phytotherapy', path: '/research-development', desc: 'Phytochemistry, bitterness masking & stability studies' },
    { num: '08', name: 'Project Brief Intake', path: '/partner', desc: 'Submit technical formulation brief & volume parameters' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-architekt text-xs uppercase tracking-wider text-white">
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

            {/* Clean Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all duration-200 hover:text-[#00D2FF] hover:bg-white/5 ${
                    location.pathname === item.path ? 'text-[#00D2FF] bg-white/5 font-bold' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Action & Directory Index */}
            <div className="flex items-center gap-3">
              <Link
                to="/partner"
                className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#0052FF] hover:bg-[#0036B3] text-white font-bold transition-all shadow-md"
              >
                Project Intake
              </Link>

              <button
                onClick={() => setIndexOpen(!indexOpen)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer text-white font-architekt"
                title="Open Directory Index"
              >
                <span>Index</span>
                <span className={`w-4 h-4 rounded-full border border-white flex items-center justify-center text-xs transition-transform duration-300 ${indexOpen ? 'rotate-45 bg-white text-black border-white' : ''}`}>
                  +
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Master Directory Drawer */}
      {indexOpen && (
        <div className="fixed inset-0 z-40 bg-[#030914]/98 backdrop-blur-2xl text-white pt-28 px-8 md:px-20 overflow-y-auto animate-in fade-in duration-300 font-architekt">
          <div className="max-w-6xl mx-auto py-12 space-y-12">
            
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#00D2FF] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>DIRECTORY INDEX</span>
              </span>
              <button
                onClick={() => setIndexOpen(false)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              {directoryItems.map((item) => (
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
              <div>HAS LIFESCIENCES PRIVATE LIMITED • JAIPUR, RAJASTHAN, INDIA</div>
              <div className="text-[#00D2FF] font-bold">NATURE. SCIENCE. NEXT.</div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
