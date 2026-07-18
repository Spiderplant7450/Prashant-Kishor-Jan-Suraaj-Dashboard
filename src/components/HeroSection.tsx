import React from "react";
import { Mail, Phone, Twitter, MapPin, Calendar, HeartHandshake, Award, FileText, Search } from "lucide-react";
import { PROFILE } from "../data";
import portraitImg from "../assets/images/prashant_kishor_portrait_1784401916436.jpg";
import { PartyLogo, SchoolBagLogo } from "./Logos";

export default function HeroSection({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-12 border-b-4 border-brand-navy" id="profile-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Beautiful digital illustration portrait of Prashant Kishor */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer brand accent block */}
              <div className="absolute -inset-2 bg-saffron opacity-100 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
              <div className="relative border-4 border-brand-navy overflow-hidden bg-white shadow-md aspect-[3/4] flex justify-center items-center">
                <img
                  src={portraitImg}
                  alt={PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Election Symbol Bag Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-4 border-2 border-brand-navy flex items-center justify-between shadow-md">
                  <div className="flex items-center space-x-2.5">
                    <SchoolBagLogo className="w-9 h-9 text-brand-navy" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 font-mono leading-none uppercase tracking-wider">OFFICIAL SYMBOL</p>
                      <p className="text-xs font-black text-brand-navy leading-tight uppercase">SCHOOL BAG</p>
                    </div>
                  </div>
                  <span className="bg-saffron text-brand-navy font-black text-[9px] px-2.5 py-1 border-2 border-brand-navy uppercase tracking-widest">
                    Jan Suraaj
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key candidate credentials and details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-saffron-light text-saffron-dark text-[10px] font-black border-2 border-saffron uppercase tracking-widest">
                <HeartHandshake className="w-3.5 h-3.5 text-saffron-dark" />
                CONTESTING FOR BIHAR LEGISLATIVE ASSEMBLY 2026
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-4xl sm:text-6xl font-black text-brand-navy font-display tracking-tighter leading-[0.95] uppercase">
                  {PROFILE.name.toUpperCase()} <span className="text-saffron">PANDEY</span>
                </h2>
                <PartyLogo className="w-16 h-16 shadow-md border-2 border-brand-navy bg-white hover:scale-105 transition-transform duration-200" />
              </div>

              <p className="text-sm sm:text-base text-slate-700 max-w-2xl font-sans leading-relaxed">
                India's foremost political campaign strategist has made a historic transition to direct public service. Walked barefoot for 3,000+ kms across Bihar's villages during his transformative <span className="font-bold text-party-green">Jan Suraaj Padyatra</span> to discover honest grassroots leaders and establish <span className="italic font-bold text-brand-navy">Suraaj</span> (Good Governance).
              </p>
            </div>

            {/* Quick Profile Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-3.5 bg-white border-2 border-brand-navy shadow-sm">
                <MapPin className="w-5 h-5 text-party-green mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Constituency Contesting</h4>
                  <p className="text-sm font-black text-brand-navy">{PROFILE.constituencyName.toUpperCase()}</p>
                  <p className="text-[10px] text-slate-500 font-medium">Registered voter in Kargahar No. 209</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white border-2 border-brand-navy shadow-sm">
                <Calendar className="w-5 h-5 text-saffron mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Personal Metadata</h4>
                  <p className="text-sm font-black text-brand-navy">Age {PROFILE.age} Years (Active Leader)</p>
                  <p className="text-[10px] text-slate-500 font-medium">Father: {PROFILE.fatherName}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white border-2 border-brand-navy shadow-sm">
                <Mail className="w-5 h-5 text-brand-navy mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">E-Mail Address</h4>
                  <p className="text-xs font-black text-brand-navy font-mono break-all">{PROFILE.email.toUpperCase()}</p>
                  <p className="text-[10px] text-slate-500 font-medium">As specified in court affidavit</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white border-2 border-brand-navy shadow-sm">
                <Phone className="w-5 h-5 text-brand-navy mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Contact Details</h4>
                  <p className="text-sm font-black text-brand-navy font-mono">{PROFILE.contactNumber}</p>
                  <p className="text-[10px] text-slate-500 font-medium">Official Mobile Helpline</p>
                </div>
              </div>
            </div>

            {/* Verification and Legal Seal section */}
            <div className="flex flex-wrap items-center gap-3 p-4 bg-party-green-light border-2 border-party-green">
              <div className="flex items-center -space-x-2 shrink-0">
                <PartyLogo className="w-9 h-9 border-2 border-brand-navy bg-white shadow-sm z-10" />
                <div className="w-9 h-9 bg-party-green text-white font-black text-[11px] flex items-center justify-center border-2 border-brand-navy shadow-sm font-display">PK</div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-black text-brand-navy leading-tight">VERIFIED ELECTION COMMISSION AFFIDAVIT</p>
                <p className="text-[10px] text-slate-600 leading-normal">Filed before returning officer in Patna on 13th July 2026 for the State Elections.</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("assets");
                  setTimeout(() => {
                    const target = document.getElementById("affidavit-tabs-container");
                    if (target) {
                      const y = target.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 50);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-party-green hover:bg-party-green-dark text-white text-xs font-black uppercase tracking-wider transition-colors border border-brand-navy shrink-0 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Browse Affidavit Assets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
