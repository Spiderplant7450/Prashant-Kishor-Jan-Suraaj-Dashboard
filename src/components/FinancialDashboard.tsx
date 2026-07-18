import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { FINANCIAL_YEARS_INCOME, MOVABLE_ASSETS } from "../data";
import { Coins, PiggyBank, Landmark, ShieldCheck, Heart, User, Sparkles } from "lucide-react";

export default function FinancialDashboard() {
  const [activeHolder, setActiveHolder] = useState<"All" | "Self" | "Spouse" | "Dependent">("All");

  // Format number to INR words or standard commas
  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString("en-IN")}`;
  };

  // Income chart data processing
  const chartData = FINANCIAL_YEARS_INCOME.map((item) => ({
    year: item.financialYear,
    "Prashant Kishor (Self)": item.incomeSelf,
    "Jahnavi Das (Spouse)": item.incomeSpouse,
  })).reverse();

  // Movable Assets allocations pie chart data - utilizing Bold Typography theme color palette
  const pieData = [
    { name: "Deposits & Savings", value: 81043486, color: "#FFC20E" }, // Saffron brand
    { name: "Shares & Investments", value: 962512279, color: "#006A4D" }, // Deep green
    { name: "HDFC Life Insurance", value: 53499123, color: "#1B263B" }, // Navy
    { name: "Advanced Loans & Receivables", value: 87338373, color: "#64748b" }, // Cool Slate
    { name: "Jewellery & Valuables", value: 3681000, color: "#eab308" } // Amber
  ];

  const filteredDeposits = MOVABLE_ASSETS.deposits.filter(
    (item) => activeHolder === "All" || item.holder === activeHolder
  );

  const filteredInvestments = MOVABLE_ASSETS.investments.filter(
    (item) => activeHolder === "All" || item.holder === activeHolder
  );

  const filteredInsurance = MOVABLE_ASSETS.insurance.filter(
    (item) => activeHolder === "All" || item.holder === activeHolder
  );

  return (
    <div className="space-y-12" id="financial-dashboard-view">
      {/* Visual Analytics section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Income Tax Returns Comparison */}
        <div className="lg:col-span-7 bg-white p-6 border-2 border-brand-navy shadow-sm space-y-4" id="itr-comparison-card">
          <div>
            <h4 className="font-display font-black text-base text-brand-navy uppercase tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-saffron" /> Income Tax Returns Comparison (Last 5 Years)
            </h4>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Visualizing the reported annual taxable income. Significant drop in 2024-25 reflects a generous donation of 10 Crore Rupees to the Jan Suraaj Party.
            </p>
          </div>

          <div className="h-72 w-full pt-2" id="recharts-itr-bar-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" tickLine={false} axisLine={false} style={{ fontSize: "10px", fontWeight: "bold", fill: "#1e293b" }} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  style={{ fontSize: "10px", fontWeight: "bold", fill: "#1e293b" }}
                  tickFormatter={(val) => {
                    if (val >= 10000000) return `${val / 10000000} Cr`;
                    if (val >= 100000) return `${val / 100000} L`;
                    return val;
                  }}
                />
                <Tooltip
                  formatter={(value: any) => [formatCurrency(Number(value)), ""]}
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "0px", border: "2px solid #1B263B", boxShadow: "2px 2px 0px rgba(0,0,0,0.15)" }}
                />
                <Legend wrapperStyle={{ fontSize: "11px", fontWeight: "bold", paddingTop: "10px" }} />
                <Bar dataKey="Prashant Kishor (Self)" fill="#FFC20E" radius={0} />
                <Bar dataKey="Jahnavi Das (Spouse)" fill="#006A4D" radius={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Movable Asset Distribution */}
        <div className="lg:col-span-5 bg-white p-6 border-2 border-brand-navy shadow-sm space-y-4" id="asset-allocation-pie-card">
          <div>
            <h4 className="font-display font-black text-base text-brand-navy uppercase tracking-tight flex items-center gap-2">
              <Coins className="w-5 h-5 text-party-green" /> Movable Asset Allocation
            </h4>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Breakdown of the combined family liquid and investment assets, totaling ₹ 111.78 Crore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Pie Chart visual */}
            <div className="sm:col-span-5 h-44 flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [formatCurrency(Number(value)), ""]} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Custom Pie Legend */}
            <div className="sm:col-span-7 space-y-2.5">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-[11px]">
                  <span className="w-2.5 h-2.5 mt-0.5 shrink-0 border border-brand-navy" style={{ backgroundColor: item.color }}></span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-brand-navy truncate uppercase text-[10px] leading-tight">{item.name}</p>
                    <p className="text-slate-600 font-mono font-bold">{formatCurrency(item.value)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Itemized Grid with Holder filters */}
      <div className="space-y-6" id="itemized-financials-table">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b-2 border-brand-navy pb-4">
          <div>
            <h4 className="font-display font-black text-xl text-brand-navy uppercase tracking-tight flex items-center gap-2">
              <PiggyBank className="w-6 h-6 text-saffron" /> Itemized Assets Ledger
            </h4>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Granular view of all verified bank accounts, investments, and insurance policies.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex bg-slate-100 p-1 border-2 border-brand-navy self-start sm:self-auto shrink-0" id="holder-selector-tabs">
            {(["All", "Self", "Spouse", "Dependent"] as const).map((holder) => (
              <button
                key={holder}
                onClick={() => setActiveHolder(holder)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${
                  activeHolder === holder
                    ? "bg-brand-navy text-white shadow-xs"
                    : "text-slate-600 hover:text-brand-navy hover:bg-white"
                }`}
              >
                {holder === "All" ? "Family Combined" : holder.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Bento grid layout for itemized ledger lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bank Accounts and Fixed Deposits */}
          <div className="bg-white p-5 border-2 border-brand-navy space-y-4 shadow-sm" id="banking-deposits-grid">
            <h5 className="font-display font-black text-brand-navy flex items-center gap-1.5 border-b-2 border-slate-100 pb-2 text-xs uppercase tracking-wider text-saffron-dark">
              <Landmark className="w-4 h-4 text-saffron" /> Bank Deposits & Savings Accounts
            </h5>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
              {filteredDeposits.map((dep, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200 hover:border-brand-navy transition-colors">
                  <div className="space-y-1 pr-4 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 border border-brand-navy ${
                        dep.holder === "Self" ? "bg-saffron text-white" : dep.holder === "Spouse" ? "bg-party-green text-white" : "bg-brand-navy text-white"
                      }`}>
                        {dep.holder.toUpperCase()}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-black uppercase">{dep.type}</span>
                    </div>
                    <p className="text-xs font-bold text-brand-navy break-words">{dep.institution.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">
                    {formatCurrency(dep.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Equity, Mutual Funds & Business Holdings */}
          <div className="bg-white p-5 border-2 border-brand-navy space-y-4 shadow-sm" id="investments-equity-grid">
            <h5 className="font-display font-black text-brand-navy flex items-center gap-1.5 border-b-2 border-slate-100 pb-2 text-xs uppercase tracking-wider text-party-green">
              <Coins className="w-4 h-4 text-party-green" /> Equity, Shares & Mutual Funds
            </h5>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
              {filteredInvestments.map((inv, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200 hover:border-brand-navy transition-colors">
                  <div className="space-y-1 pr-4 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 border border-brand-navy ${
                        inv.holder === "Self" ? "bg-saffron text-white" : "bg-party-green text-white"
                      }`}>
                        {inv.holder.toUpperCase()}
                      </span>
                      {inv.sharesCount > 0 && (
                        <span className="text-[10px] text-slate-500 font-mono font-black uppercase">
                          {inv.sharesCount.toLocaleString()} Shares
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-brand-navy break-words">{inv.companyName.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">
                    {formatCurrency(inv.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HDFC Life Insurance Policies */}
          <div className="bg-white p-5 border-2 border-brand-navy space-y-4 shadow-sm" id="insurance-policies-grid">
            <h5 className="font-display font-black text-brand-navy flex items-center gap-1.5 border-b-2 border-slate-100 pb-2 text-xs uppercase tracking-wider text-brand-navy">
              <ShieldCheck className="w-4 h-4 text-brand-navy" /> Life Insurance Investments
            </h5>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
              {filteredInsurance.map((ins, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200 hover:border-brand-navy transition-colors">
                  <div className="space-y-1 pr-4 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 border border-brand-navy ${
                        ins.holder === "Self" ? "bg-saffron text-white" : "bg-party-green text-white"
                      }`}>
                        {ins.holder.toUpperCase()}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-black uppercase">{ins.policyDetails}</span>
                    </div>
                    <p className="text-xs font-bold text-brand-navy break-words">{ins.companyName.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">
                    {formatCurrency(ins.value)}
                  </span>
                </div>
              ))}
              {filteredInsurance.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-8 font-bold">No matching insurance plans found for {activeHolder}.</p>
              )}
            </div>
          </div>

          {/* Advanced Loans, Jewellery & accrued interest */}
          <div className="bg-white p-5 border-2 border-brand-navy space-y-4 shadow-sm" id="other-movables-grid">
            <h5 className="font-display font-black text-brand-navy flex items-center gap-1.5 border-b-2 border-slate-100 pb-2 text-xs uppercase tracking-wider text-slate-700">
              <Heart className="w-4 h-4 text-slate-700" /> Advanced Loans & Valuables
            </h5>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
              {/* Accrued interest details */}
              {MOVABLE_ASSETS.interestAccrued.map((item, idx) => (
                <div key={`int-${idx}`} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-saffron text-white border border-brand-navy">Self</span>
                    <p className="text-xs font-bold text-brand-navy">{item.type.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">{formatCurrency(item.amount)}</span>
                </div>
              ))}

              {/* Advanced Loans */}
              {MOVABLE_ASSETS.loansGiven.map((item, idx) => (
                <div key={`loan-${idx}`} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-slate-700 text-white border border-brand-navy">Advance Given ({item.holder.toUpperCase()})</span>
                    <p className="text-xs font-bold text-brand-navy">To: {item.to.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">{formatCurrency(item.amount)}</span>
                </div>
              ))}

              {/* Jewellery */}
              {MOVABLE_ASSETS.jewellery.map((item, idx) => (
                <div key={`jewel-${idx}`} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-amber-500 text-white border border-brand-navy font-bold">Valuables</span>
                    <p className="text-xs font-bold text-brand-navy">{item.description.toUpperCase()} ({item.weightGrams}g)</p>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-navy shrink-0">{formatCurrency(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
