"use client";

import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState(0);
  // phase 0: logo appears
  // phase 1: text reveals
  // phase 2: counter runs
  // phase 3: slide away

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onComplete(), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase >= 3 ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,148,136,0.15),transparent_60%)]" />

      {/* Logo */}
      <div
        className={`relative mb-8 transition-all duration-700 ease-out ${
          phase >= 1 ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-amber-400 shadow-lg shadow-teal-500/25">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Text */}
      <div className="relative overflow-hidden">
        <h1
          className={`font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-all duration-700 ease-out ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          EduTrack
        </h1>
      </div>

      <div className="relative mt-2 overflow-hidden">
        <p
          className={`font-mono text-xs uppercase tracking-[0.3em] text-teal-300 transition-all duration-500 ease-out delay-200 ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          school cloud suite
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all ease-out ${
            phase >= 2
              ? "w-full duration-[1200ms]"
              : "w-0 duration-300"
          }`}
        />
      </div>

      {/* Subtle line decoration */}
      <div
        className={`absolute bottom-12 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-teal-500/50 to-transparent transition-all duration-700 ${
          phase >= 2 ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      />
    </div>
  );
}
