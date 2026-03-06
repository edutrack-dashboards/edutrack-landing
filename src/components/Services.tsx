"use client";

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageSquare,
  School,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: "teal" | "cyan" | "amber" | "slate";
  features: { icon: React.ElementType; text: string }[];
  url: string;
  index: number;
  openPortalLabel: string;
  liveLabel: string;
}

const colorMap = {
  teal: {
    border: "border-teal-200",
    iconWrap: "bg-teal-100 text-teal-700",
    chip: "bg-teal-100 text-teal-700",
    badge: "bg-teal-600",
    button: "bg-teal-700 hover:bg-teal-800",
  },
  cyan: {
    border: "border-cyan-200",
    iconWrap: "bg-cyan-100 text-cyan-700",
    chip: "bg-cyan-100 text-cyan-700",
    badge: "bg-cyan-600",
    button: "bg-cyan-700 hover:bg-cyan-800",
  },
  amber: {
    border: "border-amber-200",
    iconWrap: "bg-amber-100 text-amber-700",
    chip: "bg-amber-100 text-amber-700",
    badge: "bg-amber-600",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  slate: {
    border: "border-slate-300",
    iconWrap: "bg-slate-200 text-slate-700",
    chip: "bg-slate-200 text-slate-700",
    badge: "bg-slate-600",
    button: "bg-slate-700 hover:bg-slate-800",
  },
};

function ServiceCard({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  features,
  url,
  index,
  openPortalLabel,
  liveLabel,
}: ServiceCardProps) {
  const c = colorMap[color];

  return (
    <ScrollReveal
      animation={index % 2 === 0 ? "fade-right" : "fade-left"}
      delay={index * 100}
    >
      <article className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.border}`}>
        <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-slate-100/70" />
        <div className={`absolute left-0 top-0 h-1.5 w-full ${c.badge}`} />

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.iconWrap}`}>
              <Icon className="h-6 w-6" />
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {liveLabel}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600">{subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

          <ul className="mt-5 grid gap-2">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <div className={`flex h-7 w-7 items-center justify-center rounded-md ${c.chip}`}>
                  <feature.icon className="h-3.5 w-3.5" />
                </div>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors ${c.button}`}
          >
            {openPortalLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}

const featureIcons = {
  management: [School, UserCheck, Users, TrendingUp, ClipboardList, FileText],
  teacher: [ClipboardList, FileText, TrendingUp, Calendar, MessageSquare, Bell],
  parent: [TrendingUp, ClipboardList, Calendar, MessageSquare, Users, BookOpen],
  student: [FileText, TrendingUp, Calendar, ClipboardList, MessageSquare, BookOpen],
};

const serviceConfigs: { key: "management" | "teacher" | "parent" | "student"; icon: React.ElementType; color: "teal" | "cyan" | "amber" | "slate"; url: string }[] = [
  { key: "management", icon: BarChart3, color: "teal", url: "https://edutrack-manager.vercel.app/" },
  { key: "teacher", icon: BookOpen, color: "cyan", url: "https://edutrack-teacher.vercel.app/login" },
  { key: "parent", icon: Users, color: "amber", url: "https://edutrack-parent.vercel.app/login" },
  { key: "student", icon: GraduationCap, color: "slate", url: "https://edutrack-student.vercel.app/login" },
];

export default function Services() {
  const { t } = useI18n();

  const services = serviceConfigs.map((config) => {
    const svc = t.services[config.key];
    const icons = featureIcons[config.key];
    return {
      title: svc.title,
      subtitle: svc.subtitle,
      description: svc.description,
      icon: config.icon,
      color: config.color,
      url: config.url,
      features: svc.features.map((text, i) => ({ icon: icons[i], text })),
    };
  });

  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-teal-50/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-800">
              {t.services.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              openPortalLabel={t.services.openPortal}
              liveLabel={t.services.liveLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
