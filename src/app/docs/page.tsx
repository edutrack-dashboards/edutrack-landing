"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Search,
  Shield,
  BookOpen,
  Baby,
  Backpack,
  Rocket,
  ExternalLink,
  ChevronRight,
  Lock,
  Network,
  Users,
  HelpCircle,
  Wrench,
  X,
  Menu,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "getting-started": Rocket,
  authentication: Lock,
  "manager-portal": Shield,
  "teacher-portal": BookOpen,
  "parent-portal": Baby,
  "student-portal": Backpack,
  "data-flow": Network,
  "roles-permissions": Users,
  faq: HelpCircle,
  troubleshooting: Wrench,
};

function renderContent(raw: string) {
  const lines = raw.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-1">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#3d4f45]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f766e]" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
    if (orderedItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 space-y-2 pl-1">
          {orderedItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#3d4f45]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-[11px] font-semibold text-[#0f766e]">
                {j + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ol>
      );
      orderedItems = [];
    }
  }

  function inlineFormat(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[#0a1f14]">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="rounded bg-[#f0ede8] px-1.5 py-0.5 text-[13px] font-mono text-[#0f766e]">$1</code>');
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h4 key={`h4-${i}`} className="mb-2 mt-8 text-[15px] font-semibold text-[#0a1f14]">
          {line.slice(4)}
        </h4>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="mb-3 mt-10 border-b border-[#e8e4de] pb-2 text-lg font-semibold text-[#0a1f14]">
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      flushList();
      const text = line.slice(2);
      elements.push(
        <div key={`bq-${i}`} className="my-4 rounded-lg border-l-3 border-[#0f766e] bg-[#0f766e]/5 px-4 py-3">
          <p className="text-[14px] leading-relaxed text-[#3d4f45]" dangerouslySetInnerHTML={{ __html: inlineFormat(text) }} />
        </div>
      );
    } else if (line.startsWith("- ")) {
      if (orderedItems.length > 0) flushList();
      listItems.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      if (listItems.length > 0) flushList();
      orderedItems.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={`p-${i}`} className="my-3 text-[15px] leading-[1.8] text-[#3d4f45]" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
      );
    }
    i++;
  }
  flushList();
  return elements;
}

export default function DocsPage() {
  const { t } = useI18n();
  const d = t.docs;
  const sections = d.sections as {
    id: string;
    group: string;
    title: string;
    url?: string;
    content: string;
  }[];

  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const groups = useMemo(() => {
    const map = new Map<string, typeof sections>();
    for (const s of sections) {
      if (!map.has(s.group)) map.set(s.group, []);
      map.get(s.group)!.push(s);
    }
    return Array.from(map.entries());
  }, [sections]);

  const filteredGroups = useMemo(() => {
    if (!search) return groups;
    const q = search.toLowerCase();
    return groups
      .map(([group, items]) => {
        const filtered = items.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.content.toLowerCase().includes(q)
        );
        return [group, filtered] as [string, typeof sections];
      })
      .filter(([, items]) => items.length > 0);
  }, [groups, search]);

  const activeSection = sections.find((s) => s.id === activeId);
  const flatIds = sections.map((s) => s.id);
  const currentIndex = flatIds.indexOf(activeId);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const handleSelect = (id: string) => {
    setActiveId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f766e] text-white shadow-lg lg:hidden"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — fixed, non-scrollable, full height */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-[#e8e4de] bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo header */}
        <div className="border-b border-[#e8e4de] px-4 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <div className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg shadow-sm shadow-teal-700/20">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900">EduTrack</p>
              <p className="-mt-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                docs
              </p>
            </div>
          </a>
        </div>

        {/* Nav groups — scrollable middle section */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {filteredGroups.map(([group, items]) => (
            <div key={group} className="mb-5">
              <div className="mb-1.5 px-2 py-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9aa89e]">
                  {group}
                </span>
              </div>
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const Icon = iconMap[item.id] ?? BookOpen;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSelect(item.id)}
                        className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                          activeId === item.id
                            ? "bg-[#0f766e]/8 font-medium text-[#0f766e]"
                            : "text-[#3d4f45] hover:text-[#0f766e] hover:underline"
                        }`}
                      >
                        <Icon className={`h-3.5 w-3.5 shrink-0 ${activeId === item.id ? "text-[#0f766e]" : "text-[#b5bdb8]"}`} />
                        <span className="truncate">{item.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {filteredGroups.length === 0 && (
            <p className="px-3 py-8 text-center text-[13px] text-[#9aa89e]">
              No results for &ldquo;{search}&rdquo;
            </p>
          )}

          {/* Back to home — at bottom of nav */}
          <div className="mt-24 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f4f2ef] px-3 py-2 text-[13px] font-medium text-[#5a6b60] transition-colors hover:bg-[#ebe8e3] hover:text-[#0a1f14]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to EduTrack
            </a>
          </div>
        </nav>
      </aside>

      {/* Main content — scrollable */}
      <main className="min-w-0 flex-1 overflow-y-auto bg-[#faf9f7]">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10 lg:px-16">
          {activeSection && (
            <article key={activeId} className="animate-[fadeIn_0.2s_ease-out]">
              {/* Breadcrumb */}
              <div className="mb-5 flex items-center gap-2 text-[12px] text-[#9aa89e]">
                <span>{activeSection.group}</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-[#5a6b60]">{activeSection.title}</span>
              </div>

              {/* Title + portal link */}
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0a1f14] sm:text-3xl">
                  {activeSection.title}
                </h1>
                {activeSection.url && (
                  <a
                    href={activeSection.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0f766e] px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#115e59]"
                  >
                    {d.openPortal}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Rendered content */}
              <div className="docs-content">{renderContent(activeSection.content)}</div>

              {/* Prev / Next */}
              <div className="mt-14 flex items-stretch gap-3 border-t border-[#e8e4de] pt-6">
                {prevSection ? (
                  <button
                    onClick={() => handleSelect(prevSection.id)}
                    className="flex flex-1 cursor-pointer flex-col items-start rounded-xl border border-[#e8e4de] bg-white px-4 py-3 text-left transition-all hover:border-[#0f766e]/40 hover:shadow-sm [&:hover_span:last-child]:text-[#0f766e] [&:hover_span:last-child]:underline"
                  >
                    <span className="text-[11px] font-medium text-[#9aa89e]">Previous</span>
                    <span className="mt-0.5 text-sm font-semibold text-[#0a1f14]">
                      {prevSection.title}
                    </span>
                  </button>
                ) : (
                  <div className="flex-1" />
                )}
                {nextSection ? (
                  <button
                    onClick={() => handleSelect(nextSection.id)}
                    className="flex flex-1 cursor-pointer flex-col items-end rounded-xl border border-[#e8e4de] bg-white px-4 py-3 text-right transition-all hover:border-[#0f766e]/40 hover:shadow-sm [&:hover_span:last-child]:text-[#0f766e] [&:hover_span:last-child]:underline"
                  >
                    <span className="text-[11px] font-medium text-[#9aa89e]">Next</span>
                    <span className="mt-0.5 text-sm font-semibold text-[#0a1f14]">
                      {nextSection.title}
                    </span>
                  </button>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
