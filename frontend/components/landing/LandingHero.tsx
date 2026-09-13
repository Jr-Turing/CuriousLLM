"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function LandingHero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-5 text-sm text-accent-deep">
            Built for MAKAUT B.Tech students
          </motion.p>
          <motion.h1
            variants={item}
            className="font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]"
          >
            Your syllabus.
            <br />
            Your PYQs.
            <br />
            Your AI study partner.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Turn your MAKAUT syllabus, previous year questions, notes and textbooks into
            one intelligent exam preparation system. Study less randomly. Prepare more
            intelligently.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3.5">
            <LinkButton href="/dashboard" size="md" className="gap-2">
              Start preparing <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="#features" variant="secondary" size="md">
              Explore features
            </LinkButton>
          </motion.div>
          <motion.div variants={item} className="mt-10 flex items-center gap-6 text-sm text-ink-faint">
            <span>7 core subjects mapped</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint" />
            <span>10+ years of PYQs analyzed</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <HeroWorkspace />
        </motion.div>
      </div>
    </section>
  );
}

function HeroWorkspace() {
  return (
    <div className="relative rounded-md border border-line bg-surface p-1.5 shadow-[0_1px_0_#00000005]">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 text-xs text-ink-faint">Operating Systems — Workspace</span>
      </div>

      <div className="grid grid-cols-5 gap-px bg-line/70 p-px">
        <div className="col-span-2 space-y-px bg-line/70">
          <div className="bg-surface p-3">
            <p className="mb-2 text-[0.7rem] uppercase tracking-wide text-ink-faint">Documents</p>
            {["Syllabus 2024.pdf", "PYQs 2019–25.pdf", "Galvin — OS.pdf"].map((d) => (
              <div key={d} className="mb-1.5 flex items-center gap-2 rounded-sm bg-ink/[0.03] px-2 py-1.5 text-xs text-ink-soft">
                <FileText size={12} className="text-ink-faint" /> {d}
              </div>
            ))}
          </div>
          <div className="bg-surface p-3">
            <p className="mb-2 text-[0.7rem] uppercase tracking-wide text-ink-faint">Top topics</p>
            {["Process Scheduling", "Deadlock", "Virtual Memory"].map((t, i) => (
              <div key={t} className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-ink-soft">{i + 1}. {t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 space-y-px bg-line/70">
          <div className="bg-surface p-3">
            <p className="mb-2 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wide text-ink-faint">
              <Sparkles size={11} /> AI chat
            </p>
            <div className="rounded-sm bg-ink/[0.03] px-2.5 py-2 text-xs text-ink-soft">
              Explain the Banker&rsquo;s Algorithm with an example.
            </div>
            <div className="mt-1.5 rounded-sm border border-accent/25 bg-accent-soft/50 px-2.5 py-2 text-xs text-ink">
              The Banker&rsquo;s Algorithm avoids deadlock by only granting a resource
              request if the system remains in a safe state...
              <p className="mt-1.5 text-[0.68rem] text-accent-deep">Source · Galvin, p. 314</p>
            </div>
          </div>
          <div className="bg-surface p-3">
            <p className="mb-2 text-[0.7rem] uppercase tracking-wide text-ink-faint">PYQ priority</p>
            <div className="space-y-1.5">
              {[
                { label: "High", w: "88%" },
                { label: "Medium", w: "58%" },
                { label: "Low", w: "30%" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="w-14 text-[0.68rem] text-ink-faint">{b.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/[0.06]">
                    <div className="h-full rounded-full bg-accent" style={{ width: b.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
