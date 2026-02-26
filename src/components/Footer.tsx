import { GraduationCap } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Management Portal", href: "https://edutrack-manager.vercel.app/" },
    { label: "Teacher Portal", href: "https://edutrack-teacher.vercel.app/login" },
    { label: "Parent Portal", href: "#services" },
    { label: "Student Portal", href: "https://edutrack-student.vercel.app/login" },
  ],
  Resources: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#about" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Edu<span className="text-blue-600">Track</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              The complete education management platform connecting every role in your school.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900">{category}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} EduTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            Built with
            <span className="mx-0.5 text-red-400">&hearts;</span>
            using Next.js &amp; Supabase
          </div>
        </div>
      </div>
    </footer>
  );
}
