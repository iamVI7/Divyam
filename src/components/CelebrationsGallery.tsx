import { ImageIcon } from "lucide-react";
import Reveal from "./Reveal";

const celebrations = [
  {
    title: "Traditional Wedding",
    features: "Full Planning | Catering | Décor | Hospitality",
    guests: "600+ Guests",
  },
  {
    title: "Multi-day Celebration",
    features: "Planning | Catering | Production | Hospitality",
    guests: "1000+ Guests",
  },
  {
    title: "Jain Wedding",
    features: "Jain Catering | Décor | Hospitality",
    guests: "450+ Guests",
  },
  {
    title: "Reception Celebration",
    features: "Décor | Catering | Hospitality | Production",
    guests: "800+ Guests",
  },
];

export default function CelebrationsGallery() {
  return (
    <section id="celebrations" className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <Reveal className="text-center mb-14">
        <h2 className="section-title text-3xl lg:text-4xl font-medium">
          Real Celebrations in Prayagraj
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {celebrations.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="rounded-card overflow-hidden border border-border bg-white/60">
            <div className="h-40 bg-border/60 flex items-center justify-center">
              <ImageIcon size={32} strokeWidth={1.25} className="text-gold/70" />
            </div>
            <div className="px-5 py-5">
              <h3 className="font-heading text-lg text-navy mb-1.5">{c.title}</h3>
              <p className="text-xs text-ink/55 leading-relaxed mb-1.5">{c.features}</p>
              <p className="text-xs text-gold font-medium">{c.guests}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center">
        <button className="bg-gold text-navy font-medium px-7 py-3.5 rounded-btn uppercase text-sm tracking-wide hover:bg-navy hover:text-gold transition-colors duration-200">
          View More Celebrations
        </button>
      </Reveal>
    </section>
  );
}