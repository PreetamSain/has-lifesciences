import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ dark = true, size = 'default', withTagline = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <Link 
      to="/" 
      className={`group flex items-center gap-3.5 transition-all duration-300 ${className}`}
      aria-label="HAS Lifesciences Home"
    >
      {/* Precision Geometric Molecular Icon */}
      <div className={`relative flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${
        isLarge ? 'w-12 h-12' : isSmall ? 'w-8 h-8' : 'w-10 h-10'
      }`}>
        {/* Outer Glowing Ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00D2FF] opacity-90 shadow-[0_0_20px_rgba(0,210,255,0.4)]" />
        
        {/* Inner SVG Geometry */}
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-3/5 h-3/5 text-white transform transition-transform duration-700 group-hover:rotate-180"
        >
          <path 
            d="M18 4L30 11V25L18 32L6 25V11L18 4Z" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="opacity-40"
          />
          <path 
            d="M18 10V26M10 14L26 22M10 22L26 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="18" cy="18" r="3" fill="#00D2FF" />
          <circle cx="18" cy="10" r="1.5" fill="white" />
          <circle cx="18" cy="26" r="1.5" fill="white" />
        </svg>
      </div>

      {/* Brand Typography Lockup in NB Architekt */}
      <div className="flex flex-col font-architekt">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-bold tracking-tight text-white ${
            isLarge ? 'text-2xl' : isSmall ? 'text-lg' : 'text-xl'
          }`}>
            HAS
          </span>
          <span className={`font-bold tracking-[0.14em] uppercase text-[#00D2FF] ${
            isLarge ? 'text-lg' : isSmall ? 'text-xs' : 'text-sm'
          }`}>
            LIFESCIENCES
          </span>
        </div>

        {withTagline && !isSmall && (
          <span className="text-[9px] tracking-[0.24em] uppercase mt-1 text-slate-300">
            NATURE • SCIENCE • NEXT
          </span>
        )}
      </div>
    </Link>
  );
}
