"use client";

import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  className?: string; // Additional classes for styling
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000, // Convert milliseconds to seconds
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

