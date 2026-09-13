import Link from "next/link";
import { FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { StudyDocument } from "@/types";

export function RecentDocuments({ documents }: { documents: StudyDocument[] }) {
  return (
    <Card>
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h3 className="font-serif text-lg text-ink">Recent documents</h3>
        <Link href="/documents" className="text-sm text-accent-deep hover:underline">
          View all
        </Link>
      </div>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <Link
              href={`/documents/${doc.id}`}
              className="flex items-center gap-3 border-b border-line px-5 py-3.5 last:border-b-0 hover:bg-ink/[0.02]"
            >
              <FileText size={16} className="shrink-0 text-ink-faint" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-ink">{doc.title}</p>
                <p className="text-xs text-ink-faint">
                  {doc.pages} pages · {doc.sizeLabel}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
