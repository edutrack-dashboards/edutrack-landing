import {
  CloudUpload,
  Globe,
  LayoutDashboard,
  Lock,
  RefreshCw,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Role-focused dashboards",
    description: "Each user lands on a workspace tuned to their priorities and decisions.",
  },
  {
    icon: Zap,
    title: "Real-time publication",
    description: "Attendance, grades, and messages appear across relevant portals instantly.",
  },
  {
    icon: Smartphone,
    title: "Mobile-ready by default",
    description: "Every screen is optimized for desktop, tablet, and mobile from day one.",
  },
  {
    icon: Shield,
    title: "Scoped access controls",
    description: "Permissions are enforced by role so users only see what they should.",
  },
  {
    icon: Lock,
    title: "Secure architecture",
    description: "Built on Supabase auth and row-level security for defense-in-depth data access.",
  },
  {
    icon: RefreshCw,
    title: "Seamless data handoff",
    description: "No duplicate data entry between teams, classrooms, and families.",
  },
  {
    icon: Globe,
    title: "Scales across campuses",
    description: "The structure supports growth from a single school to larger organizations.",
  },
  {
    icon: CloudUpload,
    title: "Cloud-native delivery",
    description: "Always current, easy to deploy, and available anywhere with no installs.",
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
