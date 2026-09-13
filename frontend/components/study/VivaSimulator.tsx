"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VivaTurn } from "@/types";

const difficulties = ["Easy", "Medium", "Hard"];

export function VivaSimulator({ script }: { script: VivaTurn[] }) {
  const [started, setStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");
  const [turns, setTurns] = useState<VivaTurn[]>([]);
  const [answer, setAnswer] = useState("");
  const [step, setStep] = useState(0);

  if (!started) {
    return (
      <div className="rounded-md border border-line bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink/[0.04] text-ink-soft">
          <Mic size={20} />
        </div>
        <p className="mt-4 text-xs uppercase tracking-wide text-ink-faint">Topic</p>
        <h2 className="mt-1 font-serif text-xl text-ink">Operating Systems</h2>
        <p className="mt-4 text-xs uppercase tracking-wide text-ink-faint">Difficulty</p>
        <div className="mt-2 flex justify-center gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`rounded border px-3 py-1.5 text-sm ${
                difficulty === d ? "border-accent bg-accent-soft text-accent-deep" : "border-line text-ink-soft"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <Button
          className="mt-6"
          onClick={() => {
            setStarted(true);
            setTurns([script[0]]);
            setStep(1);
          }}
        >
          Start viva
        </Button>
      </div>
    );
  }

  function respond() {
    if (!answer.trim()) return;
    const studentTurn: VivaTurn = {
      id: `s-${Date.now()}`,
      role: "student",
      content: answer,
      evaluation: { concept: 8, accuracy: 8, clarity: 7, overall: 7.7 },
    };
    const nextExaminer = script[step + 1];
    setTurns((t) => [...t, studentTurn, ...(nextExaminer ? [nextExaminer] : [])]);
    setStep((s) => s + 2);
    setAnswer("");
  }

  return (
    <div className="rounded-md border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <Mic size={14} className="text-accent-deep" />
        <p className="text-sm text-ink-soft">CuriousLLM Viva · {difficulty}</p>
      </div>
      <div className="space-y-4 p-5">
        {turns.map((t) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-1 text-xs text-ink-faint">{t.role === "examiner" ? "AI Examiner" : "You"}</p>
            <div
              className={`rounded-sm px-3.5 py-2.5 text-sm ${
                t.role === "examiner" ? "border border-line bg-ink/[0.02] text-ink" : "bg-navy text-white"
              }`}
            >
              {t.content}
            </div>
            {t.evaluation && (
              <div className="mt-2 grid max-w-xs grid-cols-4 gap-2 text-center text-xs">
                {[
                  ["Concept", t.evaluation.concept],
                  ["Accuracy", t.evaluation.accuracy],
                  ["Clarity", t.evaluation.clarity],
                  ["Overall", t.evaluation.overall],
                ].map(([label, val]) => (
                  <div key={label as string} className="rounded-sm border border-line py-1.5">
                    <p className="text-ink-faint">{label}</p>
                    <p className="font-mono text-ink">{val}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <form
        className="flex items-center gap-2 border-t border-line p-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          respond();
        }}
      >
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 rounded border border-line bg-transparent px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-ink/30 focus:outline-none"
        />
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-white hover:bg-navy-soft"
          aria-label="Send answer"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
