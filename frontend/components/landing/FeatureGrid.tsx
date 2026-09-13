"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  ListChecks,
  FileQuestion,
  CalendarClock,
  ClipboardList,
  Layers,
  Mic,
  Share2,
} from "lucide-react";

const features = [
  { icon: MessageSquare, title: "AI Document Chat", desc: "Ask questions about your syllabus, notes or textbooks and get grounded answers with page citations." },
  { icon: BarChart3, title: "PYQ Intelligence", desc: "See exactly which topics your university repeats, and how often, across years of question papers." },
  { icon: ListChecks, title: "Exam Essentials", desc: "A focused list of must-study, important and recommended topics for every subject and unit." },
  { icon: FileQuestion, title: "Probable Question Paper", desc: "An AI-generated paper built from syllabus coverage and historical PYQ patterns." },
  { icon: CalendarClock, title: "Personalized Study Plan", desc: "A day-by-day plan built around your exam date, available hours and current preparation." },
  { icon: ClipboardList, title: "Mock Tests", desc: "Timed, exam-style tests with question navigation, review marking and a full results breakdown." },
  { icon: Layers, title: "Flashcards", desc: "Spaced-repetition flashcards generated straight from your own notes and textbooks." },
  { icon: Mic, title: "Viva Simulator", desc: "Practice oral exams with an AI examiner that scores concept, accuracy and clarity." },
  { icon: Share2, title: "Knowledge Graph", desc: "See how every topic in a subject connects, so you understand structure, not just facts." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mb-10 max-w-lg">
          <h2 className="font-serif text-2xl text-ink md:text-[1.8rem]">Everything one exam needs</h2>
          <p className="mt-2 text-[0.95rem] text-ink-soft">
            Nine tools, one workspace — built around a single question: what should you study next?
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="bg-surface p-6"
            >
              <f.icon size={20} strokeWidth={1.6} className="text-accent-deep" />
              <h3 className="mt-3.5 font-serif text-[1.05rem] text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
