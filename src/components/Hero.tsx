import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <GraduationCap className="h-4 w-4" />
            The Future of School Management
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up-delay-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            One Platform for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Every Role
            </span>{" "}
            in Education
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            EduTrack connects administrators, teachers, parents, and students on a single unified
            platform — making school management effortless and transparent.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110"
            >
              Explore Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Floating cards preview */}
        <div className="animate-fade-in-up-delay-4 relative mx-auto mt-20 max-w-3xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: BarChart3, label: "Management", color: "blue", count: "Live" },
              { icon: BookOpen, label: "Teacher", color: "emerald", count: "Live" },
              { icon: Users, label: "Parent", color: "purple", count: "Live" },
              { icon: GraduationCap, label: "Student", color: "amber", count: "Live" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  i % 2 === 0 ? "animate-float" : "animate-float-delay"
                }`}
              >
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    item.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : item.color === "emerald"
                      ? "bg-emerald-100 text-emerald-600"
                      : item.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-amber-100 text-amber-600"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <span
                  className={`mt-1 inline-block text-xs font-medium ${
                    item.count === "Live" ? "text-emerald-600" : "text-slate-400"
                  }`}
                >
                  {item.count === "Live" ? "● Live" : "○ Coming Soon"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
