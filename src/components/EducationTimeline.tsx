import React from "react";
import { EDUCATION_QUALIFICATIONS } from "../data";
import { Award, BookOpen, GraduationCap, MapPin, Landmark, ShieldCheck } from "lucide-react";

export default function EducationTimeline() {
  return (
    <div className="space-y-8" id="education-timeline-view">
      <div className="border-b-2 border-brand-navy pb-5">
        <h3 className="font-display font-black text-2xl text-brand-navy uppercase tracking-tight flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-saffron" /> Educational Qualifications & Pedigree
        </h3>
        <p className="text-xs text-slate-500 font-sans mt-0.5">
          Chronological record of academic credentials and international professional degrees completed by Prashant Kishor, filed under oath.
        </p>
      </div>

      <div className="relative border-l-4 border-brand-navy ml-4 pl-8 space-y-8" id="academic-timeline-list">
        {EDUCATION_QUALIFICATIONS.map((edu, idx) => (
          <div key={idx} className="relative group" id={`academic-item-${edu.year}`}>
            {/* Timeline Circle with index icon */}
            <div className="absolute -left-[45px] top-1.5 w-7 h-7 bg-saffron border-2 border-brand-navy shadow-sm flex items-center justify-center text-white">
              <BookOpen className="w-3.5 h-3.5 text-white" />
            </div>

            {/* Content card */}
            <div className="p-5 bg-white border-2 border-brand-navy hover:shadow-md transition-all duration-150 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              {/* Left Column: Graduation cap and Year */}
              <div className="md:col-span-3 space-y-2">
                <span className="inline-block px-3 py-1 bg-saffron text-white text-[9px] font-black border border-brand-navy font-mono uppercase tracking-widest">
                  YEAR {edu.year}
                </span>
                <p className="text-sm font-black text-brand-navy font-display flex items-center gap-1 uppercase">
                  <Landmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  {edu.boardOrUniversity.split(",")[0]}
                </p>
              </div>

              {/* Right Column: Degree and Institution Details */}
              <div className="md:col-span-9 space-y-2">
                <h4 className="font-display font-black text-base text-brand-navy uppercase leading-snug">
                  {edu.degree}
                </h4>
                
                <p className="text-xs font-black text-party-green uppercase tracking-wide flex items-center gap-1 font-sans">
                  🏫 {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                    {edu.description}
                  </p>
                )}

                {/* Pedigree highlight badge for ASCI/Johns Hopkins or France */}
                {(edu.degree.includes("Master") || edu.institution.includes("FRANCE") || edu.institution.includes("CAVILAM")) && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-brand-navy text-[10px] font-black border-2 border-brand-navy uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-saffron" /> Premium Collaboration Pedigree
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
