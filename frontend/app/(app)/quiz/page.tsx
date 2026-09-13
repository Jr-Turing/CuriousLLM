import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Quiz } from "@/components/exam/Quiz";
import { quizQuestions } from "@/lib/mock-data/study";

export default function QuizPage() {
  return (
    <PageContainer className="max-w-[720px]">
      <PageHeader eyebrow="Operating Systems" title="Quiz" description="Ten quick questions to check your recall." />
      <Quiz questions={quizQuestions} />
    </PageContainer>
  );
}
