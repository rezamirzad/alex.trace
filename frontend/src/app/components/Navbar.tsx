import React from "react";
import { Language, TranslationContent } from "../translations";

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeView: string;
  setActiveView: (v: any) => void;
  t: TranslationContent;
}

export default function Navbar({
  lang,
  setLang,
  activeView,
  setActiveView,
  t,
}: NavbarProps) {
  const views = [
    { id: "profile", label: t.nav.profile },
    { id: "expertise", label: t.nav.expertise },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 py-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Technical Logo Style */}
        <div className="text-black font-black tracking-tighter text-xl italic flex items-center gap-1">
          <span className="text-zinc-300 font-mono not-italic">[</span>
          trace
          <span className="text-zinc-300 font-mono not-italic">]</span>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          {/* Changed 'hidden md:flex' to 'flex' and adjusted gap for mobile */}
          <div className="flex gap-4 md:gap-8">
            {views.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative pb-1 ${
                  activeView === v.id
                    ? "text-black"
                    : "text-zinc-400 hover:text-black"
                }`}
              >
                {v.label}
                {activeView === v.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black animate-in fade-in slide-in-from-left-1"></span>
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-3 border-l border-zinc-200 pl-4 md:pl-8">
            {(["en", "fr"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-black uppercase transition-colors duration-300 ${
                  lang === l
                    ? "text-black underline underline-offset-4 decoration-2"
                    : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
