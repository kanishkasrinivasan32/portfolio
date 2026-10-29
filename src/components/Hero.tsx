import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Chip({ label, className, x, y }: { label: string; className: string; x: any; y: any }) {
  return (
    <motion.div className={`absolute hidden md:block ${className}`} style={{ x, y }}>
      <div className="flex items-center gap-2 border border-navy/15 bg-ivory/90 px-4 py-2 shadow-[0_10px_30px_-15px_rgba(16,38,55,0.4)]">
        <span className="h-1.5 w-1.5 rounded-full bg-burnt" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy/80">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // scroll parallax (values approximated from captured DOM state)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const artY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // cursor parallax: art drifts one way, chips the other
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const artX = useTransform(sx, (v) => v * 14);
  const artYm = useTransform(sy, (v) => v * 14);
  const chipX = useTransform(sx, (v) => v * -22);
  const chipY = useTransform(sy, (v) => v * -22);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const line = (i: number) => ({
    initial: { y: "110%" },
    animate: { y: 0 },
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE },
  });

  return (
    <section ref={ref} id="home" data-testid="hero-section" className="relative overflow-hidden pt-[72px]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1400px] items-center gap-10 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-0">
        <motion.div style={{ opacity: fade }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-burnt sm:text-[11px]"
          >
            <span className="h-px w-10 bg-burnt" aria-hidden="true" />
            Artificial Intelligence / Machine Learning / Data
          </motion.p>
          <h1 className="mt-6 font-serif text-[11vw] leading-[1.06] sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(0)}>
                Turning Data
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(1)}>
                into <em className="italic text-burnt">Meaningful</em>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" {...line(2)}>
                Solutions.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-navy/70"
          >
            I'm Kanishka — an AI &amp; ML enthusiast with a passion for building intelligent systems and user-driven
            solutions. I love exploring ideas, working with data, and turning complex problems into simple, impactful
            experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              data-testid="hero-cta-work"
              className="group inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-burnt"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              data-testid="hero-cta-about"
              className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-navy/40 after:transition-transform after:duration-300 hover:text-burnt hover:after:scale-x-50"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div className="relative" style={{ y: artY }}>
            <motion.div
              style={{ x: artX, y: artYm }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            >
              <img
                alt="Cinematic composition of layered document panels orbiting a navy sphere"
                data-testid="hero-art"
                fetchPriority="high"
                draggable={false}
                className="mx-auto w-full max-w-[420px] select-none mix-blend-multiply sm:max-w-[520px] lg:max-w-[620px]"
                src="/images/hero-art.jpg"
              />
            </motion.div>
            <Chip label="Ideas" className="top-[13%] right-[3%]" x={chipX} y={chipY} />
            <Chip label="Data" className="top-[46%] right-[-1%]" x={chipX} y={chipY} />
            <Chip label="Impact" className="bottom-[15%] right-[9%]" x={chipX} y={chipY} />
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-6 lg:left-10" style={{ opacity: fade }}>
        <a
          href="#about"
          data-testid="hero-scroll-indicator"
          className="flex items-center gap-3"
          aria-label="Scroll to about section"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-navy/25">
            <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy/60">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
