import { BarChart3, BookOpen, Users, GraduationCap, ArrowDown } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: BarChart3,
    title: "Admin Sets Up the School",
    description:
      "School administrators create classes, assign teachers, and enroll students using the Management portal.",
    color: "blue" as const,
  },
  {
    step: "2",
    icon: BookOpen,
    title: "Teachers Run the Classroom",
    description:
      "Teachers take attendance, enter grades, manage their schedule, and communicate with parents.",
    color: "emerald" as const,
  },
  {
    step: "3",
    icon: Users,
    title: "Parents Stay Informed",
    description:
      "Parents receive real-time updates on attendance, grades, and can message teachers directly.",
    color: "purple" as const,
  },
  {
    step: "4",
    icon: GraduationCap,
    title: "Students Take Ownership",
    description:
      "Students access their assignments, check grades, view schedules, and track their own progress.",
    color: "amber" as const,
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    ring: "ring-blue-600/20",
    line: "bg-blue-600",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    ring: "ring-emerald-600/20",
    line: "bg-emerald-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    ring: "ring-purple-600/20",
    line: "bg-purple-600",
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    ring: "ring-amber-600/20",
    line: "bg-amber-600",
  },
};

export default function Workflow() {
  return (
    <section className="bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Connected Workflow
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Data flows seamlessly from administration to the classroom and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-2xl space-y-0">
          {steps.map((step, index) => {
            const c = colorMap[step.color];
            return (
              <div key={step.step}>
                <div className="flex gap-5">
                  {/* Step number and line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.text} ring-4 ${c.ring} text-lg font-bold`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-slate-300 to-slate-200" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-12">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
