"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import TitleDivider from "./TitleDivider";

const testimonials = [
  {
    quote:
      "From planning to execution, everything was handled with so much grace and discipline. The food, décor and hospitality were beyond our expectations.",
    author: "A Family from Prayagraj",
  },
  {
    quote:
      "DIVYAM® truly understands what a family needs for a wedding. Beautiful pure vegetarian setup and a team that is always one step ahead.",
    author: "A Family from Prayagraj",
  },
  {
    quote:
      "Our outstation guests were very well taken care of. The team managed everything so smoothly that we could actually enjoy our own functions.",
    author: "A Family from Prayagraj",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <Reveal className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-4xl font-medium">What Families Say</h2>
          <TitleDivider light />
        </Reveal>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + t.quote} delay={i * 0.08}>
              <TestimonialCard quote={t.quote} author={t.author} />
            </Reveal>
          ))}
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard quote={testimonials[index].quote} author={testimonials[index].author} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="border border-white/10 rounded-card px-7 py-8 h-full">
      <Quote size={28} strokeWidth={1.25} className="text-gold mb-5" />
      <p className="text-sm text-white/80 leading-relaxed mb-6">{quote}</p>
      <p className="text-xs text-gold uppercase tracking-wide">— {author}</p>
    </div>
  );
}