import { Card } from "@/components/ui/Card";
import { RepeatedQuestion } from "@/types";

export function RepeatedQuestions({ items }: { items: RepeatedQuestion[] }) {
  return (
    <Card>
      <div className="border-b border-line px-5 py-4">
        <h3 className="font-serif text-lg text-ink">Repeated questions</h3>
      </div>
      <ul>
        {items.map((q) => (
          <li key={q.question} className="border-b border-line px-5 py-4 last:border-b-0">
            <p className="text-sm text-ink">{q.question}</p>
            <p className="mt-1.5 text-xs text-ink-faint">
              Appeared {q.appeared} times · {q.unit}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
