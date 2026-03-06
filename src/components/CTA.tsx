"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 px-7 py-14 shadow-2xl shadow-teal-900/20 sm:px-12 sm:py-16">
            <div className="noise-overlay" />
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <ScrollReveal animation="scale-up" delay={100}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-teal-100">
                  <Sparkles className="h-4 w-4" />
                  {t.cta.badge}
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {t.cta.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-100">
                  {t.cta.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={250}>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-teal-800 transition-colors hover:bg-teal-50"
                  >
                    {t.cta.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#workflow"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {t.cta.secondaryCta}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
