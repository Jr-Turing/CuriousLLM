import clsx from "clsx";
import { Sparkles } from "lucide-react";
import { ChatMessage } from "@/types";
import { SourceCitation } from "./SourceCitation";
import { CuriousLogo } from "@/components/brand/CuriousLogo";

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.trim().startsWith("```")) {
      const code = block.replace(/```[a-z]*\n?/g, "").replace(/```$/, "");
      return (
        <pre key={i} className="my-2 overflow-x-auto rounded-sm bg-navy px-3 py-2.5 font-mono text-xs text-white/90">
          <code>{code}</code>
        </pre>
      );
    }
    if (block.trim().startsWith("- ")) {
      const items = block.split("\n").filter(Boolean);
      return (
        <ul key={i} className="my-1.5 list-disc space-y-1 pl-5">
          {items.map((it, j) => (
            <li key={j}>{it.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className={i > 0 ? "mt-2.5" : ""}>
        {block}
      </p>
    );
  });
}

export function Message({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={clsx("flex gap-3", isUser && "flex-row-reverse")}>
      <div className="mt-0.5 shrink-0">
        {isUser ? (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs text-white">A</span>
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent-deep">
            <Sparkles size={13} />
          </span>
        )}
      </div>
      <div className={clsx("max-w-[80%]", isUser && "flex flex-col items-end")}>
        <p className="mb-1 text-xs text-ink-faint">{isUser ? "You" : "CuriousLLM"}</p>
        <div
          className={clsx(
            "rounded-sm px-3.5 py-2.5 text-[0.92rem] leading-relaxed",
            isUser ? "bg-navy text-white" : "border border-line bg-surface text-ink"
          )}
        >
          {renderContent(message.content)}
          {!isUser && message.sources && <SourceCitation sources={message.sources} />}
        </div>
      </div>
    </div>
  );
}
