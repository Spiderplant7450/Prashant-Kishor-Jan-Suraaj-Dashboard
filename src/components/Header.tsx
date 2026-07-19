import React from "react";
import { Landmark, User, ShieldAlert, Award, FileText, Share2, Compass } from "lucide-react";
import { PartyLogo } from "./Logos";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [copied, setCopied] = React.useState(false);
  const [lang, setLang] = React.useState('en');
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    // Check google translate cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && match[1]) {
      setLang(match[1]);
    } else {
      // Check if translation is active via the select element
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select && select.value) {
        setLang(select.value);
      }
    }

    // Scroll Indicator Logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    setLang(newLang);
    
    // Clear old cookies just in case
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    
    // Set the new cookie
    document.cookie = `googtrans=/en/${newLang}; path=/`;
    
    // Trigger the actual translate widget to update immediately without reload
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback if widget hasn't loaded yet
      window.location.reload();
    }
  };

  const tabs = [
    { id: "overview", label: "Profile Overview", icon: User },
    { id: "journey", label: "Campaign Legacy", icon: Compass },
    { id: "assets", label: "Financial & Movables", icon: Landmark },
    { id: "properties", label: "Real Estate Portfolio", icon: FileText },
    { id: "education", label: "Academic Journey", icon: Award },
    { id: "legal", label: "Legal Transparency", icon: ShieldAlert },
    { id: "affidavit", label: "Affidavit Flipbook", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" id="main-header">
      {/* Scroll Progress Bar at the very top */}
      <div className="w-full h-1.5 bg-gray-200">
        <div 
          className="h-1.5 bg-party-green transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Top Saffron Bar */}
      <div className="w-full h-1 bg-saffron" id="party-tricolor-bar"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand area */}
          <div className="shrink-0 flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("overview")}>
            <PartyLogo className="w-11 h-11 hover:scale-105 transition-transform duration-200" />
            <div>
              <h1 className="font-display font-black text-base lg:text-lg text-brand-navy leading-none tracking-tighter flex items-center gap-1.5 uppercase whitespace-nowrap">
                Prashant Kishor
                <span className="hidden sm:inline-block bg-party-green text-white text-[9px] font-black px-2.5 py-0.5 rounded-none border border-party-green-dark">
                  Jan Suraaj
                </span>
              </h1>
              <p className="text-[9px] font-mono text-slate-500 font-bold tracking-widest uppercase mt-0.5 whitespace-nowrap">182-BANKIPUR CONSTITUENCY</p>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden xl:flex flex-1 min-w-0 overflow-x-auto scrollbar-none mx-4 items-center space-x-1" aria-label="Global" id="desktop-nav">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setTimeout(() => {
                      const container = document.getElementById("affidavit-tabs-container");
                      if (container) {
                        const y = container.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 50);
                  }}
                  className={`shrink-0 flex items-center gap-1.5 px-2 2xl:px-3 py-1.5 2xl:py-2 text-[10px] 2xl:text-xs font-black uppercase tracking-wider transition-all duration-150 border-2 whitespace-nowrap ${
                    isActive
                      ? "bg-brand-navy text-white border-brand-navy font-black shadow-sm"
                      : "text-slate-600 border-transparent hover:text-brand-navy hover:bg-slate-100"
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-saffron" : "text-slate-500"}`} />
                  {tab.label.split(" & ")[0].split(" Portfolio")[0].split(" Journey")[0]}
                </button>
              );
            })}
          </nav>

          {/* Language Toggle and Share Button */}
          <div className="shrink-0 flex items-center space-x-3">
            {/* Language Switch */}
            <div className="hidden xl:flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-full border border-gray-200 notranslate">
              <span className={`text-[9px] font-black uppercase ${lang === 'en' ? 'text-brand-navy' : 'text-gray-400'}`}>EN</span>
              <button
                onClick={toggleLanguage}
                className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors focus:outline-none ${lang === 'hi' ? 'bg-saffron' : 'bg-gray-300'}`}
                aria-label="Toggle Language"
              >
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${lang === 'hi' ? 'translate-x-3.5' : 'translate-x-0.5'}`}
                />
              </button>
              <span className={`text-[9px] font-black uppercase ${lang === 'hi' ? 'text-brand-navy' : 'text-gray-400'}`}>हिन्दी</span>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="flex items-center gap-1.5 px-2 2xl:px-3 py-1.5 border-2 border-brand-navy text-[10px] 2xl:text-xs font-black uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: copied ? "var(--color-party-green)" : "var(--color-saffron)",
                color: copied ? "#ffffff" : "var(--color-brand-navy)",
                borderColor: "var(--color-brand-navy)"
              }}
              id="share-button"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Copied!" : "Share"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation panel */}
      <div className="xl:hidden flex items-center overflow-x-auto py-2.5 px-4 bg-gray-50 border-t border-gray-200 scrollbar-none" id="mobile-nav">
        {/* Mobile Language Switch */}
        <div className="flex xl:hidden shrink-0 items-center gap-1.5 bg-gray-100 px-2 py-1.5 rounded-full border border-gray-200 mr-3 notranslate">
          <span className={`text-[10px] font-black uppercase ${lang === 'en' ? 'text-brand-navy' : 'text-gray-400'}`}>EN</span>
          <button
            onClick={toggleLanguage}
            className={`relative inline-flex h-5 w-8 items-center rounded-full transition-colors focus:outline-none ${lang === 'hi' ? 'bg-saffron' : 'bg-gray-300'}`}
            aria-label="Toggle Language"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${lang === 'hi' ? 'translate-x-3.5' : 'translate-x-0.5'}`}
            />
          </button>
          <span className={`text-[10px] font-black uppercase ${lang === 'hi' ? 'text-brand-navy' : 'text-gray-400'}`}>हिन्दी</span>
        </div>

        <div className="flex space-x-2">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`mobile-nav-tab-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setTimeout(() => {
                    const container = document.getElementById("affidavit-tabs-container");
                    if (container) {
                      const y = container.getBoundingClientRect().top + window.scrollY - 130;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 50);
                }}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border-2 ${
                  isActive
                    ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                {tab.label.split(" & ")[0].split(" Portfolio")[0].split(" Journey")[0]}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
