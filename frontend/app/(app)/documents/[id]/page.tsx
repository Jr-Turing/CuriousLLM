import { notFound } from "next/navigation";
import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { DocumentViewer } from "@/components/documents/DocumentViewer";
import { documents } from "@/lib/mock-data/documents";
import { getSubject } from "@/lib/mock-data/subjects";

export function generateStaticParams() {
  return documents.map((d) => ({ id: d.id }));
}

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const doc = documents.find((d) => d.id === params.id);
  if (!doc) notFound();
  const subject = getSubject(doc.subjectId);

  return (
    <PageContainer className="max-w-[1400px]">
      <PageHeader
        eyebrow={subject?.name}
        title={doc.title}
        description={`${doc.pages} pages · ${doc.sizeLabel} · Uploaded ${doc.uploadedAt}`}
      />
      <DocumentViewer doc={doc} />
    </PageContainer>
  );
}
