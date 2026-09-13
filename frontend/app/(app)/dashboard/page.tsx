import { PageContainer } from "@/components/layout/PageContainer";
import { ExamCountdown } from "@/components/dashboard/ExamCountdown";
import { PreparationProgress } from "@/components/dashboard/PreparationProgress";
import { StrongTopics, WeakTopics } from "@/components/dashboard/TopicLists";
import { RecentDocuments } from "@/components/dashboard/RecentDocuments";
import { ContinueLearning } from "@/components/dashboard/ContinueLearning";
import { SemesterSwitcher } from "@/components/dashboard/SemesterSwitcher";
import { subjects } from "@/lib/mock-data/subjects";
import { documents } from "@/lib/mock-data/documents";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const os = subjects.find((s) => s.id === "os")!;
  const avgPrep = Math.round(subjects.reduce((a, s) => a + s.preparation, 0) / subjects.length);
  const continueSubjects = subjects.slice(0, 4);
  const recentDocs = documents.slice(0, 5);

  return (
    <PageContainer>
      <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-[1.75rem] text-ink md:text-[2.1rem]">Good evening, Arvind 👋</h1>
          <p className="mt-1.5 text-[0.95rem] text-ink-soft">Ready to prepare smarter today?</p>
        </div>
        <SemesterSwitcher program={os.program} semester={os.semester} university={os.university} />
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ExamCountdown days={24} examLabel="Semester examination" />
        <PreparationProgress value={avgPrep} />
        <StrongTopics topics={os.strongTopics} />
        <WeakTopics topics={os.weakTopics} />
      </div>

      <div className="mb-6 rounded-md border border-line bg-navy p-6 text-white">
        <p className="text-[0.7rem] uppercase tracking-wide text-white/50">What should I study next?</p>
        <p className="mt-2 max-w-xl font-serif text-lg">
          Deadlock appears in 6 of the last 14 Operating Systems papers — and it&rsquo;s your weakest topic.
        </p>
        <LinkButton href="/subjects/os" variant="secondary" size="sm" className="mt-4 gap-1.5 border-white/25 text-white hover:border-white/50">
          Review deadlock now <ArrowRight size={14} />
        </LinkButton>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <RecentDocuments documents={recentDocs} />
        <ContinueLearning subjects={continueSubjects} />
      </div>
    </PageContainer>
  );
}
