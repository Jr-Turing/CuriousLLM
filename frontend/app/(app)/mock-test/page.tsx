import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { MockExam } from "@/components/exam/MockExam";
import { quizQuestions } from "@/lib/mock-data/study";

export default function MockTestPage() {
  const questions = [...quizQuestions, ...quizQuestions.map((q) => ({ ...q, id: q.id + "-b" }))];

  return (
    <PageContainer className="max-w-[1000px]">
      <PageHeader
        eyebrow="Operating Systems"
        title="Mock examination"
        description="A timed, exam-style test with question navigation and a full results breakdown."
      />
      <MockExam questions={questions} durationMinutes={20} />
    </PageContainer>
  );
}
