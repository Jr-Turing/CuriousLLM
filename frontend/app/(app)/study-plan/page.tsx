import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { StudyPlanClient } from "@/components/study/StudyPlanClient";
import { studyPlan } from "@/lib/mock-data/study";

export default function StudyPlanPage() {
  return (
    <PageContainer className="max-w-[820px]">
      <PageHeader
        eyebrow="Personalized"
        title="Study plan"
        description="Tell CuriousLLM when your exam is and how much time you have — it builds a day-by-day plan around your weak topics."
      />
      <StudyPlanClient initialPlan={studyPlan} />
    </PageContainer>
  );
}
