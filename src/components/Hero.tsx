"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-0"
      >
        <span className="eyebrow mb-4">Weddings in Prayagraj</span>
        <h1 className="section-title text-5xl lg:text-6xl leading-[1.08] font-medium mb-6">
          Pure Vegetarian
          <br />
          Luxury Weddings
          <br />
          in <span className="text-gold">Prayagraj</span>
        </h1>
        <p className="text-ink/70 text-base lg:text-lg leading-relaxed max-w-md mb-9">
          DIVYAM® brings complete wedding planning, pure vegetarian luxury
          catering, gracious guest hospitality, refined décor and disciplined
          event execution together under one trusted house.
        </p>
        <a
          href="#contact"
          className="inline-flex w-fit items-center bg-gold text-navy font-medium px-7 py-3.5 rounded-btn uppercase text-sm tracking-wide hover:bg-navy hover:text-gold transition-colors duration-200"
        >
          Request a Private Consultation
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative min-h-[320px] lg:min-h-[560px] bg-border/60 flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-3 text-ink/40">
          <ImageIcon size={56} strokeWidth={1.25} className="text-gold/70" />
          <span className="uppercase text-xs tracking-[0.2em]">
            Hero Image (Placeholder)
          </span>
        </div>
      </motion.div>
    </section>
  );
}
