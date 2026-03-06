"use client";

import { useState } from "react";
import { GraduationCap, Globe, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.workflow, href: "#workflow" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.about, href: "#about" },
  ];

  const toggleLocale = () => {
    setLocale(locale === "en" ? "mn" : "en");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 transition-all duration-700 ease-out">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/70 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <a href="#" className="flex items-center gap-3">
            <div className="brand-gradient animate-sweep flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-teal-700/20">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">EduTrack</p>
              <p className="-mt-0.5 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                school cloud suite
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "MN" : "EN"}
            </button>
<a
              href="#services"
              className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              {t.nav.openPortals}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 px-3 pb-3 pt-2 md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-700"
              >
                <Globe className="h-4 w-4" />
                {locale === "en" ? "MN" : "EN"}
              </button>
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-lg bg-teal-700 px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                {t.nav.openPortals}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
