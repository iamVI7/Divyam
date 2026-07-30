"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqsLeft = [
  {
    q: "Does DIVYAM® provide complete wedding planning in Prayagraj?",
    a: "Yes. We handle planning, catering, hospitality, décor and production together, under one house, from the first conversation to the final farewell.",
  },
  {
    q: "Is all catering provided by DIVYAM® pure vegetarian?",
    a: "Yes, every kitchen and counter we run is strictly pure vegetarian, with dedicated preparation areas and handling protocols.",
  },
  {
    q: "Do you arrange Jain and Satvik wedding menus?",
    a: "Yes, we design Jain and Satvik menus without onion or garlic, prepared and served with the same care as our regular menus.",
  },
  {
    q: "Can you manage catering, hospitality and décor together?",
    a: "Yes, one accountable team coordinates catering, hospitality, décor and production so nothing falls between the cracks.",
  },
];

const faqsRight = [
  {
    q: "Do you handle multi-day weddings and multiple functions?",
    a: "Yes, we regularly plan multi-day celebrations with several functions, coordinating logistics, catering and hospitality across each one.",
  },
  {
    q: "How early should we begin planning our wedding?",
    a: "We recommend beginning 6–12 months in advance for larger celebrations, though we can also accommodate shorter timelines.",
  },
  {
    q: "Does DIVYAM® serve areas outside Prayagraj?",
    a: "Yes, alongside Prayagraj, we also serve Lucknow, Varanasi, Bhadohi and nearby regions.",
  },
  {
    q: "How do we get started with DIVYAM®?",
    a: "Simply request a private consultation through our form or WhatsApp, and our team will reach out to understand your celebration.",
  },
];

function AccordionColumn({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border border-border rounded-card bg-white/60 overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-navy">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-gold"
              >
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm text-ink/60 leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <Reveal className="text-center mb-14">
        <h2 className="section-title text-3xl lg:text-4xl font-medium">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-5">
        <Reveal direction="right">
          <AccordionColumn items={faqsLeft} />
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <AccordionColumn items={faqsRight} />
        </Reveal>
      </div>
    </section>
  );
}