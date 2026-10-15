"use client";

import { MotionConfig, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function TransitionWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    // "user" honours prefers-reduced-motion: transforms are dropped, opacity fades stay
    <MotionConfig reducedMotion="user">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
