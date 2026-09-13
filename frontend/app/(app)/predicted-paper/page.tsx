import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { SubjectPicker } from "@/components/shared/SubjectPicker";
import { GeneratePaperPanel } from "@/components/exam/GeneratePaperPanel";
import { predictedPaper } from "@/lib/mock-data/predicted-paper";
import { getSubject } from "@/lib/mock-data/subjects";

export default function PredictedPaperPage({
  searchParams,
}: {
  searchParams: { subject?: string };
}) {
  const subjectId = searchParams.subject ?? "os";
  const subject = getSubject(subjectId) ?? getSubject("os")!;

  return (
    <PageContainer className="max-w-[900px]">
      <PageHeader
        eyebrow="AI Probable Question Paper"
        title="Based on syllabus coverage + historical PYQ patterns"
        action={<SubjectPicker current={subjectId} />}
      />
      <GeneratePaperPanel subjectName={subject.name} questions={predictedPaper} />
    </PageContainer>
  );
}
