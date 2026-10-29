import { Brain, CodeXml, GitBranch, HeartHandshake, Sparkles } from "lucide-react";
import { SKILL_GROUPS } from "@/data/content";
import Reveal, { Eyebrow } from "./Reveal";

const ICONS = { sparkles: Sparkles, code: CodeXml, brain: Brain, git: GitBranch, heart: HeartHandshake };

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Tools &amp; Technologies</h2>
        </Reveal>
        <Reveal>
          <div
            className="mt-14 grid gap-px overflow-hidden border border-navy/15 bg-navy/15 md:grid-cols-3"
            data-testid="skills-bento"
          >
            {SKILL_GROUPS.map((g) => {
              const Icon = ICONS[g.icon];
              return (
                <div
                  key={g.id}
                  data-testid={`skill-group-${g.id}`}
                  className={`bg-ivory p-8 md:p-10 ${g.wide ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-burnt" />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy">{g.title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        data-testid={`skill-chip-${g.id}`}
                        className="rounded-full border border-navy/20 px-3.5 py-1.5 text-sm text-navy/80 transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-ivory"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
