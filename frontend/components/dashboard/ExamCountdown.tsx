import { Card } from "@/components/ui/Card";

export function ExamCountdown({ days, examLabel }: { days: number; examLabel: string }) {
  return (
    <Card className="p-5">
      <p className="text-[0.7rem] uppercase tracking-wide text-ink-faint">{examLabel}</p>
      <p className="mt-3 font-serif text-4xl text-ink">
        {days} <span className="text-lg font-normal text-ink-soft">days remaining</span>
      </p>
    </Card>
  );
}
