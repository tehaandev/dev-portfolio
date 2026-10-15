"use client";

import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Critically damped spring (no overshoot) — content settles in, it doesn't bounce
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.8,
        delay: delay / 1000,
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
