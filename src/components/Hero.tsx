"use client";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface HeroProps {
  loaded?: boolean;
}

export default function Hero({ loaded = false }: HeroProps) {
  const { t } = useI18n();

  const portalPreview = [
    {
      icon: BarChart3,
      label: t.hero.portalManagement,
      status: t.hero.live,
      tone: "bg-cyan-50 text-cyan-700",
    },
    {
      icon: BookOpen,
      label: t.hero.portalTeacher,
      status: t.hero.live,
      tone: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Users,
      label: t.hero.portalParent,
      status: t.hero.live,
      tone: "bg-amber-50 text-amber-700",
    },
    {
      icon: GraduationCap,
      label: t.hero.portalStudent,
      status: t.hero.live,
      tone: "bg-slate-100 text-slate-700",
    },
  ];

  const base = "transition-all ease-out";
  const hidden = "translate-y-8 opacity-0";
  const shown = "translate-y-0 opacity-100";
  const s = (delayMs: number) =>
    `${base} ${loaded ? shown : hidden}` +
    ` duration-700` +
    (delayMs ? ` delay-[${delayMs}ms]` : "");

  return (
    <section className="section-shell relative overflow-hidden pt-28 sm:pt-32">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-14 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28">
        <div className="space-y-7">
          {/* Badge */}
          <div className={`hero-reveal hero-reveal-1 ${loaded ? "revealed" : ""}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-800">
              <Sparkles className="h-4 w-4" />
              {t.hero.badge}
            </div>
          </div>

          {/* Title — word by word */}
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.hero.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={`hero-word ${loaded ? "revealed" : ""}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className={`hero-reveal hero-reveal-3 ${loaded ? "revealed" : ""} max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl`}>
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className={`hero-reveal hero-reveal-4 ${loaded ? "revealed" : ""} flex flex-col gap-3 sm:flex-row sm:items-center`}>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition-colors hover:bg-teal-800"
            >
              {t.hero.exploreCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {t.hero.workflowCta}
            </a>
          </div>

          {/* Portal cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
            {portalPreview.map((item, i) => (
              <div
                key={item.label}
                className={`hero-reveal ${loaded ? "revealed" : ""} glass-panel rounded-xl p-3.5`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div
                  className={`mb-2 inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold ${item.tone}`}
                >
                  <item.icon className="mr-1 h-3.5 w-3.5" />
                  {item.label}
                </div>
                <p className="text-xs font-mono uppercase tracking-wide text-emerald-700">
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="relative">
          <div className={`hero-reveal hero-reveal-panel ${loaded ? "revealed" : ""} glass-panel rounded-3xl p-6 shadow-xl shadow-slate-900/10 sm:p-8`}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                {t.hero.pulseTitle}
              </h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {t.hero.liveSync}
              </span>
            </div>

            <div className="space-y-4">
              {[
                { border: "border-cyan-200", bg: "bg-cyan-50", title: t.hero.attendanceTitle, titleColor: "text-cyan-900", desc: t.hero.attendanceDesc, descColor: "text-cyan-800" },
                { border: "border-emerald-200", bg: "bg-emerald-50", title: t.hero.gradeTitle, titleColor: "text-emerald-900", desc: t.hero.gradeDesc, descColor: "text-emerald-800" },
                { border: "border-amber-200", bg: "bg-amber-50", title: t.hero.secureTitle, titleColor: "text-amber-900", desc: t.hero.secureDesc, descColor: "text-amber-800" },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`hero-reveal ${loaded ? "revealed" : ""} rounded-2xl border ${card.border} ${card.bg} p-4`}
                  style={{ transitionDelay: `${500 + i * 150}ms` }}
                >
                  <p className={`text-sm font-semibold ${card.titleColor}`}>{card.title}</p>
                  <p className={`mt-1 text-sm ${card.descColor}`}>{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <ShieldCheck className="h-4 w-4 text-teal-700" />
              {t.hero.poweredBy}
            </div>
          </div>

          <div className={`hero-reveal ${loaded ? "revealed" : ""} pointer-events-none absolute -bottom-6 -right-4 rounded-2xl border border-white/90 bg-white/85 px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-600 shadow-md sm:-right-6 animate-drift`} style={{ transitionDelay: "900ms" }}>
            {t.hero.roleHandoff}
          </div>
        </div>
      </div>
    </section>
  );
}
