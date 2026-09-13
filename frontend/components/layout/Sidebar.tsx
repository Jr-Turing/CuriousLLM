"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Settings } from "lucide-react";
import { CuriousLogo } from "@/components/brand/CuriousLogo";
import { navGroups } from "./nav-data";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-line bg-surface md:flex">
      <div className="border-b border-line px-5 py-5">
        <Link href="/dashboard">
          <CuriousLogo size={24} />
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1.5 px-2 text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  pathname === item.href || pathname?.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-2.5 rounded px-2.5 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-ink/5 font-medium text-ink"
                          : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                      )}
                    >
                      <Icon size={16} strokeWidth={1.75} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t border-line px-3 py-3">
        <Link
          href="/settings"
          className={clsx(
            "flex items-center gap-2.5 rounded px-2.5 py-1.5 text-sm transition-colors",
            pathname === "/settings"
              ? "bg-ink/5 font-medium text-ink"
              : "text-ink-soft hover:bg-ink/5 hover:text-ink"
          )}
        >
          <Settings size={16} strokeWidth={1.75} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
