"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Upload", desc: "Upload your syllabus, PYQs and study material — notes, textbooks, or eBooks." },
  { n: "02", title: "Analyze", desc: "CuriousLLM reads your documents and finds patterns across years of PYQs." },
  { n: "03", title: "Prepare", desc: "Get important topics, AI explanations and unit-wise study material." },
  { n: "04", title: "Practice", desc: "Take quizzes, mock tests and viva sessions to test what you know." },
  { n: "05", title: "Predict", desc: "Generate a probable question paper based on historical patterns." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <h2 className="mb-10 font-serif text-2xl text-ink md:text-[1.8rem]">How CuriousLLM works</h2>
        <div className="grid gap-0 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              className="border-t border-line py-5 pr-5 md:border-l md:border-t-0 md:py-1 md:pl-5 md:pr-4 md:first:border-l-0"
            >
              <p className="font-mono text-xs text-ink-faint">{step.n}</p>
              <h3 className="mt-2 font-serif text-lg text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
