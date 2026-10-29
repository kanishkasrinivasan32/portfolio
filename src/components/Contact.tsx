import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/content";
import Reveal, { Eyebrow } from "./Reveal";

const ICONS = { mail: Mail, phone: Phone, linkedin: Linkedin, github: Github };

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden bg-navy text-ivory">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 pb-16 pt-24 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <Reveal>
            <Eyebrow>Get in Touch</Eyebrow>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Let's Build
              <br />
              Something <em className="italic text-burnt">Meaningful</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/65">
              Open to conversations about technology, collaboration, and interesting ideas.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-10 max-w-lg">
              {CONTACT.map((c) => {
                const Icon = ICONS[c.icon];
                return (
                  <a
                    key={c.id}
                    href={c.href}
                    data-testid={`contact-${c.id}`}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 border-b border-ivory/15 py-4 transition-colors duration-300 hover:border-burnt"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ivory/25 transition-colors duration-300 group-hover:border-burnt group-hover:bg-burnt/10">
                      <Icon className="h-4 w-4 text-ivory/85" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-ivory/45">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm text-ivory/90 md:text-[15px]">{c.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ivory/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-burnt" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
        <Reveal>
          <img
            alt="Cinematic dark artwork with layered panels and a navy sphere"
            loading="lazy"
            data-testid="contact-art"
            className="w-full border border-ivory/20"
            src="/images/contact-art.jpg"
          />
        </Reveal>
      </div>

      <footer className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row lg:px-10">
          <a href="#home" className="whitespace-nowrap font-serif text-xl" data-testid="footer-logo">
            Kanishka S
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/55 transition-colors hover:text-burnt"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-burnt">Build · Learn · Grow</p>
          <p className="font-mono text-[10px] text-ivory/40">© 2026 Kanishka S. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
