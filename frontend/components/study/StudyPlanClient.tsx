"use client";

import { useState } from "react";
import { StudyPlanForm } from "./StudyPlanForm";
import { StudyPlanTimeline } from "./StudyPlanTimeline";
import { StudyPlan } from "@/types";

export function StudyPlanClient({ initialPlan }: { initialPlan: StudyPlan }) {
  const [plan, setPlan] = useState(initialPlan);

  return (
    <div>
      <StudyPlanForm
        onGenerate={(input) =>
          setPlan({ ...plan, examDate: input.examDate, hoursPerDay: input.hours, level: input.level as StudyPlan["level"] })
        }
      />
      <div className="mt-8">
        <h2 className="mb-5 font-serif text-lg text-ink">{plan.days.length}-Day study plan</h2>
        <StudyPlanTimeline days={plan.days} />
      </div>
    </div>
  );
}
