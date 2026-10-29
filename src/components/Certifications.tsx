import { CERTIFICATIONS } from "@/data/content";
import Reveal, { Eyebrow } from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" data-testid="certifications-section" className="border-t border-navy/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Certifications</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Credentials &amp; Learning</h2>
          </Reveal>
          <Reveal>
            <p className="max-w-xs text-sm leading-relaxed text-navy/60">
              Courses, simulations and programs — listed with year of completion.
            </p>
          </Reveal>
        </div>
        <ol className="mt-14 border-t border-navy/15">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title}>
              <li
                data-testid={`certification-row-${i}`}
                className="group flex items-baseline gap-5 border-b border-navy/15 px-2 py-5 transition-colors duration-300 hover:bg-beige/40 sm:gap-8 md:px-4"
              >
                <span className="font-mono text-[11px] text-burnt">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-base leading-snug md:text-lg">{c.title}</span>
                {c.issuer && (
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-navy/55 sm:block">
                    {c.issuer}
                  </span>
                )}
                <span className="font-mono text-[11px] tracking-[0.12em] text-navy/70">{c.year}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
