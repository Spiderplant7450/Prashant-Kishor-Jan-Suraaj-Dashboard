import React, { useState } from "react";
import { CRIMINAL_CASES } from "../data";
import { ShieldAlert, ShieldCheck, Scale, Search, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

export default function LegalTransparency() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const toggleCase = (firNo: string) => {
    if (expandedCase === firNo) {
      setExpandedCase(null);
    } else {
      setExpandedCase(firNo);
    }
  };

  const filteredCases = CRIMINAL_CASES.filter(
    (c) =>
      c.firNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.policeStation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.sections.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8" id="legal-transparency-view">
      <div className="border-b-2 border-brand-navy pb-5">
        <h3 className="font-display font-black text-2xl text-brand-navy uppercase tracking-tight flex items-center gap-2">
          <Scale className="w-7 h-7 text-saffron" /> Legal Transparency Center
        </h3>
        <p className="text-xs text-slate-500 font-sans mt-0.5">
          A proactive, verified disclosure of all pending FIRs filed under oath. Demonstrating a clean civic record with absolute transparency.
        </p>
      </div>

      {/* Modern High-Impact Transparency Stamp Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 border-2 border-brand-navy shadow-sm" id="transparency-stamp-card">
        {/* Left Stamp column */}
        <div className="md:col-span-4 bg-party-green-light border-2 border-party-green p-5 flex flex-col justify-between items-center text-center">
          <div className="p-3 bg-party-green/15 text-party-green mb-3 border border-party-green-dark">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Affidavit Status</h5>
            <p className="text-3xl font-black text-party-green-dark">0 Convictions</p>
            <p className="text-base font-black text-party-green">0 Charges Framed</p>
          </div>
          <span className="mt-4 px-3 py-1 bg-party-green text-white text-[9px] font-black tracking-widest uppercase border border-brand-navy">
            100% CLEAN CIVIC RECORD
          </span>
        </div>

        {/* Right context description column */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-3">
          <h4 className="font-display font-black text-brand-navy text-lg uppercase tracking-tight flex items-center gap-1.5">
            <AlertCircle className="w-5 h-5 text-saffron" /> Understanding the Pending Cases
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            As a prominent opposition leader in Bihar conducting statewide grassroots political awareness programs, Prashant Kishor has had several FIRs and complaint cases filed against him by administrative organs.
          </p>
          <ul className="text-xs text-slate-600 space-y-1.5 font-sans list-disc pl-5">
            <li>
              <span className="font-bold text-slate-900 uppercase text-[10px]">Peaceful Protests & Assembly:</span> 5 cases are related to organizing public delegate assemblies at Gandhi Maidan or during the barefoot Padyatra, classified under "unlawful assembly" or "obstructing public way".
            </li>
            <li>
              <span className="font-bold text-slate-900 uppercase text-[10px]">Defamation Complaints:</span> 3 cases are private criminal defamation complaints filed by political opponents in response to speeches exposing regional administration discrepancies and corruption.
            </li>
            <li>
              <span className="font-bold text-slate-900 uppercase text-[10px]">Patna High Court Revision:</span> Procedural stays and stay applications (Cr.W.J.C petitions) have been filed against the police proceedings in the Honorable High Court of Patna.
            </li>
          </ul>
        </div>
      </div>

      {/* Cases list with interactive accordion */}
      <div className="space-y-4" id="cases-accordion-list">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h4 className="font-display font-black text-lg text-brand-navy uppercase tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-saffron" /> Detailed Court Case Disclosures ({filteredCases.length})
          </h4>

          {/* Search Case */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search sections or case numbers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 border-2 border-brand-navy text-xs bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-saffron focus:border-saffron shadow-xs font-bold"
            />
          </div>
        </div>

        {/* Accoridon panels */}
        <div className="space-y-3" id="accordion-container">
          {filteredCases.map((c) => {
            const isExpanded = expandedCase === c.firNo;

            return (
              <div
                key={c.firNo}
                id={`accordion-case-${c.firNo.replace(/[^a-zA-Z0-9]/g, "-")}`}
                className={`bg-white border-2 transition-all duration-150 overflow-hidden ${
                  isExpanded ? "border-saffron shadow-sm" : "border-brand-navy shadow-xs"
                }`}
              >
                {/* Header section clickable */}
                <button
                  onClick={() => toggleCase(c.firNo)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className={`inline-block px-2.5 py-0.5 text-[9px] font-black border border-brand-navy uppercase tracking-widest font-mono ${
                      c.firNo.includes("Complaint") ? "bg-amber-500 text-white" : "bg-rose-500 text-white"
                    }`}>
                      {c.firNo.includes("Complaint") ? "Criminal Complaint" : "Police FIR"}
                    </span>
                    <h5 className="font-display font-black text-brand-navy text-sm leading-tight sm:text-base uppercase tracking-tight">
                      {c.firNo} — {c.policeStation.toUpperCase()}
                    </h5>
                    <p className="text-[10px] text-slate-500 font-mono font-bold">FILED DATE: {c.date} | COURT: {c.court.toUpperCase()}</p>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="hidden sm:inline-block px-2.5 py-1 bg-slate-100 text-brand-navy text-[9px] font-black border border-slate-300 uppercase tracking-widest">
                      ACTIVE INVESTIGATION
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-brand-navy" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-navy" />
                    )}
                  </div>
                </button>

                {/* Body details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-3 border-t-2 border-brand-navy bg-slate-50/50 space-y-4">
                    {/* BNS sections */}
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Applied Penal Code Sections (BNS)</p>
                      <p className="text-xs font-black text-red-800 bg-rose-50 p-2.5 border border-rose-300 font-sans leading-relaxed">
                        {c.sections}
                      </p>
                    </div>

                    {/* Offence description */}
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Brief Description of Offence allegations</p>
                      <p className="text-xs text-slate-700 font-sans leading-relaxed">
                        {c.description}
                      </p>
                    </div>

                    {/* Appeals or High Court Challenges */}
                    <div className="space-y-1 pt-2 border-t-2 border-dashed border-slate-200">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Patna High Court Petitions / Appeals Status</p>
                      <p className="text-xs font-black text-party-green bg-party-green-light p-2.5 border-2 border-party-green font-sans">
                        📢 {c.appealsFiled}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredCases.length === 0 && (
            <div className="p-8 text-center bg-white border-2 border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-bold font-sans">No matching legal cases found for "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
