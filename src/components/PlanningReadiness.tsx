import { KeyRound, Car, Truck, Zap, CloudRainWind, Hotel } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: KeyRound,
    title: "Private Access & Setup",
    desc: "Timely access, structured setup and smooth execution.",
  },
  {
    icon: Car,
    title: "Guest & Vehicle Management",
    desc: "Planned movement, parking guidance and guest comfort.",
  },
  {
    icon: Truck,
    title: "Catering Production & Transport",
    desc: "Hygienic production, safe transport and on-time service.",
  },
  {
    icon: Zap,
    title: "Power & Technical Readiness",
    desc: "Backup power, technical checks and on-ground readiness.",
  },
  {
    icon: CloudRainWind,
    title: "Weather Contingency",
    desc: "Monsoon and summer plans for uninterrupted celebrations.",
  },
  {
    icon: Hotel,
    title: "Outstation Guest Hospitality",
    desc: "Hotel coordination, airport / rail assistance and guest care.",
  },
];

export default function PlanningReadiness() {
  return (
    <section className="bg-navy/[0.03] border-y border-border">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <Reveal className="text-center mb-14">
          <h2 className="section-title text-3xl lg:text-4xl font-medium">
            Local Planning & Readiness in Prayagraj
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 items-start">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.06} className="flex flex-col gap-3">
              <Icon size={26} strokeWidth={1.25} className="text-gold" />
              <div>
                <h3 className="font-medium text-navy text-sm mb-1.5 leading-snug">{title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}