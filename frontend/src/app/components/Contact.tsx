import { TranslationContent } from "../translations";

export default function Contact({ t }: { t: TranslationContent }) {
  return (
    <section className="relative">
      {/* Section Header with Directory Path style */}
      <div className="flex items-center gap-2 mb-16">
        <span className="text-[10px] font-mono text-zinc-300">root /</span>
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-black italic">
          {t.contact.title}
        </h2>
        <div className="h-[1px] flex-grow bg-zinc-100"></div>
      </div>

      <div className="space-y-20">
        {/* Email Section - Large Editorial Style */}
        <div className="group">
          <div className="text-[9px] font-mono text-zinc-300 mb-6 group-hover:text-blue-500 transition-colors">
            // public_interface_endpoint
          </div>
          <p className="text-[10px] uppercase font-black text-fuchsia-500 tracking-[0.2em] mb-4">
            {t.contact.emailLabel}
          </p>
          <a
            href={`mailto:${t.contact.email}`}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-black hover:text-blue-600 transition-all duration-500 italic block leading-none"
          >
            {t.contact.email}
          </a>
        </div>

        {/* Technical Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
          {/* GitHub Link */}
          <div className="bg-white p-10 group hover:bg-zinc-50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <p className="text-[10px] uppercase font-black text-zinc-300 tracking-widest mb-6 italic">
              GitHub_Repository
            </p>
            <a
              href={`https://${t.contact.github}`}
              target="_blank"
              className="text-2xl font-bold tracking-tighter text-black hover:translate-x-2 transition-transform inline-flex items-center gap-3"
            >
              <span className="text-zinc-200 font-mono text-xs">→</span>
              {t.contact.github}
            </a>
          </div>

          {/* Availability Status */}
          <div className="bg-white p-10 group hover:bg-zinc-50 transition-colors relative">
            <p className="text-[10px] uppercase font-black text-zinc-300 tracking-widest mb-6 italic">
              Runtime_Status
            </p>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xl font-bold tracking-tighter text-black uppercase">
                {t.contact.status}
              </p>
            </div>

            {/* Syntax style decorative block */}
            <div className="mt-8 pt-6 border-t border-zinc-50">
              <p className="text-[11px] font-mono text-zinc-400">
                <span className="text-blue-500">export default</span>{" "}
                <span className="text-fuchsia-500">connection</span>;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative stamp */}
      <div className="mt-12 flex justify-between items-center text-[9px] font-mono text-zinc-200 uppercase tracking-widest">
        <span>EST_CONNECTION_2026</span>
        <span>AUTH: GRANTED</span>
      </div>
    </section>
  );
}
