import clsx from "clsx";
import { Priority } from "@/types";

const priorityStyles: Record<Priority, string> = {
  high: "bg-accent-soft text-accent-deep border-accent/30",
  medium: "bg-navy/5 text-navy border-navy/15",
  low: "bg-ink/5 text-ink-soft border-ink/10",
};

const priorityLabel: Record<Priority, string> = {
  high: "Must Study",
  medium: "Important",
  low: "Recommended",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium",
        priorityStyles[priority]
      )}
    >
      {priorityLabel[priority]}
    </span>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "good" | "warn" | "accent";
  className?: string;
}) {
  const tones = {
    neutral: "bg-ink/5 text-ink-soft border-ink/10",
    good: "bg-good-soft text-good border-good/20",
    warn: "bg-warn-soft text-warn border-warn/20",
    accent: "bg-accent-soft text-accent-deep border-accent/30",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
