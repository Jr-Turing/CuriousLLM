import { PageContainer } from "@/components/layout/PageContainer";
import { SubjectPicker } from "@/components/shared/SubjectPicker";
import { FrequencyChart } from "@/components/pyq/FrequencyChart";
import { TopicPriority } from "@/components/pyq/TopicPriority";
import { RepeatedQuestions } from "@/components/pyq/RepeatedQuestions";
import { UnitWeightage } from "@/components/pyq/UnitWeightage";
import { Card } from "@/components/ui/Card";
import { getPyqAnalysis } from "@/lib/mock-data/pyq";
import { getSubject } from "@/lib/mock-data/subjects";

export default function PyqAnalysisPage({
  searchParams,
}: {
  searchParams: { subject?: string };
}) {
  const subjectId = searchParams.subject ?? "os";
  const analysis = getPyqAnalysis(subjectId);
  const subject = getSubject(analysis.subjectId);

  return (
    <PageContainer>
      <div className="mb-8 flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-1.5 text-sm text-accent-deep">PYQ Intelligence</p>
          <h1 className="font-serif text-[1.75rem] text-ink md:text-[2.1rem]">
            Understand what your university has been asking
          </h1>
          <p className="mt-2 text-sm text-ink-faint">
            {subject?.name} · {analysis.totalPapers} papers analyzed · {analysis.yearsCovered}
          </p>
        </div>
        <SubjectPicker current={subjectId} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="mb-4 font-serif text-lg text-ink">Question frequency</h2>
            <FrequencyChart data={analysis.frequencies} />
          </Card>

          <Card className="p-5">
            <h2 className="mb-4 font-serif text-lg text-ink">Unit-wise weightage</h2>
            <UnitWeightage data={analysis.unitWeightage} />
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
              {analysis.unitWeightage.map((u) => (
                <div key={u.unit} className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "#C1791F" }}
                  />
                  {u.unit} — {u.weight}%
                </div>
              ))}
            </div>
          </Card>

          <RepeatedQuestions items={analysis.repeated} />
        </div>

        <div>
          <h2 className="mb-4 font-serif text-lg text-ink">Topic priority</h2>
          <TopicPriority data={analysis.frequencies} />
        </div>
      </div>
    </PageContainer>
  );
}
