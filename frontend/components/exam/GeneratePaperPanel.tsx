"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuestionPaper } from "./QuestionPaper";
import { ProbableQuestion } from "@/types";

export function GeneratePaperPanel({
  subjectName,
  questions,
}: {
  subjectName: string;
  questions: ProbableQuestion[];
}) {
  const [state, setState] = useState<"idle" | "generating" | "done">("idle");

  return (
    <div>
      {state !== "done" && (
        <div className="rounded-md border border-line bg-surface p-8 text-center">
          <p className="text-xs uppercase tracking-wide text-ink-faint">Exam pattern</p>
          <p className="mt-1 text-sm text-ink-soft">MAKAUT Semester Examination</p>
          <h2 className="mt-3 font-serif text-xl text-ink">{subjectName}</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-faint">
            Based on syllabus coverage and {questions.length ? "historical PYQ patterns" : "your uploaded material"}.
          </p>
          <Button
            className="mt-5 gap-2"
            disabled={state === "generating"}
            onClick={() => {
              setState("generating");
              setTimeout(() => setState("done"), 1200);
            }}
          >
            <Sparkles size={15} />
            {state === "generating" ? "Generating paper..." : "Generate paper"}
          </Button>
        </div>
      )}

      <AnimatePresence>
        {state === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-5 flex items-start gap-2.5 rounded-md border border-accent/30 bg-accent-soft/50 px-4 py-3 text-sm text-accent-deep">
              <Info size={16} className="mt-0.5 shrink-0" />
              <p>
                These are AI-generated probable questions based on historical patterns and
                syllabus analysis. They are not guaranteed exam questions.
              </p>
            </div>
            <QuestionPaper questions={questions} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
