"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { bottomNavItems } from "./nav-data";

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-surface/95 backdrop-blur md:hidden">
      {bottomNavItems.map((item) => {
        const active = pathname === item.href || pathname?.startsWith(item.href + "/");
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-[0.65rem]",
              active ? "text-accent-deep" : "text-ink-faint"
            )}
          >
            <Icon size={19} strokeWidth={active ? 2 : 1.75} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
