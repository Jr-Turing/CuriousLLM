import { Flame, Star, BookMarked } from "lucide-react";
import { TopicFrequency } from "@/types";

const groups = [
  { key: "high" as const, label: "Must study", icon: Flame, tone: "text-warn" },
  { key: "medium" as const, label: "Important", icon: Star, tone: "text-accent-deep" },
  { key: "low" as const, label: "Recommended", icon: BookMarked, tone: "text-ink-soft" },
];

export function TopicPriority({ data }: { data: TopicFrequency[] }) {
  return (
    <div className="space-y-3">
      {groups.map((g) => {
        const topics = data.filter((d) => d.priority === g.key);
        return (
          <div key={g.key} className="rounded-md border border-line bg-surface p-4">
            <div className={`mb-3 flex items-center gap-2 text-sm font-medium ${g.tone}`}>
              <g.icon size={15} /> {g.label}
            </div>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              {topics.length === 0 && <li className="text-ink-faint">None in this tier</li>}
              {topics.map((t) => (
                <li key={t.topic}>{t.topic}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
