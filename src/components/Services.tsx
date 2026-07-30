import { Tent, UtensilsCrossed, Leaf, ConciergeBell, Flower2, Lightbulb } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Complete Wedding Planning",
    desc: "From first conversation to final farewell — we plan your celebration end to end.",
  },
  {
    icon: UtensilsCrossed,
    title: "Pure Vegetarian Luxury Catering",
    desc: "Multi-cuisine menus, prepared with purity, presented with refinement.",
  },
  {
    icon: Leaf,
    title: "Jain & Satvik Catering",
    desc: "Jain, Satvik, no onion, no garlic and other special requirements handled with care.",
  },
  {
    icon: ConciergeBell,
    title: "Guest Hospitality",
    desc: "Comfort and attentive care for your guests, near and far.",
  },
  {
    icon: Flower2,
    title: "Décor & Styling",
    desc: "Elegant themes, sacred aesthetics and beautifully designed spaces.",
  },
  {
    icon: Lightbulb,
    title: "Event Production & Infrastructure",
    desc: "Tentage, lighting, furniture, AV, logistics and on-ground execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div className="text-center mb-14">
        <span className="eyebrow">What We Do</span>
        <h2 className="section-title text-3xl lg:text-4xl font-medium mt-3">
          A Complete Wedding House in Prayagraj
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 items-stretch">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group flex flex-col items-center text-center h-full border border-border rounded-card bg-white/60 px-5 py-7 hover:border-gold/60 hover:shadow-[0_8px_28px_-14px_rgba(197,157,95,0.5)] transition-all duration-300"
          >
            <Icon size={30} strokeWidth={1.25} className="text-gold mb-4" />
            <h3 className="font-heading text-lg text-navy mb-2 leading-snug">{title}</h3>
            <p className="text-xs text-ink/65 leading-relaxed mb-4">{desc}</p>
            <a
              href="#contact"
              className="mt-auto inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-navy font-medium group-hover:text-gold transition-colors"
            >
              Explore <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}