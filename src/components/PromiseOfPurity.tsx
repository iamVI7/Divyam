import { Leaf, Tags, FileText, Users, CookingPot, BadgeCheck, ImageIcon } from "lucide-react";
import Reveal from "./Reveal";
import TitleDivider from "./TitleDivider";

const items = [
  {
    icon: Leaf,
    title: "Vegetarian-only handling protocol",
    desc: "Followed at all times, across every kitchen.",
  },
  {
    icon: Tags,
    title: "Labelled counters and separate serving lines",
    desc: "So there is never any ambiguity for guests.",
  },
  {
    icon: FileText,
    title: "Advance documentation",
    desc: "Of Jain & Satvik requirements before every event.",
  },
  {
    icon: Users,
    title: "Trained service teams and chefs",
    desc: "Every team member is briefed on protocol.",
  },
  {
    icon: CookingPot,
    title: "Dedicated preparation areas and utensils",
    desc: "No cross-use, no exceptions.",
  },
  {
    icon: BadgeCheck,
    title: "FSSAI-licensed operations",
    desc: "With regular audits and documentation.",
  },
];

export default function PromiseOfPurity() {
  return (
    <section id="promise" className="bg-white">
      <div className="max-w-content mx-auto grid lg:grid-cols-2">
        <Reveal direction="right" className="px-6 lg:px-16 py-14 lg:py-16">
          <span className="eyebrow">The Promise of Purity</span>
          <h2 className="section-title text-3xl lg:text-4xl font-medium mt-3 mb-1">
            The Promise of Purity
          </h2>
          <TitleDivider align="left" />
          <p className="text-ink/65 leading-relaxed max-w-md mt-5 mb-7">
            For us, purity is not a statement. It is a discipline we follow in
            every kitchen, at every counter, for every celebration.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.05} className="flex gap-3">
                <Icon size={20} strokeWidth={1.5} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-navy leading-snug">{title}</p>
                  <p className="text-xs text-ink/55 mt-1 leading-snug">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" className="min-h-[320px] lg:min-h-full bg-border/60 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-ink/40">
            <ImageIcon size={56} strokeWidth={1.25} className="text-gold/70" />
            <span className="uppercase text-xs tracking-[0.2em]">Food Image (Placeholder)</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}