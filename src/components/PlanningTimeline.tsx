const steps = [
  {
    n: 1,
    title: "Private Consultation",
    desc: "We understand your family, vision, preferences, budget and priorities.",
  },
  {
    n: 2,
    title: "Requirement & Venue Understanding",
    desc: "We study the venue, logistics, guest flow and function requirements.",
  },
  {
    n: 3,
    title: "Celebration Design & Planning",
    desc: "We design the experience, menus, décor, hospitality and execution plan.",
  },
  {
    n: 4,
    title: "Production & Readiness",
    desc: "We prepare, coordinate and test everything for a smooth celebration.",
  },
  {
    n: 5,
    title: "Event-Day Command & Closure",
    desc: "Our team runs every detail with discipline and finishes with grace.",
  },
];

export default function PlanningTimeline() {
  return (
    <section className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="section-title text-3xl lg:text-4xl font-medium">
          How We Plan Weddings in Prayagraj
        </h2>
      </div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
        <div className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-px bg-border" />
        {steps.map((step) => (
          <div key={step.n} className="relative flex flex-col items-center text-center px-2">
            <span className="relative z-10 w-10 h-10 rounded-full bg-navy text-gold ring-2 ring-gold/70 flex items-center justify-center font-body font-bold text-base mb-5">
              {step.n}
            </span>
            <h3 className="font-medium text-navy text-sm mb-2 leading-snug">{step.title}</h3>
            <p className="text-xs text-ink/60 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}