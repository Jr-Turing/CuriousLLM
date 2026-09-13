import Link from "next/link";
import { FileText, BookOpen, ScrollText, NotebookText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StudyDocument } from "@/types";
import { getSubject } from "@/lib/mock-data/subjects";

const kindIcon = {
  syllabus: ScrollText,
  pyq: FileText,
  notes: NotebookText,
  textbook: BookOpen,
};

const kindLabel = {
  syllabus: "Syllabus",
  pyq: "PYQ",
  notes: "Notes",
  textbook: "Textbook",
};

export function DocumentCard({ doc }: { doc: StudyDocument }) {
  const Icon = kindIcon[doc.kind];
  const subject = getSubject(doc.subjectId);

  return (
    <Link href={`/documents/${doc.id}`}>
      <Card className="h-full p-5 transition-colors hover:border-ink/25">
        <div className="mb-3 flex items-start justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink/[0.04] text-ink-soft">
            <Icon size={16} />
          </span>
          {doc.status === "processing" ? (
            <Badge tone="accent">Processing</Badge>
          ) : (
            <Badge tone="neutral">{kindLabel[doc.kind]}</Badge>
          )}
        </div>
        <p className="line-clamp-2 font-serif text-[1.02rem] leading-snug text-ink">{doc.title}</p>
        <p className="mt-2 text-xs text-ink-faint">
          {subject?.name ?? "General"} · {doc.pages} pages · {doc.sizeLabel}
        </p>
      </Card>
    </Link>
  );
}
