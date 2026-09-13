"use client";

import { useEffect, useState } from "react";
import { Flag, Clock } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { QuizQuestion } from "@/types";

type Status = "unanswered" | "answered" | "marked";

export function MockExam({ questions, durationMinutes = 30 }: { questions: QuizQuestion[]; durationMinutes?: number }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [marked, setMarked] = useState<Record<number, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  useEffect(() => {
    if (secondsLeft === 0 && !submitted) setSubmitted(true);
  }, [secondsLeft, submitted]);

  function statusFor(i: number): Status {
    if (marked[i]) return "marked";
    if (answers[i] !== undefined) return "answered";
    return "unanswered";
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  if (submitted) {
    const correct = questions.filter((q, i) => answers[i] === q.correctIndex).length;
    const pct = Math.round((correct / questions.length) * 100);
    const strong = [...new Set(questions.filter((q, i) => answers[i] === q.correctIndex).map((q) => q.topic))];
    const weak = [...new Set(questions.filter((q, i) => answers[i] !== q.correctIndex).map((q) => q.topic))];

    return (
      <div className="rounded-md border border-line bg-surface p-8 text-center">
        <p className="text-xs uppercase tracking-wide text-ink-faint">Mock examination result</p>
        <p className="mt-2 font-serif text-4xl text-ink">
          {correct} / {questions.length}
        </p>
        <p className="mt-1 text-lg text-ink-soft">{pct}%</p>
        <div className="mx-auto mt-6 grid max-w-md gap-4 text-left sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-wide text-ink-faint">Strong topics</p>
            <ul className="space-y-1 text-sm text-ink">{strong.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-wide text-ink-faint">Weak topics</p>
            <ul className="space-y-1 text-sm text-ink">{weak.length ? weak.map((t) => <li key={t}>{t}</li>) : <li className="text-ink-faint">None</li>}</ul>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-md rounded-sm border border-line bg-ink/[0.02] p-4 text-left text-sm text-ink-soft">
          <p className="mb-1 text-xs uppercase tracking-wide text-ink-faint">Recommended revision</p>
          {weak.length ? `Review ${weak.slice(0, 2).join(" and ")} before your next attempt.` : "Great work — move on to a harder subject."}
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
      <div>
        <div className="mb-4 flex items-center justify-between rounded-md border border-line bg-surface px-4 py-3">
          <span className="text-sm text-ink-soft">Question {current + 1} of {questions.length}</span>
          <span className="flex items-center gap-1.5 font-mono text-sm text-ink">
            <Clock size={14} /> {mm}:{ss}
          </span>
        </div>

        <div className="rounded-md border border-line bg-surface p-6">
          <p className="mb-5 font-serif text-lg text-ink">{q.prompt}</p>
          <div className="space-y-2.5">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                onClick={() => setAnswers((a) => ({ ...a, [current]: i }))}
                className={clsx(
                  "flex w-full items-center gap-3 rounded border px-4 py-3 text-left text-sm",
                  answers[current] === i ? "border-accent bg-accent-soft/50 text-ink" : "border-line text-ink-soft hover:border-ink/25"
                )}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setMarked((m) => ({ ...m, [current]: !m[current] }))}
              className={clsx(
                "flex items-center gap-1.5 rounded border px-3 py-2 text-sm",
                marked[current] ? "border-accent text-accent-deep" : "border-line text-ink-soft hover:border-ink/25"
              )}
            >
              <Flag size={14} /> {marked[current] ? "Marked for review" : "Mark for review"}
            </button>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={current === 0}
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              >
                Previous
              </Button>
              {current + 1 < questions.length ? (
                <Button size="sm" onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}>
                  Next
                </Button>
              ) : (
                <Button size="sm" onClick={() => setSubmitted(true)}>
                  Submit exam
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="rounded-md border border-line bg-surface p-4">
          <p className="mb-3 text-xs uppercase tracking-wide text-ink-faint">Question navigator</p>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, i) => {
              const status = statusFor(i);
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-sm border text-xs font-medium",
                    current === i && "ring-2 ring-navy/30",
                    status === "answered" && "border-good bg-good-soft text-good",
                    status === "marked" && "border-accent bg-accent-soft text-accent-deep",
                    status === "unanswered" && "border-line text-ink-faint"
                  )}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-ink-faint">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-good" /> Answered</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-accent" /> Marked for review</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm border border-line" /> Unanswered</div>
          </div>
          <Button className="mt-4 w-full" variant="secondary" size="sm" onClick={() => setSubmitted(true)}>
            Submit exam
          </Button>
        </div>
      </div>
    </div>
  );
}
