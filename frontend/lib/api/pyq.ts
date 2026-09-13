import { PYQAnalysis } from "@/types";
import { getPyqAnalysis } from "@/lib/mock-data/pyq";
import { predictedPaper } from "@/lib/mock-data/predicted-paper";

export async function fetchPyqAnalysis(subjectId: string): Promise<PYQAnalysis> {
  return Promise.resolve(getPyqAnalysis(subjectId));
}

export async function generateProbablePaper(subjectId: string) {
  return Promise.resolve(predictedPaper);
}
