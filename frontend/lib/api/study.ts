import { StudyPlan } from "@/types";
import { studyPlan } from "@/lib/mock-data/study";

export async function generateStudyPlan(input: {
  subjectId: string;
  examDate: string;
  hoursPerDay: number;
  level: string;
}): Promise<StudyPlan> {
  return Promise.resolve(studyPlan);
}
