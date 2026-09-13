"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flashcard as FlashcardType } from "@/types";

export function FlashcardDeck({ cards }: { cards: FlashcardType[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  function next(rating?: string) {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i + 1) % cards.length), 150);
  }

  return (
    <div className="mx-auto max-w-md">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="block w-full"
        style={{ perspective: 1200 }}
        aria-label="Flip flashcard"
      >
        <motion.div
          className="relative flex h-64 w-full items-center justify-center rounded-md border border-line bg-surface p-6 text-center shadow-sm"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mb-2 text-xs uppercase tracking-wide text-ink-faint">{card.unit}</p>
            <p className="font-serif text-xl text-ink">{card.front}</p>
            <p className="mt-4 text-xs text-ink-faint">Tap to reveal</p>
          </div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-navy p-6 text-white"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-[0.95rem] leading-relaxed">{card.back}</p>
          </div>
        </motion.div>
      </button>

      <p className="mt-4 text-center text-sm text-ink-faint">
        {index + 1} / {cards.length}
      </p>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          { label: "Again", tone: "border-warn/40 text-warn" },
          { label: "Hard", tone: "border-accent/40 text-accent-deep" },
          { label: "Good", tone: "border-ink/20 text-ink" },
          { label: "Easy", tone: "border-good/40 text-good" },
        ].map((b) => (
          <button
            key={b.label}
            onClick={() => next(b.label)}
            className={`rounded border px-2 py-2 text-xs font-medium hover:bg-ink/[0.03] ${b.tone}`}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
