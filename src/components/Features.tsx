"use client";

import {
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  RefreshCw,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const featureIcons = [
  LayoutDashboard,
  ClipboardCheck,
  GraduationCap,
  MessageSquare,
  Shield,
  RefreshCw,
  Users,
  Smartphone,
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-100/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-800">
              {t.features.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.features.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t.features.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <ScrollReveal key={index} animation="scale-up" delay={index * 80}>
                <article
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
