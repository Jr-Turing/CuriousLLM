import { FileText } from "lucide-react";
import { ChatSource } from "@/types";

export function SourceCitation({ sources }: { sources: ChatSource[] }) {
  return (
    <div className="mt-3 border-t border-line pt-2.5">
      <p className="mb-1.5 text-[0.68rem] uppercase tracking-wide text-ink-faint">Sources</p>
      <div className="flex flex-wrap gap-2">
        {sources.map((s) => (
          <span
            key={s.document + s.page}
            className="flex items-center gap-1.5 rounded-sm border border-line bg-surface px-2 py-1 text-xs text-ink-soft"
          >
            <FileText size={11} className="text-ink-faint" />
            {s.document} · Page {s.page}
          </span>
        ))}
      </div>
    </div>
  );
}
