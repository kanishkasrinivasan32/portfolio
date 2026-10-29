import { Asterisk } from "lucide-react";
import { MARQUEE } from "@/data/content";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MARQUEE.map((t) => (
        <span key={t} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-serif text-xl italic text-navy/85 md:text-2xl">{t}</span>
          <Asterisk className="h-5 w-5 shrink-0 text-burnt" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      data-testid="marquee-band"
      className="group relative overflow-hidden border-y border-navy/15 bg-beige/35 py-5"
    >
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
