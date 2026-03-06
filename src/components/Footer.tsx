"use client";

import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    [t.footer.portals]: [
      { label: t.footer.managementPortal, href: "https://edutrack-manager.vercel.app/" },
      { label: t.footer.teacherPortal, href: "https://edutrack-teacher.vercel.app/login" },
      { label: t.footer.parentPortal, href: "https://edutrack-parent.vercel.app/login" },
      { label: t.footer.studentPortal, href: "https://edutrack-student.vercel.app/login" },
    ],
    [t.footer.product]: [
      { label: t.nav.services, href: "#services" },
      { label: t.nav.workflow, href: "#workflow" },
      { label: t.nav.features, href: "#features" },
      { label: t.nav.about, href: "#about" },
    ],
    [t.footer.legal]: [
      { label: t.footer.privacyPolicy, href: "#" },
      { label: t.footer.termsOfService, href: "#" },
      { label: t.footer.security, href: "#" },
      { label: t.footer.contact, href: "#" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-white/80 pb-10 pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <div className="brand-gradient flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-teal-900/20">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-extrabold tracking-tight text-slate-900">
                  EduTrack
                </p>
                <p className="-mt-0.5 text-xs font-mono uppercase tracking-wider text-slate-500">
                  {t.footer.subtitle}
                </p>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {t.footer.tagline}
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {category}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-teal-700"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="mt-2 text-sm text-slate-500 sm:mt-0">
            {t.footer.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
