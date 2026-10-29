import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, RESUME } from "@/data/content";

const SECTION_FOR: Record<string, string> = { certifications: "experience" };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...NAV_LINKS.map((l) => l.id), "certifications"];
    const pick = () => {
      const line = window.innerHeight * 0.35;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(SECTION_FOR[current] ?? current);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-navy/10 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#home" data-testid="nav-logo" aria-label="Kanishka S — home" className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#102637" />
            <text x="15" y="22" fontFamily="'DM Serif Display', Georgia, serif" fontSize="17" fill="#F5F0E6" textAnchor="middle">
              K
            </text>
            <circle cx="23.5" cy="21" r="2.6" fill="#C87948" />
          </svg>
          <span className="font-serif text-xl tracking-wide">Kanishka S</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={`nav-link-${l.id}`}
              className={`relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                active === l.id ? "text-burnt" : "text-navy/70 hover:text-navy"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span
                  className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-burnt"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={RESUME.href}
            download={RESUME.filename}
            data-testid="nav-resume-button"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ivory transition-colors duration-300 hover:bg-burnt sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
          <button
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-ivory lg:hidden" data-testid="nav-mobile-menu">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-navy/10 py-4 font-mono text-[12px] uppercase tracking-[0.18em] ${
                  active === l.id ? "text-burnt" : "text-navy/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={RESUME.href}
              download={RESUME.filename}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ivory"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
