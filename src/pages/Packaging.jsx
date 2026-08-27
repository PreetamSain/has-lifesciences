import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function Packaging() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formats = [
    {
      num: '01',
      title: 'Alu-Alu & PVDC Blister Packing',
      category: 'Solid Oral Protection',
      desc: 'High-barrier cold-form aluminum/aluminum and thermoform PVDC blistering engineered for extreme moisture and oxygen protection of moisture-sensitive tablets and softgels.',
      specs: ['Rotary vacuum forming', 'In-line pinhole detector', 'Automated cartoning & leaflet inserting', 'Tamper-evident tuck closure']
    },
    {
      num: '02',
      title: 'Automated HDPE & Amber Glass Bottling',
      category: 'Solid & Capsule Containers',
      desc: 'Complete automated bottling lines with multi-channel electronic counting, cotton insertion, desiccant canister dispensing, and electromagnetic induction foil sealing.',
      specs: ['30–250 count container configurations', 'Induction foil leak-tight hermetic seal', 'Child-resistant (CRC) cap options', 'Full wrap & front/back PSL labeling']
    },
    {
      num: '03',
      title: 'Effervescent Desiccant Tubes',
      category: 'Low-Humidity Format',
      desc: 'Automated tube filling and spring-loaded desiccant cap insertion for 10-count and 20-count effervescent hydration tablets, packed in low-humidity cleanrooms.',
      specs: ['Integrated desiccant chamber in cap', 'Shock-absorbing spring retention', 'Moisture-tight airtight snap seal', 'High-speed shrink sleeve decorating']
    },
    {
      num: '04',
      title: 'Stick Packs & Sachets',
      category: 'On-The-Go Powders',
      desc: 'High-speed vertical form-fill-seal (VFFS) multi-lane packaging for botanical drink mixes, electrolyte powders, and single-serve granule sachets.',
      specs: ['Nitrogen flushing for zero oxidation', 'Easy-tear laser scoring', 'Multi-layer aluminum barrier film', 'High-accuracy auger micro-dosing']
    },
    {
      num: '05',
      title: 'Aseptic Liquid & Swaras Bottling',
      category: 'Pravahi Kwath Decoctions',
      desc: 'Linear automatic liquid filling lines with volumetric piston pumps for classical Ayurvedic decoctions, cold-pressed Swaras juices, and functional syrups.',
      specs: ['100 ml to 1000 ml glass/PET formats', 'Tamper-evident ROPP / screw caps', 'Cleanroom laminar airflow filling zone', 'Integrated measuring cup dispensing']
    },
    {
      num: '06',
      title: 'Secondary & Outer Shipper Cartoning',
      category: 'Commercial Distribution',
      desc: 'Automated case packing, corrugated master shipper box erection, check-weighing, and GS1 2D DataMatrix batch serialization.',
      specs: ['Continuous motion cartoners', 'Real-time check-weigher with auto-reject', 'GS1 barcode & DataMatrix coding', 'Heavy-duty 5-ply export shippers']
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="Automated Pharmaceutical & Nutraceutical Packaging | HAS Lifesciences"
        description="High-barrier Alu-Alu blister packaging, automated HDPE/Amber glass bottling, desiccant effervescent tubes, and stick-pack powder sachets at HAS Lifesciences."
        keywords="Pharma Packaging India, Alu-Alu Blister Packaging CDMO, Effervescent Tube Filling, HDPE Bottling Facility Jaipur, Stick Pack Sachet Contract Packaging"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="Barrier-Engineered Packaging."
          description="In-line automated packaging solutions ensuring physical stability, moisture resistance, and shelf-ready retail presentation across global markets."
          primaryBtnText="Explore Packaging Lines"
          primaryBtnLink="#packaging-lines"
          secondaryBtnText="Discuss Packaging Specs"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_pharma_packaging_1787820244617.jpg"
        />
      </section>

      {/* 2. PACKAGING FORMATS GRID */}
      <section id="packaging-lines" className="max-w-[1800px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            Packaging Lines & Formats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((f) => (
            <div
              key={f.num}
              className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-slate-200 pb-4 mb-4">
                  <span className="font-architekt text-3xl font-bold text-[#0052FF]">
                    {f.num}
                  </span>
                </div>

                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold mb-2">
                  {f.category}
                </div>

                <h3 className="font-architekt font-bold text-2xl text-[#030914] mb-3 leading-tight">
                  {f.title}
                </h3>

                <p className="font-telegraf text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {f.desc}
                </p>

                <div className="space-y-2 border-t border-slate-200 pt-4">
                  <div className="font-architekt text-[11px] uppercase text-slate-400 font-bold tracking-widest">
                    LINE SPECIFICATIONS
                  </div>
                  {f.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-architekt text-slate-700">
                      <span className="text-[#0052FF] font-bold">+</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/partner"
                  className="text-xs font-architekt uppercase tracking-wider text-[#030914] hover:text-[#0052FF] flex items-center justify-between transition-colors font-bold"
                >
                  <span>Request Specifications</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
