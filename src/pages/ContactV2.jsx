import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactV2() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Botanical Extraction',
    volume: 'Commercial Scale',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#030914] min-h-screen pt-40 pb-36 px-8 sm:px-12 lg:px-20 grid-laboratory">
      
      <div className="max-w-[1720px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-12 sticky top-36">
            <div className="space-y-6">
              <div className="font-architekt text-xs text-[#1566F3] uppercase tracking-[0.24em] font-bold">
                PARTNERSHIPS & INTAKE
              </div>
              <h1 className="font-architekt text-5xl sm:text-6xl lg:text-7xl text-[#030914] uppercase tracking-tight leading-none">
                Initiate Project Brief
              </h1>
              <p className="font-telegraf text-slate-600 text-xl font-light leading-relaxed">
                Connect directly with our technical formulation team to discuss custom botanical extraction, pilot development, or commercial scale manufacturing.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 space-y-6 font-architekt text-xs uppercase tracking-[0.16em]">
              <div>
                <div className="text-slate-400 mb-1">Corporate Campus</div>
                <div className="text-[#030914] font-bold text-sm">Jaipur, Rajasthan, India</div>
              </div>
              <div>
                <div className="text-slate-400 mb-1">Technical Inquiries</div>
                <div className="text-[#030914] font-bold text-sm">design@hasherbal.com</div>
              </div>
              <div>
                <div className="text-slate-400 mb-1">Audit Protocols</div>
                <div className="text-[#1566F3] font-bold text-sm">cGMP & Ayush Compliant</div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
            {submitted ? (
              <div className="py-20 text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-[#1566F3] mx-auto" />
                <h3 className="font-architekt text-3xl text-[#030914] uppercase">Project Brief Received</h3>
                <p className="font-telegraf text-slate-600 max-w-md mx-auto">
                  Our technical formulation and CDMO commercial team will review your requirements and respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-architekt text-xs uppercase tracking-wider text-slate-700 font-bold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#1566F3] focus:outline-none font-telegraf text-[#030914] placeholder:text-slate-400 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-architekt text-xs uppercase tracking-wider text-slate-700 font-bold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#1566F3] focus:outline-none font-telegraf text-[#030914] placeholder:text-slate-400 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-architekt text-xs uppercase tracking-wider text-slate-700 font-bold">Company / Brand *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Health Brands"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#1566F3] focus:outline-none font-telegraf text-[#030914] placeholder:text-slate-400 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-architekt text-xs uppercase tracking-wider text-slate-700 font-bold">Platform Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#1566F3] focus:outline-none font-telegraf text-[#030914] transition-colors shadow-sm"
                    >
                      <option value="Botanical Extraction">Botanical Extraction & Phyto-Actives</option>
                      <option value="Softgels">Vegetarian / Gelatin Softgels</option>
                      <option value="Pectin Gummies">Functional Pectin Gummies</option>
                      <option value="Effervescent Tablets">Effervescent / Compressed Tablets</option>
                      <option value="Ayurvedic Formulations">Classical Ayurvedic Formulations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-architekt text-xs uppercase tracking-wider text-slate-700 font-bold">Project Scope & Dosage Requirements</label>
                  <textarea
                    rows="4"
                    placeholder="Provide details on target actives, formulation batch sizes, packaging specifications, or target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#1566F3] focus:outline-none font-telegraf text-[#030914] placeholder:text-slate-400 transition-all shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-v2-primary w-full justify-center group text-sm py-5 cursor-pointer"
                >
                  <span>Submit Project Brief</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
