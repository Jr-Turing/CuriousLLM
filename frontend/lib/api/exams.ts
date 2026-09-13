import { QuizQuestion, QuizResult } from "@/types";
import { quizQuestions } from "@/lib/mock-data/study";

export async function fetchQuiz(subjectId: string): Promise<QuizQuestion[]> {
  return Promise.resolve(quizQuestions);
}

export async function submitQuiz(answers: number[]): Promise<QuizResult> {
  return Promise.resolve({
    score: 8,
    total: 10,
    strong: ["Process Scheduling"],
    weak: ["Starvation", "Disk Scheduling"],
  });
}
