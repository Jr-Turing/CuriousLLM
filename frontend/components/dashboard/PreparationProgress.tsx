import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/Progress";

export function PreparationProgress({ value }: { value: number }) {
  return (
    <Card className="p-5">
      <p className="text-[0.7rem] uppercase tracking-wide text-ink-faint">Overall preparation</p>
      <p className="mt-3 font-serif text-4xl text-ink">{value}%</p>
      <div className="mt-4">
        <ProgressBar value={value} />
      </div>
    </Card>
  );
}
