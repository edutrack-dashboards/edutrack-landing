"use client";

import { BarChart3, BookOpen, GraduationCap, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const stepStyles = [
  { icon: BarChart3, color: "bg-teal-600", panel: "border-teal-200 bg-teal-50/70" },
  { icon: BookOpen, color: "bg-cyan-600", panel: "border-cyan-200 bg-cyan-50/70" },
  { icon: Users, color: "bg-amber-500", panel: "border-amber-200 bg-amber-50/70" },
  { icon: GraduationCap, color: "bg-slate-700", panel: "border-slate-300 bg-slate-100" },
];

export default function Workflow() {
  const { t } = useI18n();

  const steps = stepStyles.map((style, i) => ({
    ...style,
    title: t.workflow.steps[i].title,
    description: t.workflow.steps[i].description,
  }));

  return (
    <section id="workflow" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
              {t.workflow.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.workflow.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t.workflow.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-slate-300" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                  <article className="relative">
                    <div className={`absolute left-1/2 top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full ${step.color}`} />
                    <div className={`mt-14 rounded-2xl border p-5 ${step.panel}`}>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-500">{t.workflow.step} {index + 1}</p>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:hidden">
            {steps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <article className={`rounded-2xl border p-5 ${step.panel}`}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-500">{t.workflow.step} {index + 1}</p>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
