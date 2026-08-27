import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CapabilitiesV2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      id: '01',
      title: 'Botanical Extraction & Phyto-Actives',
      desc: 'Precision hydro-ethanolic and supercritical fluid extraction for standardized Curcumin (95%), Ashwagandha Withanolides (5%), Boswellic Acids, and proprietary herbal bio-complexes.',
      specs: ['Standardized Active Assays', 'Low-Temperature Evaporation', 'Closed-Loop SS-316 Circuits']
    },
    {
      id: '02',
      title: 'Vegetarian & Gelatin Softgel Encapsulation',
      desc: 'Rotary-die softgel machinery supporting tapioca/carrageenan plant-based vegan shells and standard bovine gelatin with hermetic oxygen-barrier seals.',
      specs: ['Oily Suspensions & Pastes', 'High-Speed Precision Filling', 'Laser Inspection & Polishing']
    },
    {
      id: '03',
      title: 'Functional Pectin & Gelatin Gummies',
      desc: 'Precision depositor lines producing vegan pectin gummies enriched with standardized botanicals, nootropics, multivitamins, and adaptogens.',
      specs: ['Thermal Stability up to 45°C', 'Sugar-Free & Low-Calorie Matrices', 'Natural Flavors & Colors']
    },
    {
      id: '04',
      title: 'Effervescent & Rapid-Dissolve Tablets',
      desc: 'Dehumidified tableting suites operating under <20% relative humidity to guarantee instant fizz dissolution kinetics without moisture degradation.',
      specs: ['Desiccant Tube & Blister Packaging', 'Rapid Bio-Absorption Profile', 'Buffering pH Formulations']
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#030914] min-h-screen pt-40 pb-36 px-8 sm:px-12 lg:px-20 grid-laboratory">
      
      {/* Header */}
      <div className="max-w-[1720px] mx-auto space-y-10 border-b border-slate-200 pb-24">
        <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
          MANUFACTURING PLATFORMS
        </div>
        <h1 className="font-architekt text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#030914] uppercase tracking-tight leading-none">
          Manufacturing Disciplines
        </h1>
        <p className="font-telegraf text-slate-600 text-xl lg:text-2xl font-light max-w-3xl leading-relaxed">
          Integrated dosage forms engineered from botanical source biomass to finished retail-ready pharmaceutical packaging.
        </p>
      </div>

      {/* Sprawling Platform Cards */}
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
        {capabilities.map((cap) => (
          <div key={cap.id} className="glass-cleanroom-card rounded-3xl p-10 sm:p-12 space-y-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-architekt text-6xl text-slate-300 font-bold">
                {cap.id}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#1566F3]/10 text-[#1566F3] flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-architekt text-2xl sm:text-3xl text-[#030914] uppercase tracking-wide">
                {cap.title}
              </h2>
              <p className="font-telegraf text-slate-600 text-lg font-light leading-relaxed">
                {cap.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {cap.specs.map((spec, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 font-architekt text-xs text-slate-700 uppercase tracking-wider">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="max-w-[1720px] mx-auto pt-24 text-center">
        <Link to="/contact" className="btn-v2-primary">
          <span>Request Detailed Platform Monograph</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
