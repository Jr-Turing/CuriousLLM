"use client";

import { motion } from "framer-motion";
import { pyqAnalyses } from "@/lib/mock-data/pyq";

const data = pyqAnalyses.os;
const max = Math.max(...data.frequencies.map((f) => f.frequency));

export function ExamIntelligenceShowcase() {
  return (
    <section id="exam-intelligence" className="border-b border-line py-16 md:py-20">
      <div className="mx-auto grid max-w-content gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-2 text-sm text-accent-deep">Exam intelligence</p>
          <h2 className="font-serif text-2xl text-ink md:text-[1.8rem]">
            Operating Systems, decoded across {data.totalPapers} papers
          </h2>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
            CuriousLLM reads {data.yearsCovered} of MAKAUT question papers and ranks every
            topic by how often it actually appears — so you know what to study first,
            not just what&rsquo;s in the syllabus.
          </p>
          <div className="mt-7 space-y-4">
            {[
              { label: "High priority", pct: 78, tone: "bg-accent" },
              { label: "Medium priority", pct: 48, tone: "bg-navy" },
              { label: "Low priority", pct: 26, tone: "bg-ink/25" },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1 flex justify-between text-xs text-ink-faint">
                  <span>{row.label}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${row.tone}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-line bg-surface p-5">
          <p className="mb-4 text-[0.7rem] uppercase tracking-wide text-ink-faint">Top topics by frequency</p>
          <div className="space-y-3">
            {data.frequencies
              .slice()
              .sort((a, b) => b.frequency - a.frequency)
              .slice(0, 5)
              .map((f, i) => (
                <div key={f.topic} className="flex items-center gap-3">
                  <span className="w-4 font-mono text-xs text-ink-faint">{i + 1}</span>
                  <span className="w-40 shrink-0 text-sm text-ink">{f.topic}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(f.frequency / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                  <span className="w-4 text-right font-mono text-xs text-ink-faint">{f.frequency}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
