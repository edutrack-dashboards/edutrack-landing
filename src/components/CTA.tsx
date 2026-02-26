import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 px-7 py-14 shadow-2xl shadow-teal-900/20 sm:px-12 sm:py-16">
          <div className="noise-overlay" />
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-teal-100">
              <Sparkles className="h-4 w-4" />
              Production-ready portals
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Launch EduTrack across your school this week.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-100">
              All four role portals are live and connected. Start with the portal your team needs most,
              then expand to full-school rollout.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-teal-800 transition-colors hover:bg-teal-50"
              >
                Open all portal links
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Review implementation flow
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
