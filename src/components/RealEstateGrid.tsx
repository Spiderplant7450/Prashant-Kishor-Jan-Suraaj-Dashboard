import React, { useState } from "react";
import { IMMOVABLE_ASSETS } from "../data";
import { Building, MapPin, Maximize, Calendar, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function RealEstateGrid() {
  const [filterRegion, setFilterRegion] = useState<"All" | "Bihar" | "Delhi/NCR" | "Assam">("All");

  const formatCurrency = (val: number) => {
    if (val === 0) return "Inherited / Grandfather Estate";
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Crore`;
    }
    return `₹ ${(val / 100000).toFixed(2)} Lakh`;
  };

  const getRegion = (desc: string) => {
    const d = desc.toLowerCase();
    if (d.includes("patna") || d.includes("bihar") || d.includes("buxar") || d.includes("konar") || d.includes("rohtas")) return "Bihar";
    if (d.includes("guwahati") || d.includes("dispur") || d.includes("assam")) return "Assam";
    if (d.includes("delhi") || d.includes("vasant vihar") || d.includes("ghaziabad") || d.includes("noida") || d.includes("indirapuram") || d.includes("vasundhra")) return "Delhi/NCR";
    return "Other";
  };

  const allProperties = [
    ...IMMOVABLE_ASSETS.nonAgriculturalLand.map(p => ({ ...p, type: "Non-Agricultural Land", areaUnit: p.area, isSpouse: false })),
    ...IMMOVABLE_ASSETS.residentialBuildings.map(p => ({ ...p, type: "Residential Building/Flat", areaUnit: `${p.areaSqFt.toLocaleString()} Sq.Ft.`, isSpouse: p.description.includes("Guwahati") || p.description.includes("Spouse") }))
  ];

  const filteredProperties = allProperties.filter(p => {
    if (filterRegion === "All") return true;
    return getRegion(p.description) === filterRegion;
  });

  return (
    <div className="space-y-8" id="immovable-real-estate-view">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b-2 border-brand-navy pb-5">
        <div>
          <h3 className="font-display font-black text-2xl text-brand-navy uppercase tracking-tight flex items-center gap-2">
            <Building className="w-6 h-6 text-saffron" /> Immovable Real Estate Portfolio
          </h3>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            A comprehensive, verified bento listing of land, ancestral properties, and urban residential residences owned by the candidate's family, valued at ₹ 86.29 Crore combined.
          </p>
        </div>

        {/* Region Filters */}
        <div className="flex bg-slate-100 p-1 border-2 border-brand-navy self-start sm:self-auto shrink-0" id="property-region-filters">
          {(["All", "Bihar", "Delhi/NCR", "Assam"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setFilterRegion(region)}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all border-2 ${
                filterRegion === region
                  ? "bg-brand-navy text-white border-brand-navy"
                  : "text-slate-600 hover:text-brand-navy border-transparent hover:bg-white"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Agriculture Disclaimer Card */}
      {!IMMOVABLE_ASSETS.agriculturalLand.hasAny && (
        <div className="p-4 bg-party-green-light border-2 border-party-green flex items-start gap-3" id="agri-land-disclaimer">
          <span className="text-2xl mt-0.5">🌾</span>
          <div>
            <h5 className="font-black text-brand-navy text-xs uppercase">Agricultural Land Disclaimer</h5>
            <p className="text-[11px] text-slate-700 font-sans leading-relaxed mt-0.5">
              {IMMOVABLE_ASSETS.agriculturalLand.details} This matches his narrative of hailing from a service class family (his father Shrikant Pandey was a public health officer in Bihar state government).
            </p>
          </div>
        </div>
      )}

      {/* Properties Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="real-estate-bento-grid">
        {filteredProperties.map((p, idx) => {
          const region = getRegion(p.description);
          const isSpouseAsset = p.isSpouse;

          return (
            <div
              key={idx}
              id={`property-card-${idx}`}
              className="group bg-white border-2 border-brand-navy hover:shadow-md transition-all duration-150 overflow-hidden flex flex-col justify-between"
            >
              {/* Card top banner style */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 border border-brand-navy tracking-widest font-mono ${
                    region === "Bihar" ? "bg-saffron text-white" : region === "Assam" ? "bg-party-green text-white" : "bg-slate-700 text-white"
                  }`}>
                    {region} Region
                  </span>
                  
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 border ${
                    isSpouseAsset ? "bg-rose-500 text-white border-brand-navy" : "bg-slate-100 text-slate-700 border-slate-300"
                  }`}>
                    {isSpouseAsset ? "Spouse Asset" : "Self-Owned"}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-black text-sm text-brand-navy line-clamp-2 uppercase leading-snug group-hover:text-saffron transition-colors">
                    {p.description.split(",")[0].toUpperCase()}
                  </h4>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate uppercase font-bold text-[10px]">{p.description.split(",").slice(1).join(",")}</span>
                  </p>
                </div>

                {/* Property specs details */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t-2 border-slate-100">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                    <Maximize className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Area/Size</p>
                      <p className="font-black text-brand-navy">{p.areaUnit}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Acquisition</p>
                      <p className="font-black text-brand-navy">{p.purchaseYear > 0 ? p.purchaseYear : "Inherited"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card bottom price highlight */}
              <div className="p-4 bg-slate-50 border-t-2 border-brand-navy flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Current Market Value</p>
                  <p className="text-sm font-black text-brand-navy font-display uppercase">
                    {formatCurrency(p.currentMarketValue)}
                  </p>
                </div>
                
                {p.purchaseCost > 0 && (
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Original Cost</p>
                    <p className="text-[11px] font-black font-mono text-slate-600">
                      {formatCurrency(p.purchaseCost)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
