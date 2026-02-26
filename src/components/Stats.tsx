import { School, Users, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: School,
    value: "4",
    label: "Integrated Portals",
    description: "Admin, Teacher, Parent, Student",
  },
  {
    icon: Users,
    value: "100%",
    label: "Role Coverage",
    description: "Every stakeholder connected",
  },
  {
    icon: BookOpen,
    value: "Real-Time",
    label: "Data Sync",
    description: "Instant cross-portal updates",
  },
  {
    icon: Award,
    value: "A+",
    label: "Developer Experience",
    description: "Built with Next.js & Supabase",
  },
];

export default function Stats() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-24 sm:py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Complete Education Ecosystem
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-200/80">
            EduTrack brings together every stakeholder in education on a single, powerful platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">{stat.label}</p>
              <p className="mt-1 text-sm text-blue-300/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
