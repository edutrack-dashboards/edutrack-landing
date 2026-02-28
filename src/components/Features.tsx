import {
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  RefreshCw,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Role-focused dashboards",
    description: "Managers, teachers, parents, and students each get a personalized home screen showing exactly what matters to them.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance in one click",
    description: "Teachers mark attendance once per class. Parents and students see updates immediately on their own portals.",
  },
  {
    icon: GraduationCap,
    title: "Complete grade management",
    description: "Create exams, enter scores, assign letter grades, and publish results — parents and students see them instantly.",
  },
  {
    icon: MessageSquare,
    title: "Built-in messaging",
    description: "Teachers and parents communicate directly through the platform with message threads and unread notifications.",
  },
  {
    icon: Shield,
    title: "Role-based access",
    description: "Each user only sees what they should. Teachers see their classes, parents see their children, students see their own data.",
  },
  {
    icon: RefreshCw,
    title: "Seamless data handoff",
    description: "No duplicate data entry. Managers set up classes once, and the data flows to teachers, parents, and students automatically.",
  },
  {
    icon: Users,
    title: "Multi-child support",
    description: "Parents with multiple children can switch between them and view grades, attendance, and schedules for each child.",
  },
  {
    icon: Smartphone,
    title: "Mobile-ready by default",
    description: "Every portal is fully responsive with dedicated mobile navigation, so users can check in from any device.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-100/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-800">
            Core Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for schools that value clarity, speed, and trust.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every detail in EduTrack is designed to reduce admin friction and improve decision quality.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                index % 2 === 0 ? "animate-rise" : "animate-rise-delay-1"
              }`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
