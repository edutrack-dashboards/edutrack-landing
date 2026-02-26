import {
  Shield,
  Smartphone,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  LayoutDashboard,
  CloudUpload,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "Every role gets a personalized dashboard with the data and actions that matter most to them.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Access EduTrack from any device — desktop, tablet, or phone. Works seamlessly everywhere.",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description:
      "Attendance, grades, and messages sync instantly. No waiting, no refreshing required.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Secure, role-specific access ensures everyone sees only what they need — nothing more.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Built on Supabase with row-level security, encrypted data, and secure authentication.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Sync",
    description:
      "Data flows between all portals. A teacher marks attendance — parents see it instantly.",
  },
  {
    icon: Globe,
    title: "Multi-School Ready",
    description:
      "Designed to scale from a single school to an entire district with multi-tenant support.",
  },
  {
    icon: CloudUpload,
    title: "Cloud Native",
    description:
      "No installations needed. Always up to date, always backed up, always available.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            Why EduTrack
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Purpose-built for modern schools with the features that actually matter.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
