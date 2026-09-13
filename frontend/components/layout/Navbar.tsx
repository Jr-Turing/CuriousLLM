"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, Search, Settings } from "lucide-react";
import { subjects } from "@/lib/mock-data/subjects";
import { CuriousLogo } from "@/components/brand/CuriousLogo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MobileNav } from "./MobileNav";

const titleMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/documents": "Documents",
  "/chat": "AI Chat",
  "/subjects": "Subjects",
  "/pyq-analysis": "PYQ Analysis",
  "/predicted-paper": "Predicted Paper",
  "/study-plan": "Study Plan",
  "/flashcards": "Flashcards",
  "/quiz": "Quiz",
  "/mock-test": "Mock Test",
  "/viva": "Viva",
  "/knowledge-graph": "Knowledge Graph",
  "/settings": "Settings",
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const router = useRouter();
  const active = subjects[0];

  const base = "/" + (pathname?.split("/")[1] ?? "");
  const label = titleMap[base] ?? "CuriousLLM";

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-paper/90 px-5 backdrop-blur md:px-8">
        <div className="flex items-center gap-3">
          <button
            className="-ml-1.5 rounded p-1.5 text-ink-soft hover:bg-ink/5 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="md:hidden">
            <CuriousLogo size={20} />
          </div>
          <h2 className="hidden font-serif text-[1.05rem] text-ink md:block">{label}</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden items-center gap-2 rounded border border-line px-3 py-1.5 text-sm text-ink-faint hover:border-ink/20 md:flex"
            aria-label="Search CuriousLLM"
          >
            <Search size={14} />
            <span>Search</span>
            <kbd className="ml-2 rounded border border-line bg-ink/[0.03] px-1.5 py-0.5 font-mono text-[0.7rem] text-ink-faint">
              ⌘K
            </kbd>
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setAccountOpen((open) => !open)}
              aria-expanded={accountOpen}
              aria-label="Open account menu"
              className="flex items-center gap-2 rounded border border-line py-1 pl-1 pr-3 hover:border-ink/20"
            >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy font-serif text-xs text-white">
              A
            </span>
            <span className="hidden text-sm text-ink sm:block">Arvind</span>
            </button>
            {accountOpen && (
              <div className="absolute right-0 top-11 z-50 w-48 rounded border border-line bg-surface p-1.5 shadow-lg">
                <Link
                  href="/settings"
                  onClick={() => setAccountOpen(false)}
                  className="flex items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-soft hover:bg-ink/5 hover:text-ink"
                >
                  <Settings size={15} />
                  Settings
                </Link>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-warn hover:bg-warn-soft"
                >
                  <LogOut size={15} />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
