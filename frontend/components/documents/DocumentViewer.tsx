"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Send, Sparkles } from "lucide-react";
import { StudyDocument } from "@/types";

export function DocumentViewer({ doc }: { doc: StudyDocument }) {
  const [page, setPage] = useState(Math.min(42, doc.pages));
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState<string | null>(
    "Explain the highlighted concept on this page."
  );

  return (
    <div className="grid min-h-[70vh] gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
      <div className="flex flex-col bg-surface">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <p className="text-sm text-ink-soft">Page {page} of {doc.pages}</p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded p-1.5 text-ink-faint hover:bg-ink/5 hover:text-ink"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(doc.pages, p + 1))}
              className="rounded p-1.5 text-ink-faint hover:bg-ink/5 hover:text-ink"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-ink/[0.02] p-6">
          <div className="aspect-[3/4] w-full max-w-sm rounded-sm border border-line bg-white p-6 shadow-sm">
            <div className="mb-4 h-2.5 w-2/3 rounded-full bg-ink/10" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-ink/[0.06]" />
              <div className="h-1.5 w-full rounded-full bg-ink/[0.06]" />
              <div className="h-1.5 w-4/5 rounded-full bg-ink/[0.06]" />
            </div>
            <div className="my-3 rounded-sm border border-accent/40 bg-accent-soft/60 p-2.5">
              <div className="h-1.5 w-full rounded-full bg-accent/40" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-accent/40" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-ink/[0.06]" />
              <div className="h-1.5 w-5/6 rounded-full bg-ink/[0.06]" />
              <div className="h-1.5 w-full rounded-full bg-ink/[0.06]" />
              <div className="h-1.5 w-2/3 rounded-full bg-ink/[0.06]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-surface">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <Sparkles size={14} className="text-accent-deep" />
          <p className="text-sm text-ink-soft">AI assistant</p>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {asked && (
            <>
              <div className="ml-auto max-w-[85%] rounded-sm bg-navy px-3 py-2 text-sm text-white">
                {asked}
              </div>
              <div className="max-w-[90%] rounded-sm border border-line bg-ink/[0.02] px-3 py-2.5 text-sm text-ink">
                The highlighted passage explains a core mechanism of this unit. It links the
                theoretical definition to how it is typically tested in MAKAUT question
                papers — worth reviewing alongside the PYQ analysis for this subject.
                <p className="mt-2 border-t border-line pt-2 text-xs text-ink-faint">
                  Sources
                  <br />
                  {doc.title} · Page {page}
                </p>
              </div>
            </>
          )}
        </div>
        <form
          className="flex items-center gap-2 border-t border-line p-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!question.trim()) return;
            setAsked(question);
            setQuestion("");
          }}
        >
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about this page..."
            className="flex-1 rounded border border-line bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-ink/30 focus:outline-none"
          />
          <button
            type="submit"
            className="flex h-9 w-9 items-center justify-center rounded bg-navy text-white hover:bg-navy-soft"
            aria-label="Send"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
