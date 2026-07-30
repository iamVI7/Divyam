"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] overflow-hidden bg-navy">
      <Image
        src="/images/hero.png"
        alt="Pure vegetarian luxury wedding in Prayagraj by DIVYAM"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark gradient overlay so the text stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

      <div className="relative max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center min-h-[560px] lg:min-h-[640px] px-6 lg:px-16 py-16"
        >
          <span className="eyebrow mb-4">Weddings in Prayagraj</span>
          <h1 className="font-heading text-white text-5xl lg:text-6xl leading-[1.08] font-medium mb-6 max-w-xl">
            Pure Vegetarian
            <br />
            Luxury Weddings
            <br />
            in <span className="text-gold">Prayagraj</span>
          </h1>
          <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-md mb-9">
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
      </div>
    </section>
  );
}