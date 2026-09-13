import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, FileText, ScrollText, Star, PenSquare, Layers, ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/Progress";
import { LinkButton } from "@/components/ui/Button";
import { subjects, getSubject } from "@/lib/mock-data/subjects";
import { documentsForSubject } from "@/lib/mock-data/documents";

const unitActions = [
  { label: "Learn", icon: BookOpen, href: "/chat" },
  { label: "Summary", icon: FileText, href: "/chat" },
  { label: "PYQs", icon: ScrollText, href: "/pyq-analysis" },
  { label: "Important", icon: Star, href: "/predicted-paper" },
  { label: "Quiz", icon: PenSquare, href: "/quiz" },
  { label: "Flashcards", icon: Layers, href: "/flashcards" },
];

export function generateStaticParams() {
  return subjects.map((s) => ({ id: s.id }));
}

export default function SubjectDetailPage({ params }: { params: { id: string } }) {
  const subject = getSubject(params.id);
  if (!subject) notFound();

  const docs = documentsForSubject(subject.id);
  const nextUnit = subject.units.find((u) => u.progress < 100) ?? subject.units[0];

  return (
    <PageContainer>
      <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-1.5 text-sm text-accent-deep">
            {subject.program} · Semester {subject.semester} · {subject.code}
          </p>
          <h1 className="font-serif text-[1.9rem] text-ink">{subject.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-40">
              <ProgressBar value={subject.preparation} />
            </div>
            <span className="text-sm text-ink-soft">{subject.preparation}% prepared</span>
          </div>
        </div>
        <LinkButton href={`/chat?subject=${subject.id}&unit=${nextUnit.id}`} className="gap-2">
          Continue learning <ArrowRight size={15} />
        </LinkButton>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="mb-4 font-serif text-lg text-ink">Units</h2>
          <div className="space-y-3">
            {subject.units.map((unit, i) => (
              <Card key={unit.id} className="p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-ink-faint">Unit {toRoman(i + 1)}</p>
                    <p className="font-serif text-[1.05rem] text-ink">{unit.name}</p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-ink-faint">{unit.progress}%</span>
                </div>
                <ProgressBar value={unit.progress} className="mb-4" />
                <div className="flex flex-wrap gap-2">
                  {unitActions.map((action) => (
                    <Link
                      key={action.label}
                      href={`${action.href}?subject=${subject.id}&unit=${unit.id}`}
                      className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 text-xs text-ink-soft hover:border-ink/25 hover:text-ink"
                    >
                      <action.icon size={13} /> {action.label}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <p className="mb-3 text-[0.7rem] uppercase tracking-wide text-ink-faint">Strong topics</p>
            <ul className="space-y-1.5 text-sm text-ink">
              {subject.strongTopics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <p className="mb-3 text-[0.7rem] uppercase tracking-wide text-ink-faint">Weak topics</p>
            <ul className="space-y-1.5 text-sm text-ink">
              {subject.weakTopics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="border-b border-line px-5 py-3.5">
              <p className="text-[0.7rem] uppercase tracking-wide text-ink-faint">Source documents</p>
            </div>
            <ul>
              {docs.length === 0 && <li className="px-5 py-4 text-sm text-ink-faint">No documents uploaded yet.</li>}
              {docs.map((d) => (
                <li key={d.id} className="border-b border-line px-5 py-3 text-sm text-ink last:border-b-0">
                  {d.title}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

function toRoman(n: number) {
  return ["I", "II", "III", "IV", "V", "VI"][n - 1] ?? String(n);
}
