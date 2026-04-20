import { TranslationContent } from "../translations";

export default function Projects({ t }: { t: TranslationContent }) {
  return (
    <section>
      <div className="flex justify-between items-end mb-10 border-b border-zinc-100 pb-4">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-black italic">
          {t.projects.title}
        </h2>
        <span className="text-[10px] font-mono text-blue-500 font-bold">
          STATUS: STABLE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {t.projects.list.map((proj, i) => (
          <div
            key={i}
            className="group border border-zinc-100 p-8 hover:border-blue-500 transition-all duration-300 bg-white"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <div className="text-[9px] font-mono text-zinc-300 mb-2">
                  0{i + 1}.OBJ
                </div>
                <h3 className="text-3xl font-bold tracking-tighter text-black mb-2 italic leading-none group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black text-fuchsia-500 mb-6">
                  {proj.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[8px] font-mono px-2 py-1 bg-blue-50 text-blue-600 font-bold rounded-sm border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 border-l border-zinc-100 pl-10">
                <p className="text-lg text-zinc-600 leading-snug mb-8">
                  {proj.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-[8px] uppercase font-black text-zinc-300 tracking-widest mb-2">
                      Challenge
                    </h4>
                    <p className="text-xs text-zinc-500 italic">
                      {proj.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[8px] uppercase font-black text-zinc-300 tracking-widest mb-2">
                      Solution
                    </h4>
                    <p className="text-xs text-zinc-500 italic">
                      {proj.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-sm flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono font-black text-emerald-600 uppercase">
                      Success_Metric:
                    </span>
                    <p className="text-xs font-bold text-emerald-700">
                      {proj.outcome}
                    </p>
                  </div>
                  <a
                    href={proj.link}
                    className="text-[9px] font-black uppercase tracking-widest text-emerald-800 hover:opacity-50 transition-all underline"
                  >
                    {t.buttons.inspectSource}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
