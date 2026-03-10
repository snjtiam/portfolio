"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  hover?: boolean;
  hoverY?: number;
  hoverScale?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.55,
  hover = false,
  hoverY = 8,
  hoverScale = 1.012,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -hoverY, scale: hoverScale } : undefined}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 1.02, 0.73, 0.99] }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
