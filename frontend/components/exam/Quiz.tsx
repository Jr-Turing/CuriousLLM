"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/Progress";
import { QuizQuestion } from "@/types";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const q = questions[index];

  function submit() {
    if (selected === null) return;
    const next = [...answers, selected];
    setAnswers(next);
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  }

  if (done) {
    const score = answers.filter((a, i) => a === questions[i].correctIndex).length;
    const strong = questions.filter((qq, i) => answers[i] === qq.correctIndex).map((qq) => qq.topic);
    const weak = questions.filter((qq, i) => answers[i] !== qq.correctIndex).map((qq) => qq.topic);
    return (
      <div className="rounded-md border border-line bg-surface p-8 text-center">
        <p className="text-xs uppercase tracking-wide text-ink-faint">Quiz complete</p>
        <p className="mt-2 font-serif text-4xl text-ink">
          {score}/{questions.length}
        </p>
        <div className="mx-auto mt-6 grid max-w-sm gap-4 text-left sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-wide text-ink-faint">Strong</p>
            <ul className="space-y-1 text-sm text-ink">
              {[...new Set(strong)].map((t) => <li key={t}>{t}</li>)}
              {strong.length === 0 && <li className="text-ink-faint">None yet</li>}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-wide text-ink-faint">Needs revision</p>
            <ul className="space-y-1 text-sm text-ink">
              {[...new Set(weak)].map((t) => <li key={t}>{t}</li>)}
              {weak.length === 0 && <li className="text-ink-faint">Nice — none</li>}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between text-sm text-ink-faint">
        <span>Question {index + 1} / {questions.length}</span>
        <span>{q.topic}</span>
      </div>
      <ProgressBar value={((index) / questions.length) * 100} className="mb-6" />

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-md border border-line bg-surface p-6"
        >
          <p className="mb-5 font-serif text-lg text-ink">{q.prompt}</p>
          <div className="space-y-2.5">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                onClick={() => setSelected(i)}
                className={`flex w-full items-center gap-3 rounded border px-4 py-3 text-left text-sm transition-colors ${
                  selected === i ? "border-accent bg-accent-soft/50 text-ink" : "border-line text-ink-soft hover:border-ink/25"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                    selected === i ? "border-accent bg-accent text-white" : "border-ink/25"
                  }`}
                >
                  {selected === i && <Check size={10} />}
                </span>
                {opt}
              </button>
            ))}
          </div>
          <Button className="mt-6" onClick={submit} disabled={selected === null}>
            Submit answer
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
