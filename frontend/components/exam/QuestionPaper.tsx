import { Badge, PriorityBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProbableQuestion } from "@/types";

const sectionLabels: Record<string, string> = {
  A: "Section A — Short Answer Questions",
  B: "Section B — Broad Answer Questions",
  C: "Section C — Long Answer Questions",
};

export function QuestionPaper({ questions }: { questions: ProbableQuestion[] }) {
  const sections = ["A", "B", "C"] as const;

  return (
    <div className="space-y-8">
      {sections.map((sec) => {
        const items = questions.filter((q) => q.section === sec);
        if (items.length === 0) return null;
        return (
          <div key={sec}>
            <h3 className="mb-3 font-serif text-lg text-ink">{sectionLabels[sec]}</h3>
            <div className="space-y-3">
              {items.map((q, i) => (
                <Card key={q.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-ink">
                      <span className="mr-1.5 font-medium">Q{i + 1}.</span>
                      {q.text}
                    </p>
                    <Badge tone="neutral" className="shrink-0">{q.marks} marks</Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line pt-3 text-xs text-ink-faint">
                    <span>{q.topic} · {q.unit}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-faint" />
                    <span>PYQ frequency: {q.frequency}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-faint" />
                    <span>Syllabus relevance: {q.syllabusRelevance}</span>
                    <PriorityBadge priority={q.patternScore} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
