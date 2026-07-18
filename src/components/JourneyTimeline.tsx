import React, { useState } from "react";
import { CAMPAIGN_HISTORY, PADYATRA_INFO } from "../data";
import { CampaignHistoryItem } from "../types";
import { Award, Compass, Flag, Search, CheckCircle, HelpCircle } from "lucide-react";
import bannerImg from "../assets/images/jan_suraaj_banner_1784401933814.jpg";
import { SchoolBagLogo } from "./Logos";

export default function JourneyTimeline() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = CAMPAIGN_HISTORY.filter(
    (item) =>
      item.election.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.highlight.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12" id="journey-timeline-section">
      {/* Interactive Campaign Timeline Header */}
      <div className="bg-white p-6 border-2 border-brand-navy shadow-sm" id="padyatra-hero-card">
        <div className="relative border-2 border-brand-navy overflow-hidden bg-gradient-to-r from-saffron-dark via-saffron to-party-green-dark h-52 sm:h-64 flex items-end">
          <img
            src={bannerImg}
            alt="Jan Suraaj Banner"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          <div className="relative p-6 sm:p-8 space-y-2 z-10">
            <span className="inline-block px-3 py-1 bg-saffron text-white text-[10px] font-black border border-brand-navy uppercase tracking-widest font-mono">
              The Barefoot Revolution
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display leading-tight tracking-tight uppercase">
              {PADYATRA_INFO.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-mono font-bold tracking-wider">
              {PADYATRA_INFO.dateRange}
            </p>
          </div>
        </div>

        {/* Padyatra Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
          <div className="md:col-span-4 space-y-4">
            <div className="p-4 bg-party-green-light border-2 border-party-green flex items-center space-x-3.5">
              <span className="text-3xl">🚶🏽‍♂️</span>
              <div>
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Distance Walked</h5>
                <p className="text-xl font-black text-party-green-dark">{PADYATRA_INFO.distanceCovered.toUpperCase()}</p>
                <p className="text-[10px] text-slate-600 font-mono font-bold">Barefoot through 38 districts</p>
              </div>
            </div>

            <div className="p-4 bg-saffron-light border-2 border-saffron flex items-center space-x-3.5">
              <SchoolBagLogo className="w-10 h-10 shrink-0 text-brand-navy" />
              <div>
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Formal Launch</h5>
                <p className="text-xl font-black text-saffron-dark">October 2, 2024</p>
                <p className="text-[10px] text-slate-600 font-mono font-bold">Gandhi Jayanti party declaration</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h4 className="font-display font-black text-brand-navy text-base uppercase tracking-tight flex items-center gap-1.5">
              <Compass className="w-5 h-5 text-saffron" /> Core Mission Aims
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PADYATRA_INFO.keyAims.map((aim, idx) => {
                const [title, desc] = aim.split(":");
                return (
                  <div key={idx} className="p-4 border-2 border-brand-navy bg-white space-y-1.5 shadow-xs">
                    <div className="w-6 h-6 bg-saffron text-white font-black text-xs flex items-center justify-center border border-brand-navy font-mono">
                      {idx + 1}
                    </div>
                    <h6 className="font-black text-brand-navy text-xs tracking-tight uppercase leading-none">{title}</h6>
                    <p className="text-[11px] text-slate-600 leading-normal font-sans">{desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed pt-3 border-t-2 border-dashed border-slate-200 font-sans">
              {PADYATRA_INFO.impactDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Legacy Section */}
      <div className="space-y-6" id="campaign-legacy-grid">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-display font-black text-2xl text-brand-navy tracking-tight uppercase flex items-center gap-2">
              <Award className="w-6 h-6 text-saffron" /> Electoral Strategy Legacy
            </h3>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              The unprecedented chronological record of campaigns designed by PK, rewriting political science in India.
            </p>
          </div>

          {/* Search bar inside Journey page */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Filter campaigns or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 border-2 border-brand-navy text-xs bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-saffron focus:border-saffron shadow-xs font-bold"
            />
          </div>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l-4 border-brand-navy ml-4 pl-8 space-y-8" id="chronological-timeline">
          {filteredCampaigns.map((camp: CampaignHistoryItem, idx: number) => (
            <div key={idx} className="relative group" id={`timeline-item-${camp.year}`}>
              {/* Timeline dot */}
              <div className="absolute -left-[45px] top-1 w-7 h-7 bg-saffron border-2 border-brand-navy shadow-sm flex items-center justify-center text-[10px] text-white font-black font-mono">
                {String(camp.year).slice(-2)}
              </div>

              {/* Campaign detail card */}
              <div className="p-5 bg-white border-2 border-brand-navy shadow-sm group-hover:shadow-md transition-all duration-150 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-100 pb-2.5">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black text-saffron-dark tracking-widest uppercase font-mono">
                      CAMPAIGN YEAR {camp.year}
                    </span>
                    <h4 className="font-display font-black text-brand-navy text-base leading-tight uppercase">
                      {camp.election}
                    </h4>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 border border-brand-navy text-[9px] font-black bg-party-green-light text-party-green uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3 text-party-green" /> {camp.result.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-black text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-0.5 uppercase tracking-wider">
                      Client: {camp.client.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-black text-saffron-dark font-sans leading-tight">
                    💡 Key Breakthrough: "{camp.highlight}"
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {camp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredCampaigns.length === 0 && (
            <div className="p-8 text-center bg-white border-2 border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-bold font-sans">No matching historic campaigns found for "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
