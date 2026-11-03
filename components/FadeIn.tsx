"use client";

import { useIntersectionObserver } from "@/lib/use-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// For below-the-fold content: hidden until hydrated, so never use above the
// fold (the hero uses the `rise` class directly, which paints without JS).
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const { ref, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px",
  });

  return (
    <div
      ref={ref}
      className={`${hasBeenVisible ? "rise" : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
