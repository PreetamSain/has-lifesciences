import React, { useEffect } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import GinkgoHeroCard from '../components/GinkgoHeroCard';
import SEO from '../components/SEO';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#030914] space-y-32 md:space-y-48 pb-36 font-telegraf">
      <SEO
        title="Contact & Corporate Desk | Jaipur Headquarters | HAS Lifesciences"
        description="Get in touch with HAS Lifesciences Private Limited in Jaipur, Rajasthan. Access executive directorate, CDMO business development, and plant audit coordination."
        keywords="Contact HAS Lifesciences, HAS Lifesciences Jaipur Address, Pharma CDMO Jaipur Phone, HAS Herbal Contact Email, Plant Audit Coordination"
      />
      
      {/* 1. HERO */}
      <section className="pt-32 md:pt-36 px-6 md:px-16">
        <GinkgoHeroCard
          headlineMain="Connect With HAS Lifesciences."
          description="Direct access to our executive directorate, CDMO business development, plant audit coordination, and scientific formulation desk."
          primaryBtnText="Initiate Project Brief"
          primaryBtnLink="/partner"
          secondaryBtnText="Corporate Directory"
          secondaryBtnLink="#directory"
          bgImage="/assets/generated/has_campus_hero_1787739337547.jpg"
        />
      </section>

      {/* 2. CONTACT DIRECTORY CARDS */}
      <section id="directory" className="max-w-[1800px] mx-auto px-6 md:px-16 scroll-mt-32">
        <div className="mb-12">
          <h2 className="font-architekt text-4xl sm:text-5xl md:text-6xl text-[#030914] uppercase tracking-tight">
            Corporate Directory & Desks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-architekt font-bold text-2xl text-[#030914]">Electronic Inquiries</h3>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                General & Corporate: <br />
                <a href="mailto:contact@haslifesciences.com" className="font-architekt font-bold text-[#0052FF] hover:underline">contact@haslifesciences.com</a>
              </p>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed pt-2">
                B2B Contract CDMO Desk: <br />
                <a href="mailto:cdmo@haslifesciences.com" className="font-architekt font-bold text-[#0052FF] hover:underline">cdmo@haslifesciences.com</a>
              </p>
            </div>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-architekt font-bold text-2xl text-[#030914]">Campus & Plant</h3>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                HAS Lifesciences Private Limited<br />
                Integrated ~78,000 Sq. Ft. Manufacturing Campus<br />
                Industrial Zone, Rajasthan, India
              </p>
              <div className="pt-2 font-architekt text-xs text-[#0052FF] font-bold">
                JAIPUR, RAJASTHAN, INDIA
              </div>
            </div>
          </div>

          <div className="glass-light glass-card-hover p-10 rounded-[36px] space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-architekt font-bold text-2xl text-[#030914]">Technical Plant Audits</h3>
              <p className="font-telegraf text-slate-600 text-sm leading-relaxed">
                Client technical delegation visits and regulatory audit desks are hosted Monday through Saturday by prior appointment.
              </p>
              <div className="pt-2 font-architekt text-xs text-[#0052FF] font-bold">
                HOURS: 09:00 - 18:00 IST
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
