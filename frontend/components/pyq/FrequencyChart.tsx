"use client";

import { motion } from "framer-motion";
import { TopicFrequency } from "@/types";

export function FrequencyChart({ data }: { data: TopicFrequency[] }) {
  const sorted = [...data].sort((a, b) => b.frequency - a.frequency);
  const max = Math.max(...sorted.map((d) => d.frequency));

  return (
    <div className="space-y-3.5">
      {sorted.map((f, i) => (
        <div key={f.topic} className="flex items-center gap-3">
          <span className="w-40 shrink-0 text-sm text-ink sm:w-48">{f.topic}</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(f.frequency / max) * 100}%` }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
              className="h-full rounded-full bg-accent"
            />
          </div>
          <span className="w-6 shrink-0 text-right font-mono text-sm text-ink-faint">{f.frequency}</span>
        </div>
      ))}
    </div>
  );
}
