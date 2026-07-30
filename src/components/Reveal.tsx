"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in seconds before this element starts revealing */
  delay?: number;
  /** vertical offset (px) the element travels while revealing */
  y?: number;
  /** direction of travel */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** animation duration in seconds */
  duration?: number;
  as?: "div" | "section";
};

const distance = 28;

function getOffset(direction: RevealProps["direction"], y?: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -(y ?? distance) };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    case "up":
    default:
      return { x: 0, y: y ?? distance };
  }
}

/**
 * Fades + slides content into view as the user scrolls, using a smooth,
 * fluid easing curve. Animates once, the first time the element enters
 * the viewport, and respects prefers-reduced-motion via Framer Motion's
 * viewport defaults.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y,
  direction = "up",
  duration = 0.7,
  as = "div",
}: RevealProps) {
  const offset = getOffset(direction, y);

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </Component>
  );
}