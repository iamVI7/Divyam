import { ShieldCheck, Users, BadgeCheck, Heart } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "The Promise of Purity",
    desc: "Pure vegetarian. Always. Everywhere.",
  },
  {
    icon: Users,
    title: "One House, One Responsibility",
    desc: "Planning, Catering, Hospitality, Décor & Execution.",
  },
  {
    icon: BadgeCheck,
    title: "FSSAI-Licensed Operations",
    desc: "Hygiene, safety and compliance you can trust.",
  },
  {
    icon: Heart,
    title: "Family Trust, Discreet Service",
    desc: "Privacy, respect and warmth at every step.",
  },
];

export default function PromiseBar() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-content mx-auto grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <Reveal
            key={title}
            delay={i * 0.08}
            duration={0.5}
            className="flex items-start gap-3.5 px-6 lg:px-7 py-6"
          >
            <Icon size={26} strokeWidth={1.5} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium leading-snug">{title}</p>
              <p className="text-xs text-white/60 mt-1 leading-snug">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}