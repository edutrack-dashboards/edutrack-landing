import {
  ArrowRight,
  BarChart3,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const portalPreview = [
  {
    icon: BarChart3,
    label: "Management",
    status: "Live",
    tone: "bg-cyan-50 text-cyan-700",
    motion: "animate-rise-delay-1",
  },
  {
    icon: BookOpen,
    label: "Teacher",
    status: "Live",
    tone: "bg-emerald-50 text-emerald-700",
    motion: "animate-rise-delay-2",
  },
  {
    icon: Users,
    label: "Parent",
    status: "Live",
    tone: "bg-amber-50 text-amber-700",
    motion: "animate-rise-delay-3",
  },
  {
    icon: GraduationCap,
    label: "Student",
    status: "Live",
    tone: "bg-slate-100 text-slate-700",
    motion: "animate-rise-delay-3",
  },
];

export default function Hero() {
  return (
    <section className="section-shell relative overflow-hidden pt-28 sm:pt-32">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-14 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28">
        <div className="space-y-7">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-800">
            <Sparkles className="h-4 w-4" />
            Now with all 4 portals live
          </div>

          <div className="space-y-5">
            <h1 className="animate-rise-delay-1 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Beautifully connected school operations, from office to family.
            </h1>
            <p className="animate-rise-delay-2 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              EduTrack brings administrators, teachers, parents, and students
              into one coordinated workflow so every attendance mark, grade
              update, and message moves instantly.
            </p>
          </div>

          <div className="animate-rise-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition-colors hover:bg-teal-800"
            >
              Explore live portals
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              See workflow
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
            {portalPreview.map((item) => (
              <div
                key={item.label}
                className={`glass-panel rounded-xl p-3.5 ${item.motion}`}
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

        <div className="relative">
          <div className="glass-panel animate-rise rounded-3xl p-6 shadow-xl shadow-slate-900/10 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Unified School Pulse
              </h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Live Sync
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <p className="text-sm font-semibold text-cyan-900">
                  Attendance updates
                </p>
                <p className="mt-1 text-sm text-cyan-800">
                  Teacher marks attendance once, Parent + Admin dashboards
                  update immediately.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">
                  Grade visibility
                </p>
                <p className="mt-1 text-sm text-emerald-800">
                  Published exams flow from teacher gradebook to student and
                  parent portals in real time.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Secure by default
                </p>
                <p className="mt-1 text-sm text-amber-800">
                  Role-based access keeps every record visible only to the right
                  audience.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <ShieldCheck className="h-4 w-4 text-teal-700" />
              Powered by Hacker House
            </div>
          </div>

          <div className="animate-drift pointer-events-none absolute -bottom-6 -right-4 rounded-2xl border border-white/90 bg-white/85 px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-600 shadow-md sm:-right-6">
            seamless role handoff
          </div>
        </div>
      </div>
    </section>
  );
}
