import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#030914] text-white pt-24 pb-16 px-6 md:px-16 border-t border-white/15 font-architekt">
      <div className="max-w-[1800px] mx-auto space-y-20">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between border-b border-white/15 pb-16">
          <div className="lg:col-span-6 space-y-6">
            <Logo size="default" />
            <p className="font-telegraf text-slate-400 text-lg max-w-md leading-relaxed">
              India's next-generation CDMO for standardized botanical extraction, classical Ayurveda, and advanced nutraceutical delivery systems.
            </p>
            <div className="text-xs uppercase tracking-[0.2em] text-[#00D2FF] font-bold">
              NATURE. SCIENCE. NEXT.
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-wider">
            
            <div className="space-y-4">
              <div className="text-[#00D2FF] font-bold border-b border-white/10 pb-2">01 / PLATFORMS</div>
              <ul className="space-y-2.5 text-slate-300">
                <li><Link to="/capabilities#extraction" className="hover:text-[#00D2FF] transition-colors">Extraction Hall</Link></li>
                <li><Link to="/capabilities#softgels" className="hover:text-[#00D2FF] transition-colors">Softgels</Link></li>
                <li><Link to="/capabilities#gummies" className="hover:text-[#00D2FF] transition-colors">Gummies</Link></li>
                <li><Link to="/capabilities#effervescents" className="hover:text-[#00D2FF] transition-colors">Effervescents</Link></li>
                <li><Link to="/capabilities#solids" className="hover:text-[#00D2FF] transition-colors">Tablets & Capsules</Link></li>
                <li><Link to="/capabilities#traditional" className="hover:text-[#00D2FF] transition-colors">Pravahi Kwath</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-[#00D2FF] font-bold border-b border-white/10 pb-2">02 / INFRASTRUCTURE</div>
              <ul className="space-y-2.5 text-slate-300">
                <li><Link to="/infrastructure" className="hover:text-[#00D2FF] transition-colors">~78K Sq. Ft. Campus</Link></li>
                <li><Link to="/infrastructure#floorplan" className="hover:text-[#00D2FF] transition-colors">Floor Blueprint</Link></li>
                <li><Link to="/quality" className="hover:text-[#00D2FF] transition-colors">HPLC & QC Labs</Link></li>
                <li><Link to="/packaging" className="hover:text-[#00D2FF] transition-colors">Packaging Lines</Link></li>
                <li><Link to="/contract-manufacturing" className="hover:text-[#00D2FF] transition-colors">CDMO Roadmap</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-[#00D2FF] font-bold border-b border-white/10 pb-2">03 / COMPANY</div>
              <ul className="space-y-2.5 text-slate-300">
                <li><Link to="/about" className="hover:text-[#00D2FF] transition-colors">Our Evolution</Link></li>
                <li><Link to="/research-development" className="hover:text-[#00D2FF] transition-colors">R&D Capabilities</Link></li>
                <li><Link to="/partner" className="hover:text-[#00D2FF] transition-colors">Partner With Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#00D2FF] transition-colors">Corporate Desk</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Statutory Compliance Box */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-xs text-slate-400 space-y-3 font-telegraf leading-relaxed">
          <div className="font-architekt text-[#00D2FF] font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <span>[ STATUTORY DISCLOSURE & FACILITY DEVELOPMENT NOTICE ]</span>
          </div>
          <p>
            HAS Lifesciences Private Limited (formerly operating as HAS Herbal) is actively developing an integrated ~78,000 sq. ft. 3-level manufacturing campus engineered in strict accordance with international cGMP and WHO standards. All operational parameters, cleanroom HVAC classifications, rotary encapsulation rates, and platform capacities are forward-looking engineering benchmarks.
          </p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/40 pt-4 border-t border-white/10">
          <div>
            COPYRIGHT © {new Date().getFullYear()} HAS LIFESCIENCES PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 font-architekt">
            <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-white transition-colors">TERMS OF USE</Link>
            <span className="text-[#00D2FF] font-bold">NATURE. SCIENCE. NEXT.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
