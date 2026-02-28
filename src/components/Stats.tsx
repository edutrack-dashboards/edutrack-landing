import { ClipboardCheck, GraduationCap, MessageSquare, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4 Portals",
    label: "Every Role Covered",
    description: "Dedicated dashboards for managers, teachers, parents, and students",
  },
  {
    icon: GraduationCap,
    value: "Grades",
    label: "Full Exam Lifecycle",
    description: "From exam creation to score entry to published report cards",
  },
  {
    icon: ClipboardCheck,
    value: "Attendance",
    label: "Daily Tracking",
    description: "Present, absent, late, and excused — visible across all portals",
  },
  {
    icon: MessageSquare,
    value: "Messaging",
    label: "Direct Communication",
    description: "Threaded conversations between teachers and parents with notifications",
  },
];

export default function Stats() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(13,148,136,0.34),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(245,158,11,0.25),transparent_35%)]" />
            <div className="noise-overlay" />

            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-200">About EduTrack</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Everything your school needs, connected in one platform.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
                  From class setup and student enrollment to daily attendance, exam grading, and parent
                  communication — EduTrack handles it all so nothing falls through the cracks.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <article key={stat.label} className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">{stat.label}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
