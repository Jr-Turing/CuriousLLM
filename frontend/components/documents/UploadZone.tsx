"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Check, Circle, Loader2 } from "lucide-react";
import clsx from "clsx";

type Stage = "idle" | "uploading" | "processing" | "done";

const processingSteps = [
  "Extracting text",
  "Detecting sections",
  "Identifying topics",
  "Generating embeddings",
  "Preparing AI knowledge base",
];

export function UploadZone() {
  const [dragOver, setDragOver] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const startProcessing = useCallback((name: string) => {
    setFileName(name);
    setStage("processing");
    setStepIndex(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setStepIndex(i);
      if (i >= processingSteps.length) {
        clearInterval(interval);
        setTimeout(() => setStage("done"), 500);
      }
    }, 700);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    startProcessing(file?.name ?? "study-material.pdf");
  };

  const onBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) startProcessing(file.name);
  };

  if (stage === "processing" || stage === "done") {
    return (
      <div className="rounded-md border border-line bg-surface p-8">
        <p className="font-serif text-lg text-ink">
          {stage === "done" ? "Analysis complete" : "Analyzing your document..."}
        </p>
        <p className="mb-6 mt-1 text-sm text-ink-faint">{fileName}</p>
        <ul className="space-y-3">
          {processingSteps.map((step, i) => {
            const done = i < stepIndex || stage === "done";
            const active = i === stepIndex && stage === "processing";
            return (
              <li key={step} className="flex items-center gap-3 text-sm">
                {done ? (
                  <Check size={16} className="text-good" />
                ) : active ? (
                  <Loader2 size={16} className="animate-spin text-accent-deep" />
                ) : (
                  <Circle size={14} className="text-ink-faint/50" />
                )}
                <span className={done || active ? "text-ink" : "text-ink-faint"}>{step}</span>
              </li>
            );
          })}
        </ul>
        {stage === "done" && (
          <button
            onClick={() => setStage("idle")}
            className="mt-6 text-sm text-accent-deep hover:underline"
          >
            Upload another document
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      className={clsx(
        "rounded-md border-2 border-dashed p-12 text-center transition-colors",
        dragOver ? "border-accent bg-accent-soft/40" : "border-line bg-surface"
      )}
    >
      <input ref={inputRef} type="file" className="hidden" onChange={onBrowse} accept=".pdf,.epub" />
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink/[0.04] text-ink-soft">
        <UploadCloud size={22} />
      </div>
      <p className="mt-4 font-serif text-lg text-ink">Drop your study material here</p>
      <p className="mt-1 text-sm text-ink-faint">or</p>
      <button
        onClick={() => inputRef.current?.click()}
        className="mt-4 inline-flex items-center justify-center rounded bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-soft"
      >
        Browse files
      </button>
      <p className="mt-4 text-xs text-ink-faint">Supported: PDF, EPUB</p>

      <div className="mx-auto mt-8 flex max-w-xs flex-col gap-1.5 text-left text-sm text-ink-soft">
        {["Syllabus", "Previous Year Questions", "Notes", "Textbooks"].map((t) => (
          <div key={t} className="flex items-center gap-2">
            <Check size={13} className="text-good" /> {t}
          </div>
        ))}
      </div>
    </div>
  );
}
