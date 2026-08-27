import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LogoV2 from './LogoV2';

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Disciplines', path: '/capabilities' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' 
            : 'py-8 md:py-10 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-8 sm:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Brand Logo in Dark & Blue */}
          <LogoV2 size="default" theme="light" />

          {/* Desktop Spacious Navigation */}
          <nav className="hidden md:flex items-center gap-12 lg:gap-16">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-architekt text-xs uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#1566F3] font-bold' 
                      : 'text-slate-700 hover:text-[#1566F3]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1566F3] text-white font-architekt text-xs uppercase tracking-[0.12em] font-bold hover:bg-[#0D4ECD] transition-all duration-200"
            >
              <span>Initiate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900 p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-10 space-y-10 md:hidden">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-architekt text-3xl text-slate-900 uppercase tracking-wider hover:text-[#1566F3]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-200">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-v2-primary w-full justify-center text-center"
            >
              Initiate Project Brief
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
