import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { UploadZone } from "@/components/documents/UploadZone";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { documents } from "@/lib/mock-data/documents";

export default function DocumentsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Documents"
        description="Upload your syllabus, PYQs, notes and textbooks — CuriousLLM builds your AI knowledge base from these."
      />
      <div className="mb-10">
        <UploadZone />
      </div>
      <h2 className="mb-4 font-serif text-lg text-ink">Your library</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </PageContainer>
  );
}
