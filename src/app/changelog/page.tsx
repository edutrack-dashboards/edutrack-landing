"use client";

import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ChangelogEntry = {
  date: string;
  version: string;
  title: string;
  tag: string;
  changes: string[];
};

const tagColors: Record<string, string> = {
  launch: "bg-teal-100 text-teal-700",
  feature: "bg-blue-100 text-blue-700",
  improvement: "bg-amber-100 text-amber-700",
  fix: "bg-red-100 text-red-700",
};

export default function ChangelogPage() {
  const { t } = useI18n();
  const c = t.changelog;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
              {c.badge}
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {c.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {c.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-0 w-px bg-slate-200 sm:left-[23px]" />

            <div className="space-y-10">
              {c.entries.map((entry: ChangelogEntry, i: number) => (
                <div key={i} className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-teal-700 shadow-sm sm:h-12 sm:w-12">
                    <span className="text-xs font-bold text-white sm:text-sm">
                      {entry.version}
                    </span>
                  </div>

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-slate-500">
                        {entry.date}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[entry.tag] || tagColors.feature}`}
                      >
                        {entry.tag}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                      {entry.title}
                    </h3>
                    <ul className="space-y-2">
                      {entry.changes.map((change: string, j: number) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
