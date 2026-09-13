"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { CuriousLogo } from "@/components/brand/CuriousLogo";
import { navGroups } from "./nav-data";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 flex h-full w-[260px] flex-col bg-surface"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-5">
              <CuriousLogo size={22} />
              <button onClick={onClose} aria-label="Close menu" className="text-ink-faint hover:text-ink">
                <X size={18} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {navGroups.map((group) => (
                <div key={group.label} className="mb-5">
                  <p className="mb-1.5 px-2 text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint">
                    {group.label}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => {
                      const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                      const Icon = item.icon;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={`flex items-center gap-2.5 rounded px-2.5 py-2 text-sm transition-colors ${
                              active ? "bg-ink/5 font-medium text-ink" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                            }`}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
