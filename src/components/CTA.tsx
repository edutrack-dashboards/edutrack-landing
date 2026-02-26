import { ArrowRight, GraduationCap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-8 py-16 shadow-2xl shadow-blue-500/20 sm:px-16 sm:py-24">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }} />
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your School?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Join the next generation of school management. Start with our live portals today and be
              first in line when the Parent portal launches.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
