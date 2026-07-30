import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import TitleDivider from "./TitleDivider";

const celebrations = [
  {
    title: "Traditional Wedding",
    features: "Full Planning | Catering | Décor | Hospitality",
    guests: "600+ Guests",
    image: "/images/celebrations/c1.png",
  },
  {
    title: "Multi-day Celebration",
    features: "Planning | Catering | Production | Hospitality",
    guests: "1000+ Guests",
    image: "/images/celebrations/c4.png",
  },
  {
    title: "Jain Wedding",
    features: "Jain Catering | Décor | Hospitality",
    guests: "450+ Guests",
    image: "/images/celebrations/c3.png",
  },
  {
    title: "Reception Celebration",
    features: "Décor | Catering | Hospitality | Production",
    guests: "800+ Guests",
    image: "/images/celebrations/c2.png",
  },
];

export default function CelebrationsGallery() {
  return (
    <section id="celebrations" className="max-w-content mx-auto px-6 lg:px-10 py-14 lg:py-16">
      <Reveal className="text-center mb-10">
        <h2 className="section-title text-3xl lg:text-4xl font-medium">
          Real Celebrations in Prayagraj
        </h2>
        <TitleDivider />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">
        {celebrations.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="rounded-card overflow-hidden border border-border bg-white/60">
            <div className="relative h-28 lg:h-32 bg-border/60">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="px-5 py-4 text-center">
              <h3 className="font-heading text-base text-navy mb-1.5">{c.title}</h3>
              <p className="text-xs text-ink/55 leading-snug mb-1">{c.features}</p>
              <p className="text-xs text-gold font-medium">{c.guests}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center">
        <button className="inline-flex items-center gap-2 bg-navy text-white font-medium px-7 py-3.5 rounded-btn uppercase text-sm tracking-wide hover:bg-gold hover:text-navy transition-colors duration-200">
          View More Celebrations <ArrowRight size={16} />
        </button>
      </Reveal>
    </section>
  );
}