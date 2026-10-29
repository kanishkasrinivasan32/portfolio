import { useState } from "react";
import { Plus } from "lucide-react";
import { PROJECTS, type Project } from "@/data/content";
import CaseStudyModal from "./CaseStudyModal";
import Reveal, { Eyebrow } from "./Reveal";

function Card({ p, onSelect }: { p: Project; onSelect: (p: Project) => void }) {
  return (
    <article
      data-testid={`project-card-${p.id}`}
      className="group flex h-full flex-col overflow-hidden border border-navy/15 bg-[#FBF7EE] transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgba(16,38,55,0.45)]"
    >
      <div
        className="relative aspect-[3/2] cursor-pointer overflow-hidden border-b border-navy/15"
        onClick={() => onSelect(p)}
      >
        <img
          alt={p.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
          src={p.image}
        />
        <span className="absolute left-4 top-4 border border-navy/15 bg-ivory/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-navy">
          {p.n}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-burnt">{p.category}</p>
        <h3
          onClick={() => onSelect(p)}
          className="mt-3 cursor-pointer font-serif text-2xl leading-snug transition-colors hover:text-burnt"
        >
          {p.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{p.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-navy/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy/60"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          aria-haspopup="dialog"
          data-testid={`project-toggle-${p.id}`}
          onClick={() => onSelect(p)}
          className="mt-7 inline-flex items-center gap-2 self-start border-b border-navy/40 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-burnt hover:text-burnt"
        >
          View Project
          <Plus className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" data-testid="projects-section" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>My Projects</Eyebrow>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Ideas into <em className="italic text-burnt">Real-World</em> Impact
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-navy/60">
              Four projects exploring retrieval, vision, security and learning — each with a detailed case study.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} className="h-full" delay={(i % 2) * 0.1}>
              <Card p={p} onSelect={setSelectedProject} />
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
}
