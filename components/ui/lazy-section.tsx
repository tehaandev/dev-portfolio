"use client";

import { useIntersectionObserver } from "@/lib/use-intersection-observer";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function LazySection({
  children,
  fallback,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
}: LazySectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  const defaultFallback = (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 bg-gray-200 rounded-md w-64 mx-auto mb-8 loading-skeleton"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-64 loading-skeleton"></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
}
