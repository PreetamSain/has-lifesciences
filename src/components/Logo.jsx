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
      {/* Official Geometric Botanical Cross Icon with Glow */}
      <div className={`relative flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${
        isLarge ? 'w-11 h-11' : isSmall ? 'w-8 h-8' : 'w-9 h-9'
      }`}>
        {/* Ambient Cyan Backlight Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00D2FF] opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
        
        {/* Dark Container Frame */}
        <div className="relative z-10 w-full h-full rounded-xl bg-[#030914] border border-[#00D2FF]/40 flex items-center justify-center p-1.5 shadow-inner">
          <svg 
            viewBox="0 0 349 372.48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
          >
            <defs>
              <linearGradient id="logoIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#0052FF" />
              </linearGradient>
            </defs>
            <g fill="url(#logoIconGrad)">
              <rect y="11.46" width="116.33" height="116.33" rx="14" />
              <rect x="116.33" y="127.79" width="116.33" height="116.33" rx="14" />
              <rect x="232.67" y="244.12" width="116.33" height="116.33" rx="14" />
              <rect x="232.67" y="11.46" width="116.33" height="116.33" rx="14" transform="translate(360.46 -221.21) rotate(90)" />
              <rect x="0" y="244.12" width="116.33" height="116.33" rx="14" transform="translate(360.46 244.12) rotate(90)" />
              <polyline points="232.67 97.23 202.11 127.79 202.11 158.35 232.67 158.35 263.22 127.79" fill="#00D2FF" />
            </g>
          </svg>
        </div>
      </div>

      {/* Official Typography Lockup (Authentic HAS vector lettering + LIFESCIENCES) */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {/* Authentic HAS Vector Logotype */}
          <svg 
            viewBox="437 11.56 1002 348.84" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-300 text-white ${
              isLarge ? 'h-7' : isSmall ? 'h-4.5' : 'h-5.5'
            }`}
            style={{ width: 'auto' }}
          >
            <g>
              {/* H */}
              <path d="M646.42,360.39v-156.56h-136.07v156.56h-73.02V11.56h73.02v131.34h136.07V11.56h73.55v348.84h-73.55Z" />
              {/* A */}
              <path d="M1034.65,360.39l-22.07-71.97h-128.71l-24.69,71.97h-77.23L906.46,11.56h84.58l122.93,348.84h-79.33ZM947.96,89.84h-.53l-44.65,138.69h88.79l-43.6-138.69Z" />
              {/* S */}
              <path d="M1358.26,114.53c-3.68-35.72-25.22-53.06-69.35-53.06-40.98,0-62.52,14.71-62.52,40.98,0,22.07,15.23,34.67,54.11,44.13,39.4,9.46,77.75,18.91,103.49,30.47,30.47,13.66,54.64,35.2,54.64,84.58,0,76.7-57.79,110.85-139.22,110.85-86.16,0-146.05-38.35-147.62-116.63h70.4c1.05,35.72,31,57.79,77.75,57.79,43.08,0,67.77-18.39,67.77-49.38,0-20.49-10.51-34.67-54.11-44.13-43.08-9.46-70.92-15.76-95.61-26.79-37.3-16.81-58.31-42.03-58.31-86.16,0-62.52,42.55-107.17,127.66-107.17s137.64,47.81,140.27,114.53h-69.35Z" />
            </g>
          </svg>

          {/* LIFESCIENCES in Colossal NB Architekt Std */}
          <span className={`font-architekt font-bold tracking-[0.2em] uppercase text-[#00D2FF] ${
            isLarge ? 'text-lg' : isSmall ? 'text-xs' : 'text-sm'
          }`}>
            LIFESCIENCES
          </span>
        </div>

        {withTagline && !isSmall && (
          <span className="font-architekt text-[9px] tracking-[0.28em] uppercase mt-0.5 text-slate-400 group-hover:text-slate-300 transition-colors">
            NATURE • SCIENCE • NEXT
          </span>
        )}
      </div>
    </Link>
  );
}
