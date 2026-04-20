import { TranslationContent } from "../translations";

const colors = [
  "text-blue-500",
  "text-fuchsia-500",
  "text-emerald-500",
  "text-orange-500",
];
const bgColors = [
  "bg-blue-500",
  "bg-fuchsia-500",
  "bg-emerald-500",
  "bg-orange-500",
];

export default function Expertise({ t }: { t: TranslationContent }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-black">
          {t.expertise.title}
        </h2>
        <div className="h-[1px] flex-grow bg-zinc-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.expertise.categories.map((cat, i) => (
          <div
            key={i}
            className="group p-10 bg-white border border-zinc-100 hover:border-black transition-all duration-500 relative overflow-hidden"
          >
            {/* Corner Accent */}
            <div
              className={`absolute top-0 right-0 w-12 h-12 ${bgColors[i % 4]} opacity-5 -mr-6 -mt-6 rounded-full group-hover:scale-[5] transition-transform duration-700`}
            ></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3
                className={`text-[11px] font-black uppercase tracking-widest ${colors[i % 4]} flex items-center gap-2`}
              >
                <span className="opacity-30 font-mono">{"<"}</span>
                {cat.name}
                <span className="opacity-30 font-mono">{"/>"}</span>
              </h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {cat.skills.map((skill, j) => (
                <li
                  key={j}
                  className="flex items-center gap-4 text-xl font-bold tracking-tighter text-zinc-900 group-hover:translate-x-2 transition-transform"
                >
                  <span
                    className={`w-1 h-1 rounded-full ${bgColors[i % 4]}`}
                  ></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
