import React from 'react';
import { Link } from 'react-router-dom';

export default function GinkgoHeroCard({
  tag = 'SECTION • OVERVIEW',
  badge = 'SPECIFICATION',
  headlineMain = 'Title',
  headlineSub = '',
  description = '',
  primaryBtnText = 'Explore Section',
  primaryBtnLink = '#',
  secondaryBtnText = 'Initiate Brief',
  secondaryBtnLink = '/partner',
  bgImage = ''
}) {
  return (
    <div className="relative w-full rounded-[44px] bg-[#030914] text-white overflow-hidden p-8 sm:p-14 md:p-20 shadow-2xl border border-slate-800 min-h-[560px] flex flex-col justify-between">
      
      {/* Background Image with Dark Vignette */}
      {bgImage && (
        <img
          src={bgImage}
          alt={headlineMain}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
        />
      )}

      {/* Science Blue Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#0052FF]/20 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-[#00D2FF]/15 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/60 pointer-events-none" />

      {/* Top Ticker & Monogram Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-architekt text-xs uppercase tracking-[0.2em] text-white/80 border-b border-white/15 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] animate-pulse" />
          <span className="font-bold text-white">{tag}</span>
        </div>
        <span className="monogram-badge-dark py-1 px-3.5 text-[10px]">
          {badge}
        </span>
      </div>

      {/* Center Main Content */}
      <div className="relative z-10 my-10 max-w-5xl space-y-6">
        <h1 className="font-architekt text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white tracking-[-0.01em] leading-[0.96] uppercase">
          {headlineMain}
          {headlineSub && (
            <span className="block text-gradient-blue">{headlineSub}</span>
          )}
        </h1>

        {description && (
          <p className="font-telegraf text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl font-normal">
            {description}
          </p>
        )}
      </div>

      {/* Bottom Action Buttons & Indicator */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={primaryBtnLink}
            className="colossal-big-button light"
          >
            <span>{primaryBtnText}</span>
            <span className="plus-icon">+</span>
          </Link>

          {secondaryBtnText && (
            <Link
              to={secondaryBtnLink}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-architekt text-xs uppercase tracking-wider font-bold border border-white/20 transition-all backdrop-blur-md"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>

        <div className="colossal-disc border-white/30 hidden md:inline-flex">
          <div className="colossal-dot-cyan" />
        </div>
      </div>

    </div>
  );
}
