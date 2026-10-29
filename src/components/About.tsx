import { ArrowRight, BookOpen, Lightbulb, Users } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";

const TRAITS = [
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Users, label: "Collaborative Thinker" },
  { icon: BookOpen, label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <Reveal>
            <Eyebrow>About Me</Eyebrow>
          </Reveal>
          <Reveal>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Hello, I'm Kanishka.</h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-navy/70">
              I have a background in Computer Science Engineering with a specialization in Artificial Intelligence and
              Machine Learning. I'm interested in building intelligent systems, working with data, and turning complex
              problems into useful solutions.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-navy/70">
              Curious to learn, build, and grow — one idea at a time.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {TRAITS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-navy/20">
                    <Icon className="h-[18px] w-[18px] text-navy/80" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <a
              href="#experience"
              data-testid="about-background-link"
              className="mt-10 inline-flex items-center gap-2 border-b border-navy/40 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-burnt hover:text-burnt"
            >
              Explore My Background <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -right-6 -top-8 h-44 w-44 rounded-full bg-burnt/25" aria-hidden="true" />
          <div className="absolute -left-5 -top-5 h-full w-full border border-navy/25" aria-hidden="true" />
          <div className="relative">
            <img
              alt="Portrait of Kanishka S."
              data-testid="about-portrait"
              loading="lazy"
              className="aspect-[4/5] w-full border border-navy/15 object-cover"
              src="/images/portrait.jpg"
            />
            <span className="absolute -bottom-5 left-6 rotate-[-3deg] border border-navy/15 bg-ivory px-4 py-2 font-serif text-lg italic shadow-[0_14px_30px_-18px_rgba(16,38,55,0.5)]">
              Build · Learn · Grow
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
