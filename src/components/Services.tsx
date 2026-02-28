import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageSquare,
  School,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: "teal" | "cyan" | "amber" | "slate";
  features: { icon: React.ElementType; text: string }[];
  url: string;
  index: number;
}

const colorMap = {
  teal: {
    border: "border-teal-200",
    iconWrap: "bg-teal-100 text-teal-700",
    chip: "bg-teal-100 text-teal-700",
    badge: "bg-teal-600",
    button: "bg-teal-700 hover:bg-teal-800",
  },
  cyan: {
    border: "border-cyan-200",
    iconWrap: "bg-cyan-100 text-cyan-700",
    chip: "bg-cyan-100 text-cyan-700",
    badge: "bg-cyan-600",
    button: "bg-cyan-700 hover:bg-cyan-800",
  },
  amber: {
    border: "border-amber-200",
    iconWrap: "bg-amber-100 text-amber-700",
    chip: "bg-amber-100 text-amber-700",
    badge: "bg-amber-600",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  slate: {
    border: "border-slate-300",
    iconWrap: "bg-slate-200 text-slate-700",
    chip: "bg-slate-200 text-slate-700",
    badge: "bg-slate-600",
    button: "bg-slate-700 hover:bg-slate-800",
  },
};

const motionClasses = ["animate-rise", "animate-rise-delay-1", "animate-rise-delay-2", "animate-rise-delay-3"];

function ServiceCard({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  features,
  url,
  index,
}: ServiceCardProps) {
  const c = colorMap[color];

  return (
    <article className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.border} ${motionClasses[index % motionClasses.length]}`}>
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-slate-100/70" />
      <div className={`absolute left-0 top-0 h-1.5 w-full ${c.badge}`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.iconWrap}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            live
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-600">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

        <ul className="mt-5 grid gap-2">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              <div className={`flex h-7 w-7 items-center justify-center rounded-md ${c.chip}`}>
                <feature.icon className="h-3.5 w-3.5" />
              </div>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors ${c.button}`}
        >
          Open portal
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

const services: Omit<ServiceCardProps, "index">[] = [
  {
    title: "EduTrack Management",
    subtitle: "For School Administrators",
    description:
      "The central command center for running your school. Create classes, onboard teachers, enroll students, and monitor performance across every department.",
    icon: BarChart3,
    color: "teal",
    url: "https://edutrack-manager.vercel.app/",
    features: [
      { icon: School, text: "Create and organize classes with grade, subject, and room assignments" },
      { icon: UserCheck, text: "Add teachers and assign them to classes" },
      { icon: Users, text: "Manage student enrollment and class rosters" },
      { icon: TrendingUp, text: "School-wide reports on attendance, grades, and at-risk students" },
      { icon: ClipboardList, text: "View teacher performance and workload distribution" },
      { icon: FileText, text: "Track student records, parent contacts, and enrollment history" },
    ],
  },
  {
    title: "EduTrack Teacher",
    subtitle: "For Educators",
    description:
      "Everything a teacher needs to manage their classroom. Take attendance, create exams, publish grades, manage schedules, and communicate with parents — all in one place.",
    icon: BookOpen,
    color: "cyan",
    url: "https://edutrack-teacher.vercel.app/login",
    features: [
      { icon: ClipboardList, text: "Mark daily attendance for each class with present, absent, late, and excused statuses" },
      { icon: FileText, text: "Create quizzes, tests, midterms, and finals with score and letter grade tracking" },
      { icon: TrendingUp, text: "Publish grades that instantly appear on parent and student portals" },
      { icon: Calendar, text: "Manage daily and weekly class schedules" },
      { icon: MessageSquare, text: "Send and receive messages with parents about student progress" },
      { icon: Bell, text: "Add private notes on individual students for record-keeping" },
    ],
  },
  {
    title: "EduTrack Parent",
    subtitle: "For Parents and Guardians",
    description:
      "Stay connected to your child's education. View grades, monitor attendance, check class schedules, and message teachers directly without waiting for report cards.",
    icon: Users,
    color: "amber",
    url: "https://edutrack-parent.vercel.app/login",
    features: [
      { icon: TrendingUp, text: "View grades and exam results for all your children in one dashboard" },
      { icon: ClipboardList, text: "Track attendance records with daily status and absence history" },
      { icon: Calendar, text: "See your child's full class schedule with times and rooms" },
      { icon: MessageSquare, text: "Message teachers directly with unread notification badges" },
      { icon: Users, text: "Switch between multiple children from a single parent account" },
      { icon: BookOpen, text: "Monitor subject-by-subject performance and class averages" },
    ],
  },
  {
    title: "EduTrack Student",
    subtitle: "For Students",
    description:
      "A personal academic hub for students. Check your schedule, track your grades, view attendance records, and stay on top of your classes and assignments.",
    icon: GraduationCap,
    color: "slate",
    url: "https://edutrack-student.vercel.app/login",
    features: [
      { icon: FileText, text: "View all exam scores, letter grades, and class averages" },
      { icon: TrendingUp, text: "Track academic performance trends across subjects" },
      { icon: Calendar, text: "Access your personal class schedule with daily and weekly views" },
      { icon: ClipboardList, text: "Check your own attendance record and status history" },
      { icon: MessageSquare, text: "Read messages and announcements from teachers" },
      { icon: BookOpen, text: "See enrolled classes with teacher info and room details" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-teal-50/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-800">
            Live Platform Suite
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Four specialized portals. One shared source of truth.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every role gets a focused workspace while staying synchronized with the rest of the school.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
