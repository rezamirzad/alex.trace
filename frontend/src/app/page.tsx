"use client";

import React, { useState } from "react";
import { translations, Language } from "./translations";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

type View = "profile" | "expertise" | "projects" | "contact";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [activeView, setActiveView] = useState<View>("profile");
  const t = translations[lang];

  const renderContent = () => {
    switch (activeView) {
      case "profile":
        return <Profile t={t} />;
      case "expertise":
        return <Expertise t={t} />;
      case "projects":
        return <Projects t={t} />;
      case "contact":
        return <Contact t={t} />;
      default:
        return <Profile t={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white flex flex-col">
      <Navbar
        lang={lang}
        setLang={setLang}
        activeView={activeView}
        setActiveView={setActiveView}
        t={t}
      />

      {/* Added flex-grow to ensure the footer stays at the bottom on short pages */}
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20 flex-grow">
        <div
          key={activeView}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          {renderContent()}
        </div>
      </main>

      {/* Removed 'fixed bottom-8' and 'pointer-events-none' to allow normal scrolling/interaction */}
      <footer className="w-full px-6 py-8 flex justify-between items-center">
        <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-300 font-bold">
          {t.rights}
        </p>
      </footer>
    </div>
  );
}
