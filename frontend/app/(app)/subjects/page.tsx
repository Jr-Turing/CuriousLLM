import Link from "next/link";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/Progress";
import { subjects } from "@/lib/mock-data/subjects";

export default function SubjectsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="B.Tech CSE · MAKAUT"
        title="Subjects"
        description="Every subject CuriousLLM has analyzed from your syllabus, PYQs and notes."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => (
          <Link key={s.id} href={`/subjects/${s.id}`}>
            <Card className="h-full p-5 transition-colors hover:border-ink/25">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-[0.68rem] text-ink-faint">
                  {s.code}
                </span>
                <span className="text-xs text-ink-faint">Sem {s.semester}</span>
              </div>
              <h3 className="font-serif text-lg text-ink">{s.name}</h3>
              <div className="mt-4">
                <div className="mb-1.5 flex justify-between text-xs text-ink-faint">
                  <span>Preparation</span>
                  <span>{s.preparation}%</span>
                </div>
                <ProgressBar value={s.preparation} className="bg-accent" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
