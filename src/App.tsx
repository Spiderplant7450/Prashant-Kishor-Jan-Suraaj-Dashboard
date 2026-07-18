import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatGrid from "./components/StatGrid";
import JourneyTimeline from "./components/JourneyTimeline";
import FinancialDashboard from "./components/FinancialDashboard";
import RealEstateGrid from "./components/RealEstateGrid";
import EducationTimeline from "./components/EducationTimeline";
import LegalTransparency from "./components/LegalTransparency";
import { Sparkles, HelpCircle, AlertCircle, TrendingUp, Flag, MapPin, Landmark } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans selection:bg-saffron/20 selection:text-brand-navy border-8 border-saffron" id="root-app">
      {/* Sticky Header Component */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Core Metric Counters */}
      <StatGrid />

      {/* Dynamic Tab Content Stage */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8" id="affidavit-tabs-container">
        {activeTab === "overview" && (
          <div className="space-y-8" id="overview-tab-stage">
            {/* Introductory Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Jan Suraaj Core Vision Statement */}
              <div className="lg:col-span-8 bg-white p-6 border-2 border-brand-navy shadow-sm space-y-6">
                <div>
                  <h3 className="font-display font-black text-2xl text-brand-navy tracking-tight flex items-center gap-2 uppercase">
                    <Flag className="w-6 h-6 text-saffron shrink-0" /> Jan Suraaj — The Philosophy of Suraaj (Good Governance)
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">
                    What makes the Jan Suraaj movement and political party different in the context of Bihar politics?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-saffron-light border-2 border-saffron space-y-2">
                    <span className="text-2xl">🌱</span>
                    <h5 className="font-black text-brand-navy uppercase text-xs">Grassroots Empowerment</h5>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      Jan Suraaj rejects traditional dynastic politics. The focus is strictly on enabling local leaders of proven integrity ("Sahi Log") to contest state elections directly.
                    </p>
                  </div>

                  <div className="p-4 bg-party-green-light border-2 border-party-green space-y-2">
                    <span className="text-2xl">🎓</span>
                    <h5 className="font-black text-brand-navy uppercase text-xs">Education & Agriculture Focus</h5>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      Under his constituency agenda for Bankipur and Bihar, the party advocates for heavy infrastructural investments in state public education systems and agrarian modernization.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t-2 border-slate-100">
                  <h4 className="font-display font-black text-brand-navy text-base uppercase tracking-tight">Key Milestones of the Movement</h4>
                  <div className="space-y-3.5 text-xs text-slate-700 font-sans">
                    <p className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-saffron text-white font-black flex items-center justify-center shrink-0 border border-brand-navy">1</span>
                      <span><strong className="text-brand-navy uppercase text-[10px]">October 2, 2022:</strong> Started the barefoot Padyatra from Bhitiharwa Gandhi Ashram in West Champaran, walking 3,000+ km over 2 years continuously.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-party-green text-white font-black flex items-center justify-center shrink-0 border border-brand-navy">2</span>
                      <span><strong className="text-brand-navy uppercase text-[10px]">October 2, 2024:</strong> Formally registered and transitioned the Padyatra movement into the official <strong>Jan Suraaj Party</strong> at Patna, with Mahatma Gandhi as its guiding icon.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-navy text-white font-black flex items-center justify-center shrink-0 border border-brand-navy">3</span>
                      <span><strong className="text-brand-navy uppercase text-[10px]">2026 Assembly Polls:</strong> Prashant Kishor files nomination from <strong>182-Bankipur</strong> (Patna), introducing a new wave of policy-first leaders into the assembly.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Candidate Metrics & Quick Navigation */}
              <div className="lg:col-span-4 bg-white p-6 border-2 border-brand-navy shadow-sm flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <h4 className="font-display font-black text-brand-navy text-lg flex items-center gap-1.5 border-b-2 border-slate-100 pb-2 uppercase tracking-tight">
                    <TrendingUp className="w-5 h-5 text-saffron" /> Strategic Highlights
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-300 space-y-1">
                      <p className="text-[9px] font-black text-slate-400 font-mono uppercase leading-none tracking-widest">Net Asset Valuation</p>
                      <p className="text-base font-black text-brand-navy">₹ 198.08 Crore (Assets)</p>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase">Movable (₹111.78 Cr) + Immovable (₹86.29 Cr)</p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-300 space-y-1">
                      <p className="text-[9px] font-black text-slate-400 font-mono uppercase leading-none tracking-widest">Civic Integrity Check</p>
                      <p className="text-base font-black text-party-green">0 Convictions & 0 Charges Framed</p>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase">8 pending pre-cognizance FIRs under Patna High Court review.</p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-300 space-y-1">
                      <p className="text-[9px] font-black text-slate-400 font-mono uppercase leading-none tracking-widest">Educational Standards</p>
                      <p className="text-base font-black text-brand-navy">BBA (Lucknow) & MHA (Johns Hopkins Affiliate)</p>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase">Intensive French language training (France, 2010).</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-slate-100 space-y-3">
                  <p className="text-[9px] text-slate-400 font-black font-sans uppercase tracking-widest">Quick Deep-Dive links</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveTab("journey")}
                      className="px-3.5 py-2 bg-saffron text-white text-[10px] font-black uppercase tracking-wider hover:bg-saffron-dark transition-colors border-2 border-brand-navy shadow-sm cursor-pointer"
                    >
                      Campaign History
                    </button>
                    <button
                      onClick={() => setActiveTab("assets")}
                      className="px-3.5 py-2 bg-party-green text-white text-[10px] font-black uppercase tracking-wider hover:bg-party-green-dark transition-colors border-2 border-brand-navy shadow-sm cursor-pointer"
                    >
                      Audit Ledger
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* General FAQs on candidates' records */}
            <div className="bg-white p-6 border-2 border-brand-navy shadow-sm space-y-4" id="faqs-panel">
              <h4 className="font-display font-black text-lg text-brand-navy tracking-tight uppercase flex items-center gap-1.5">
                <HelpCircle className="w-5 h-5 text-saffron" /> Key Facts & Questions regarding the court filings
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 font-sans leading-relaxed">
                <div className="space-y-2 p-4 bg-slate-50 border border-slate-200">
                  <p className="font-black text-brand-navy text-sm uppercase tracking-tight">Q: Why did Prashant Kishor's income drop significantly in FY 2024-25?</p>
                  <p className="text-slate-700">
                    <strong>A:</strong> Prashant Kishor made a major political contribution of <strong>10 Crore Rupees</strong> to the newly founded Jan Suraaj Party under Section 80GGC of the Income Tax Act, 1961. This transaction is fully filed and taxed under standard central parameters.
                  </p>
                </div>

                <div className="space-y-2 p-4 bg-slate-50 border border-slate-200">
                  <p className="font-black text-brand-navy text-sm uppercase tracking-tight">Q: What is "Vedhas Ventures Private Limited"?</p>
                  <p className="text-slate-700">
                    <strong>A:</strong> Vedhas Ventures is a private consultancy company in which Prashant Kishor and his spouse, Jahnavi Das, hold 100% controlling equity. The asset worth reported in the affidavit is directly associated with the valuation of this consultant ecosystem, which has also contributed substantial corporate donations to the party.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journey" && <JourneyTimeline />}
        {activeTab === "assets" && <FinancialDashboard />}
        {activeTab === "properties" && <RealEstateGrid />}
        {activeTab === "education" && <EducationTimeline />}
        {activeTab === "legal" && <LegalTransparency />}
      </main>

      {/* Footer tricolor style */}
      <footer className="bg-white border-t-4 border-brand-navy py-8" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] text-slate-400 font-mono font-black tracking-widest uppercase">
            PRASHANT KISHOR PANDEY — CANDIDATE AFFIDAVIT TRANSPARENCY PORTAL
          </p>
          <p className="text-xs text-slate-600 font-sans uppercase font-bold tracking-tight">
            Created for 182-Bankipur Constituency, State Elections, Bihar. Built with verified data under oath.
          </p>
          <div className="w-32 h-2 flex mx-auto border-2 border-brand-navy overflow-hidden">
            <div className="bg-saffron flex-1 h-full"></div>
            <div className="bg-white flex-1 h-full"></div>
            <div className="bg-party-green flex-1 h-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
