"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Celebrations", href: "#celebrations" },
  { label: "The Promise of Purity", href: "#promise" },
  { label: "Venues", href: "#venues", hasDropdown: true },
  { label: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-50 bg-navy text-white">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="border border-gold/60 rounded-btn px-4 py-2 tracking-[0.2em] text-sm font-heading">
            DIVYAM
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white/85 hover:text-gold transition-colors duration-200"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} className="text-gold" />}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center border border-gold text-gold px-5 py-2.5 rounded-btn text-[13px] tracking-wide uppercase hover:bg-gold hover:text-navy transition-colors duration-200"
        >
          Request a Consultation
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm uppercase tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/85 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex justify-center border border-gold text-gold px-5 py-2.5 rounded-btn"
              >
                Request a Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
