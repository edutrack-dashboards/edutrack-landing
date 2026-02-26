import {
  BarChart3,
  BookOpen,
  Users,
  GraduationCap,
  ClipboardList,
  UserCheck,
  School,
  Calendar,
  MessageSquare,
  TrendingUp,
  Bell,
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: "blue" | "emerald" | "purple" | "amber";
  features: { icon: React.ElementType; text: string }[];
  status: "live" | "coming-soon";
  url?: string;
  index: number;
}

const colorMap = {
  blue: {
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    ring: "ring-blue-500/20",
    shadow: "shadow-blue-500/10",
    hoverShadow: "hover:shadow-blue-500/20",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    ring: "ring-emerald-500/20",
    shadow: "shadow-emerald-500/10",
    hoverShadow: "hover:shadow-emerald-500/20",
  },
  purple: {
    gradient: "from-purple-600 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    ring: "ring-purple-500/20",
    shadow: "shadow-purple-500/10",
    hoverShadow: "hover:shadow-purple-500/20",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    ring: "ring-amber-500/20",
    shadow: "shadow-amber-500/10",
    hoverShadow: "hover:shadow-amber-500/20",
  },
};

function ServiceCard({ title, subtitle, description, icon: Icon, color, features, status, url }: ServiceCardProps) {
  const c = colorMap[color];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.shadow} ${c.hoverShadow} ${
        status === "coming-soon" ? "border-slate-200" : c.border
      }`}
    >
      {/* Decorative gradient blob */}
      <div
        className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} opacity-[0.06] transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.10]`}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.iconText}`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              status === "live"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {status === "live" ? (
              <>
                <CheckCircle2 className="h-3 w-3" />
                Live
              </>
            ) : (
              <>
                <Clock className="h-3 w-3" />
                Coming Soon
              </>
            )}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
        <p className={`mt-0.5 text-sm font-medium ${c.iconText}`}>{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

        {/* Features list */}
        <ul className="mt-5 space-y-2.5">
          {features.map((f) => (
            <li key={f.text} className="flex items-center gap-3 text-sm text-slate-700">
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${c.iconBg} ${c.iconText}`}>
                <f.icon className="h-3.5 w-3.5" />
              </div>
              {f.text}
            </li>
          ))}
        </ul>

        {/* Action */}
        <div className="mt-6">
          {status === "live" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${c.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110`}
            >
              Open Dashboard
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-400">
              <Bell className="h-4 w-4" />
              Notify me when available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const services: Omit<ServiceCardProps, "index">[] = [
  {
    title: "EduTrack Management",
    subtitle: "For School Administrators",
    description:
      "A comprehensive dashboard to oversee your entire school. Manage classes, assign teachers, enroll students, and generate insightful reports — all in one place.",
    icon: BarChart3,
    color: "blue",
    status: "live",
    url: "https://edutrack-manager.vercel.app/",
    features: [
      { icon: School, text: "Class & section management" },
      { icon: UserCheck, text: "Teacher assignment & profiles" },
      { icon: Users, text: "Student enrollment & records" },
      { icon: TrendingUp, text: "School-wide analytics & reports" },
    ],
  },
  {
    title: "EduTrack Teacher",
    subtitle: "For Educators",
    description:
      "Everything a teacher needs to manage their classroom efficiently. Take attendance, enter grades, manage schedules, and communicate — from any device.",
    icon: BookOpen,
    color: "emerald",
    status: "live",
    url: "https://edutrack-teacher.vercel.app/login",
    features: [
      { icon: ClipboardList, text: "Attendance tracking per class" },
      { icon: FileText, text: "Grades, exams & report cards" },
      { icon: Calendar, text: "Class schedule management" },
      { icon: MessageSquare, text: "Messaging & announcements" },
    ],
  },
  {
    title: "EduTrack Parent",
    subtitle: "For Parents & Guardians",
    description:
      "Stay connected to your child's education. Monitor attendance, view grades, receive teacher updates, and communicate directly with the school.",
    icon: Users,
    color: "purple",
    status: "coming-soon",
    features: [
      { icon: TrendingUp, text: "Real-time progress tracking" },
      { icon: ClipboardList, text: "Attendance & absence alerts" },
      { icon: MessageSquare, text: "Direct teacher communication" },
      { icon: Bell, text: "Push notifications & updates" },
    ],
  },
  {
    title: "EduTrack Student",
    subtitle: "For Students",
    description:
      "A personal hub for every student. Access assignments, check grades, view your schedule, and stay organized throughout the school year.",
    icon: GraduationCap,
    color: "amber",
    status: "live",
    url: "https://edutrack-student.vercel.app/login",
    features: [
      { icon: FileText, text: "Assignments & homework tracker" },
      { icon: TrendingUp, text: "Grade history & GPA overview" },
      { icon: Calendar, text: "Personal class schedule" },
      { icon: BookOpen, text: "Learning resources & materials" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50/50 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Our Platform
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for Every Role in School
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Four specialized portals designed to serve the unique needs of administrators,
            teachers, parents, and students.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
