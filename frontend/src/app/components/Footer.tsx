import { TranslationContent } from "../translations";

export default function Footer({ t }: { t: TranslationContent }) {
  return (
    <footer className="px-6 py-12 border-t border-zinc-100 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-4">
        {["Next.js 14", "Tailwind CSS", "TypeScript"].map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-black text-zinc-300 uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium italic">
        {t.rights}
      </p>
    </footer>
  );
}
