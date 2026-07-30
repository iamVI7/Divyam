"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import TitleDivider from "./TitleDivider";

const testimonials = [
  {
    quote:
      "From planning to execution, everything was handled with so much grace and discipline. The food, décor and hospitality were beyond our expectations.",
    author: "A Family from Prayagraj",
    rating: 5,
  },
  {
    quote:
      "DIVYAM® truly understands what a family needs for a wedding. Beautiful pure vegetarian setup and a team that is always one step ahead.",
    author: "A Family from Prayagraj",
    rating: 4,
  },
  {
    quote:
      "Our outstation guests were very well taken care of. The team managed everything so smoothly that we could actually enjoy our own functions.",
    author: "A Family from Prayagraj",
    rating: 5,
  },
];

const slideVariants = {
  enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 24, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: 1 | -1) => ({ opacity: 0, x: -dir * 24, scale: 0.98 }),
};

const slideTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % testimonials.length]);

  return (
    <section className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <Reveal className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-4xl font-medium">What Families Say</h2>
          <TitleDivider light />
        </Reveal>

        {/* Desktop: sliding 3-up carousel */}
        <div className="hidden lg:flex items-center gap-5">
          <NavButton direction="prev" onClick={() => go(-1)} />

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="grid grid-cols-3 gap-6"
              >
                {visible.map((t, i) => (
                  <TestimonialCard key={t.author + i} quote={t.quote} author={t.author} rating={t.rating} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <NavButton direction="next" onClick={() => go(1)} />
        </div>

        {/* Mobile: single-card carousel */}
        <div className="lg:hidden flex items-center gap-4">
          <NavButton direction="prev" onClick={() => go(-1)} />

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              >
                <TestimonialCard
                  quote={testimonials[index].quote}
                  author={testimonials[index].author}
                  rating={testimonials[index].rating}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <NavButton direction="next" onClick={() => go(1)} />
        </div>

        <Reveal className="flex justify-center mt-9">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-gold text-gold font-medium px-6 py-3 rounded-btn uppercase text-xs tracking-wide hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            View More Reviews on Google <ArrowRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function NavButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
    >
      {direction === "prev" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}

function TestimonialCard({
  quote,
  author,
  rating,
}: {
  quote: string;
  author: string;
  rating: number;
}) {
  return (
    <div className="border border-white/10 rounded-card px-6 py-5 h-full">
      <div className="flex items-center justify-between mb-3">
        <Quote size={22} strokeWidth={1.25} className="text-gold" />
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < rating ? "text-gold fill-gold" : "text-white/20"}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-white/80 leading-relaxed mb-4">{quote}</p>
      <p className="text-xs text-gold uppercase tracking-wide">— {author}</p>
    </div>
  );
}