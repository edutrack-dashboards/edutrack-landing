"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;
    if (duration !== 600) el.style.transitionDuration = `${duration}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("scroll-revealed");
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, threshold, once]);

  return (
    <div ref={ref} className={`scroll-reveal scroll-${animation} ${className}`}>
      {children}
    </div>
  );
}
