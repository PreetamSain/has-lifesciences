import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leadership = [
    {
      name: 'Executive Directorate',
      role: 'Corporate Strategy & Governance',
      desc: 'Steering the transition from HAS Herbal into HAS Lifesciences Private Limited, anchoring ~78,000 sq. ft. campus capital deployment and global B2B partnerships.',
      image: '/assets/generated/has_leadership_team_1787820287755.jpg'
    },
    {
      name: 'R&D Phytochemistry Team',
      role: 'Active Marker Standardization',
      desc: 'Specializing in HPLC-quantified botanical extraction protocols, falling-film vacuum evaporation, and stability validation of thermolabile bioactives.',
      image: '/assets/generated/has_analytical_hplc_lab_1787820264292.jpg'
    },
    {
      name: 'Plant Operations & cGMP',
      role: 'Cleanroom & Engineering',
      desc: 'Overseeing HVAC cleanroom qualification, rotary die softgel encapsulation, continuous gummy setting tunnels, and <20% RH low-humidity suites.',
      image: '/assets/generated/has_cleanroom_hero_1787739262235.jpg'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="About Us | Heritage to Next-Gen Science | HAS Lifesciences"
        description="Learn about HAS Lifesciences Private Limited: our transition from HAS Herbal into India’s premier ~78,000 sq. ft. botanical and nutraceutical CDMO campus."
        keywords="About HAS Lifesciences, HAS Herbal History, Botanical CDMO Leadership, Pharma Manufacturing Team Jaipur, HAS Lifesciences Corporate Story"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="From Classical Roots to Next-Gen Science."
          description="The strategic transformation of HAS Herbal into HAS Lifesciences Private Limited — uniting time-tested Ayurvedic wisdom with high-throughput pharmaceutical manufacturing standards."
          primaryBtnText="Explore Capabilities"
          primaryBtnLink="/capabilities"
          secondaryBtnText="CDMO Intake Desk"
          secondaryBtnLink="/partner"
          bgImage="/assets/generated/has_campus_hero_1787739337547.jpg"
        />
      </section>

      {/* 2. THE REBRANDING NARRATIVE */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div className="colossal-disc border-[#0052FF]">
              <div className="colossal-dot-green" />
            </div>

            <h2 className="font-architekt text-4xl sm:text-5xl lg:text-[56px] text-[#030914] uppercase tracking-tight leading-[1.04]">
              Ayurveda Has Always Been Scientific.<br />
              <span className="text-[#0052FF]">We Provide The Global Analytical Proof.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-8 text-lg sm:text-xl text-slate-700 leading-relaxed font-telegraf">
            <p>
              HAS Lifesciences Private Limited was founded to bridge the gap between traditional herbal formulation and modern pharmaceutical precision. By building a master ~78,000 sq. ft. manufacturing campus with dedicated cleanrooms, falling-film vacuum extraction loops, and HPLC/HPTLC testing laboratories, we empower health and wellness brands worldwide to formulate with absolute clinical confidence.
            </p>

            <div className="pt-4">
              <Link to="/quality" className="colossal-big-button">
                <span>View Quality & Testing Labs</span>
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE PILLARS */}
      <section className="py-28 px-6 md:px-16 bg-[#030914] text-white">
        <div className="max-w-[1800px] mx-auto space-y-20">
          
          <div>
            <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 rounded-[36px] bg-white/5 border border-white/10 space-y-6">
              <div className="font-architekt text-4xl font-bold text-[#00D2FF]">01</div>
              <h3 className="font-architekt font-bold text-3xl text-white">Standardized Purity</h3>
              <p className="font-telegraf text-slate-300 text-base leading-relaxed">
                Zero synthetic compromise. Every botanical active is standardized via chromatographic assay to verify exact percentage potency.
              </p>
            </div>

            <div className="p-10 rounded-[36px] bg-white/5 border border-white/10 space-y-6">
              <div className="font-architekt text-4xl font-bold text-[#00D2FF]">02</div>
              <h3 className="font-architekt font-bold text-3xl text-white">Advanced Delivery</h3>
              <p className="font-telegraf text-slate-300 text-base leading-relaxed">
                Transforming classical bitter powders into high-compliance consumer formats: vegetarian softgels, pectin gummies, and effervescents.
              </p>
            </div>

            <div className="p-10 rounded-[36px] bg-white/5 border border-white/10 space-y-6">
              <div className="font-architekt text-4xl font-bold text-[#00D2FF]">03</div>
              <h3 className="font-architekt font-bold text-3xl text-white">Scalable Integrity</h3>
              <p className="font-telegraf text-slate-300 text-base leading-relaxed">
                ~78,000 sq. ft. of cleanroom manufacturing designed to support emerging D2C brands up to multinational pharmaceutical contracts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEADERSHIP & SCIENTIFIC TEAMS */}
      <section className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            Scientific & Operational Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadership.map((member, idx) => (
            <div
              key={idx}
              className="glass-light glass-card-hover rounded-[36px] p-8 space-y-6 shadow-sm"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2">
                <div className="font-architekt text-xs uppercase tracking-widest text-[#0052FF] font-bold">
                  {member.role}
                </div>
                <h3 className="font-architekt font-bold text-2xl text-[#030914]">
                  {member.name}
                </h3>
                <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
