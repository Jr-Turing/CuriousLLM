import { Check, TriangleAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function StrongTopics({ topics }: { topics: string[] }) {
  return (
    <Card className="p-5">
      <p className="mb-3 text-[0.7rem] uppercase tracking-wide text-ink-faint">Strong topics</p>
      <ul className="space-y-2">
        {topics.map((t) => (
          <li key={t} className="flex items-center gap-2 text-sm text-ink">
            <Check size={14} className="shrink-0 text-good" /> {t}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function WeakTopics({ topics }: { topics: string[] }) {
  return (
    <Card className="p-5">
      <p className="mb-3 text-[0.7rem] uppercase tracking-wide text-ink-faint">Weak topics</p>
      <ul className="space-y-2">
        {topics.map((t) => (
          <li key={t} className="flex items-center gap-2 text-sm text-ink">
            <TriangleAlert size={14} className="shrink-0 text-warn" /> {t}
          </li>
        ))}
      </ul>
    </Card>
  );
}
