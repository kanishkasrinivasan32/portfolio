import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/content";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export default function CaseStudyModal({ project, onClose, onSelectProject }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        const idx = PROJECTS.findIndex((p) => p.id === project.id);
        if (idx !== -1 && idx < PROJECTS.length - 1) onSelectProject(PROJECTS[idx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const idx = PROJECTS.findIndex((p) => p.id === project.id);
        if (idx > 0) onSelectProject(PROJECTS[idx - 1]);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose, onSelectProject]);

  return (
    <AnimatePresence>
      {project && (
        <div
          data-testid="case-study-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="custom-dark-scrollbar relative z-10 max-h-[90vh] w-full max-w-[1240px] overflow-y-auto border border-ivory/15 bg-navy text-ivory shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)]"
          >
            {/* Close Button at top-right inside dark container */}
            <button
              onClick={onClose}
              data-testid="case-study-close-btn"
              aria-label="Close case study"
              className="absolute right-5 top-5 z-20 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-ivory/20 text-ivory/70 transition-colors duration-200 hover:border-ivory/60 hover:text-ivory"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 items-start gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-[11px]">
                  — CASE STUDY — {project.caseStudy.caseNumber}
                </p>

                {/* Title */}
                <h3
                  id="case-study-title"
                  className="mt-4 font-serif text-2xl leading-snug text-ivory sm:text-3xl lg:text-[2.2rem]"
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-ivory/70 sm:text-[15px]">
                  {project.summary}
                </p>

                {/* Objective */}
                <div className="mt-7">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-[11px]">
                    Objective
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ivory/80 sm:text-sm">
                    {project.caseStudy.objective}
                  </p>
                </div>

                {/* Approach */}
                <div className="mt-7">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-[11px]">
                    Approach
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ivory/80 sm:text-sm">
                    {project.caseStudy.approach}
                  </p>
                </div>

                {/* Key Contributions */}
                <div className="mt-7">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-[11px]">
                    Key Contributions
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.caseStudy.contributions.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-xs leading-relaxed text-ivory/80 sm:text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burnt" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Image + Technologies */}
              <div className="lg:col-span-5">
                {/* Artwork Frame on Warm Matte */}
                <div className="border border-ivory/15 bg-[#F5F0E6] p-3 shadow-md sm:p-4">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Technologies */}
                <div className="mt-7">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-[11px]">
                    Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.caseStudy.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ivory/20 bg-navy/40 px-3.5 py-1 font-mono text-[11px] text-ivory/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footnote */}
                <p className="mt-7 font-sans text-xs italic leading-relaxed text-ivory/50">
                  {project.caseStudy.note}
                </p>

                {/* Quick Navigation Between Case Studies */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ivory/15 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/50">
                    Case Studies
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        const idx = PROJECTS.findIndex((p) => p.id === project.id);
                        if (idx > 0) onSelectProject(PROJECTS[idx - 1]);
                      }}
                      disabled={PROJECTS.findIndex((p) => p.id === project.id) === 0}
                      aria-label="Previous case study"
                      className="grid h-7 w-7 place-items-center rounded border border-ivory/20 text-ivory/70 transition-colors hover:border-ivory/40 hover:text-ivory disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    {PROJECTS.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => onSelectProject(p)}
                        className={`rounded px-2.5 py-1 font-mono text-[10px] tracking-wider transition-colors ${
                          p.id === project.id
                            ? "bg-burnt font-bold text-ivory"
                            : "border border-ivory/20 text-ivory/70 hover:border-ivory/40 hover:text-ivory"
                        }`}
                        aria-label={`View Case Study ${idx + 1}`}
                      >
                        {p.n}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        const idx = PROJECTS.findIndex((p) => p.id === project.id);
                        if (idx !== -1 && idx < PROJECTS.length - 1) onSelectProject(PROJECTS[idx + 1]);
                      }}
                      disabled={PROJECTS.findIndex((p) => p.id === project.id) === PROJECTS.length - 1}
                      aria-label="Next case study"
                      className="grid h-7 w-7 place-items-center rounded border border-ivory/20 text-ivory/70 transition-colors hover:border-ivory/40 hover:text-ivory disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
