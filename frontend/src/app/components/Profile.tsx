import { TranslationContent } from "../translations";

export default function Profile({ t }: { t: TranslationContent }) {
  return (
    <section className="relative">
      <div className="flex justify-between items-start mb-12">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">
            {t.hero.location}
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-300 font-bold">
          v2.0.4 // PRODUCTION
        </span>
      </div>

      <h1 className="text-7xl md:text-9xl font-bold text-black mb-16 italic leading-[0.8] hover:text-blue-600 transition-colors cursor-default">
        {t.hero.name}
      </h1>

      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-3/5">
          <div className="relative p-8 border border-zinc-100 bg-white shadow-[20px_20px_0px_0px_rgba(59,130,246,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-emerald-500"></div>
            <p className="text-2xl md:text-3xl font-medium text-zinc-800 leading-tight">
              {t.hero.bio}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href={`/${t.hero.cvFilename}`}
              download={t.hero.cvFilename}
              className="text-[10px] font-black uppercase tracking-[0.2em] px-10 py-5 bg-black text-white hover:bg-blue-600 transition-all shadow-xl flex items-center gap-4"
            >
              {t.buttons.downloadCv}
              <span className="opacity-50">.PDF</span>
            </a>
          </div>
        </div>

        <div className="lg:w-2/5 w-full">
          <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-xl font-mono shadow-sm">
            <span className="text-[9px] uppercase tracking-widest font-black text-fuchsia-500 block mb-6">
              // {t.hero.statusLabel}
            </span>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <p className="text-xs font-bold uppercase tracking-tighter text-black">
                  {t.contact.status}
                </p>
              </div>
              <div className="text-[11px] leading-relaxed py-4 border-t border-zinc-200">
                <span className="text-blue-600">const</span>{" "}
                <span className="text-fuchsia-600">philosophy</span> ={" "}
                <span className="text-emerald-600">"{t.hero.quote}"</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
