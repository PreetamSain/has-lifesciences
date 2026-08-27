import React from 'react';
import { Link } from 'react-router-dom';
import LogoV2 from './LogoV2';
import { ArrowUpRight } from 'lucide-react';

export default function FooterV2() {
  return (
    <footer className="relative bg-[#030914] text-white/70 border-t border-slate-800 pt-36 pb-20 px-8 sm:px-12 lg:px-20 overflow-hidden">
      
      <div className="max-w-[1720px] mx-auto space-y-28 relative z-10">
        
        {/* Top Section: Giant Brand Statement & Intake */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <LogoV2 size="large" theme="dark" />
            <p className="font-telegraf text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-3xl [text-wrap:balance]">
              Engineering the next generation of botanical extraction and pharmaceutical-grade nutraceutical delivery systems.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:items-end justify-between space-y-10 pt-4">
            <Link
              to="/contact"
              className="btn-v2-primary group"
            >
              <span>Initiate Project Brief</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <div className="font-architekt text-xs text-white/50 space-y-2 uppercase tracking-[0.14em] lg:text-right">
              <div>Campus: Jaipur, Rajasthan, India</div>
              <div>Direct: design@hasherbal.com</div>
            </div>
          </div>

        </div>

        {/* Middle Section: Clean Spaced Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/10 font-architekt text-xs uppercase tracking-[0.16em]">
          <div className="space-y-6">
            <div className="text-white font-bold">Platforms</div>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Botanical Extracts</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Vegetarian Softgels</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Pectin Gummies</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Effervescents</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-white font-bold">Facility</div>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Cleanroom Suites</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">HPLC Assays</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Quality Assurance</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Packaging Lines</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-white font-bold">Company</div>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">Scientific Board</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Inquiries</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-white font-bold">Standards</div>
            <ul className="space-y-4 text-white/60">
              <li>cGMP Guidelines</li>
              <li>Ayush GMP Certified</li>
              <li>ISO 22000 / HACCP</li>
              <li>USP / IP Monographs</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-architekt text-[11px] text-white/40 tracking-[0.14em] uppercase">
          <div>© {new Date().getFullYear()} HAS LIFESCIENCES PRIVATE LIMITED. ALL RIGHTS RESERVED.</div>
          <div>SCIENTIFIC PRECISION CDMO</div>
        </div>

      </div>

    </footer>
  );
}
