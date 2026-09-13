import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Subject } from "@/types";

export function ContinueLearning({ subjects }: { subjects: Subject[] }) {
  return (
    <Card>
      <div className="border-b border-line px-5 py-4">
        <h3 className="font-serif text-lg text-ink">Continue learning</h3>
      </div>
      <ul>
        {subjects.map((s) => {
          const nextUnit = s.units.find((u) => u.progress < 100) ?? s.units[0];
          return (
            <li key={s.id}>
              <Link
                href={`/subjects/${s.id}`}
                className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 last:border-b-0 hover:bg-ink/[0.02]"
              >
                <div className="min-w-0">
                  <p className="text-sm text-ink">{s.name}</p>
                  <p className="truncate text-xs text-ink-faint">{nextUnit.name}</p>
                </div>
                <ArrowRight size={15} className="shrink-0 text-ink-faint" />
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
