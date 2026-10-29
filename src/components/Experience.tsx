import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { EDUCATION, INTERNSHIP, LEADERSHIP } from "@/data/content";
import Reveal, { Eyebrow } from "./Reveal";

const H3 = "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-navy";

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="border-t border-navy/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Background</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Education &amp; Experience</h2>
        </Reveal>
        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className={H3}>
                <GraduationCap className="h-4 w-4 text-burnt" />
                Education
              </h3>
            </Reveal>
            <div className="relative mt-8 space-y-10 border-l border-navy/20 pl-8">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.title}>
                  <div className="relative" data-testid={`education-entry-${i}`}>
                    <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-burnt" aria-hidden="true" />
                    <p className="font-mono text-[11px] tracking-[0.15em] text-burnt">{e.years}</p>
                    <h4 className="mt-2 font-serif text-xl leading-snug">{e.title}</h4>
                    <p className="mt-1.5 text-sm text-navy/65">{e.school}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-navy/50">{e.score}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <Reveal>
                <h3 className={H3}>
                  <Briefcase className="h-4 w-4 text-burnt" />
                  Internship
                </h3>
              </Reveal>
              <Reveal>
                <div className="mt-8 border border-navy/15 bg-[#FBF7EE] p-8" data-testid="internship-entry">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-2xl">{INTERNSHIP.title}</h4>
                    <p className="font-mono text-[11px] tracking-[0.15em] text-burnt">
                      {INTERNSHIP.org} · {INTERNSHIP.year}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {INTERNSHIP.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed text-navy/70">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-burnt" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h3 className={H3}>
                  <Trophy className="h-4 w-4 text-burnt" />
                  Leadership
                </h3>
              </Reveal>
              <div className="mt-8 space-y-6">
                {LEADERSHIP.map((l, i) => (
                  <Reveal key={l.title}>
                    <div className="border-l-2 border-burnt/60 pl-6" data-testid={`leadership-entry-${i}`}>
                      <h4 className="font-serif text-xl">{l.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{l.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
