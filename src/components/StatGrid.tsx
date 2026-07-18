import React from "react";
import { DollarSign, Landmark, Building, HelpCircle, ShieldCheck, ShieldAlert, Award } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subText: string;
  icon: React.ComponentType<any>;
  colorTheme: "saffron" | "green" | "blue" | "red" | "purple";
  badgeText?: string;
}

function StatCard({ title, value, subText, icon: IconComp, colorTheme, badgeText }: StatCardProps) {
  const themeStyles = {
    saffron: {
      bg: "bg-saffron-light border-saffron",
      iconBg: "bg-saffron text-white border border-brand-navy shadow-sm",
      valueColor: "text-brand-navy",
      badge: "bg-brand-navy text-white"
    },
    green: {
      bg: "bg-party-green-light border-party-green",
      iconBg: "bg-party-green text-white border border-brand-navy shadow-sm",
      valueColor: "text-brand-navy",
      badge: "bg-brand-navy text-white"
    },
    blue: {
      bg: "bg-slate-100/50 border-brand-navy",
      iconBg: "bg-brand-navy text-white border border-brand-navy shadow-sm",
      valueColor: "text-brand-navy",
      badge: "bg-brand-navy text-white"
    },
    red: {
      bg: "bg-rose-50 border-rose-500",
      iconBg: "bg-rose-600 text-white border border-brand-navy shadow-sm",
      valueColor: "text-rose-800",
      badge: "bg-rose-600 text-white"
    },
    purple: {
      bg: "bg-indigo-50 border-indigo-500",
      iconBg: "bg-indigo-600 text-white border border-brand-navy shadow-sm",
      valueColor: "text-indigo-800",
      badge: "bg-indigo-600 text-white"
    }
  };

  const activeTheme = themeStyles[colorTheme] || themeStyles.saffron;

  return (
    <div className={`p-6 border-2 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 bg-white ${activeTheme.bg}`} id={`stat-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-start justify-between">
        <div className={`p-2 ${activeTheme.iconBg}`}>
          <IconComp className="w-5 h-5" />
        </div>
        {badgeText && (
          <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border border-brand-navy ${activeTheme.badge}`}>
            {badgeText}
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">{title}</h4>
        <p className={`text-2xl sm:text-3xl font-black font-display leading-none tracking-tight uppercase ${activeTheme.valueColor}`}>
          {value}
        </p>
        <p className="text-[11px] text-slate-600 leading-tight font-sans pt-0.5">{subText}</p>
      </div>
    </div>
  );
}

export default function StatGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="stats-dashboard-grid">
      <div className="mb-6 p-4 bg-white border-2 border-brand-navy">
        <h3 className="font-display font-black text-lg text-brand-navy tracking-tight uppercase flex items-center gap-2">
          <span>📊</span> Core Affidavit Statistics at a Glance
        </h3>
        <p className="text-xs text-slate-500 font-sans mt-0.5">
          Meticulous, real financial audits extracted directly from Prashant Kishor's July 2026 court filing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Family Combined Net Worth */}
        <StatCard
          title="Combined Net Worth"
          value="₹ 198.08 Crore"
          subText="Combined assets of Prashant Kishor (₹96.07 Cr) and Spouse (₹101.94 Cr)"
          icon={DollarSign}
          colorTheme="saffron"
          badgeText="Combined Net Worth"
        />

        {/* Movable Assets */}
        <StatCard
          title="Total Movable Assets"
          value="₹ 111.78 Crore"
          subText="Bank accounts (₹8.10 Cr), FDs, HDFC Life Policies, Vedhas Ventures Shares (₹95.26 Cr)"
          icon={Landmark}
          colorTheme="green"
          badgeText="Movable Portfolio"
        />

        {/* Immovable Assets */}
        <StatCard
          title="Total Immovable Assets"
          value="₹ 86.29 Crore"
          subText="Self residential (₹59.25 Cr), Spouse residential (₹12.42 Cr), Konar Rice Mill (₹9.75 Cr)"
          icon={Building}
          colorTheme="blue"
          badgeText="Real Estate Value"
        />

        {/* Total Liabilities */}
        <StatCard
          title="Total Liabilities"
          value="₹ 6.33 Crore"
          subText="Self Home Loan at Faridabad (₹5.77 Cr), Spouse professional loan (₹55.38 Lakhs)"
          icon={Landmark}
          colorTheme="purple"
          badgeText="HDFC Home Loan"
        />

        {/* Legal Record */}
        <StatCard
          title="Pending Criminal Cases"
          value="08 Cases"
          subText="0 charges framed in any court, 0 convictions. Mostly related to peaceful political assemblies."
          icon={ShieldAlert}
          colorTheme="red"
          badgeText="0 Convictions"
        />

        {/* Academic Profile */}
        <StatCard
          title="Higher Qualifications"
          value="05 Degrees"
          subText="ASCI Master of Healthcare Management, Lucknow BBA, Patna Science College, CAVILAM French Certificate"
          icon={Award}
          colorTheme="blue"
          badgeText="Intellectual Record"
        />
      </div>
    </div>
  );
}
