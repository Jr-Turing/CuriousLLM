"use client";

import { motion } from "framer-motion";
import { StudyDayPlan } from "@/types";

export function StudyPlanTimeline({ days }: { days: StudyDayPlan[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
      <div className="space-y-6">
        {days.map((d, i) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-6 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-paper" />
            <p className="text-xs uppercase tracking-wide text-ink-faint">
              Day {d.day} · {d.hours}h
            </p>
            <p className="mt-1 font-serif text-lg text-ink">{d.unit}</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
              {d.focus.map((f) => (
                <li key={f}>· {f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
