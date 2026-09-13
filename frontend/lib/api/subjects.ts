import { Subject } from "@/types";
import { subjects, getSubject } from "@/lib/mock-data/subjects";

export async function listSubjects(): Promise<Subject[]> {
  return Promise.resolve(subjects);
}

export async function fetchSubject(id: string): Promise<Subject | undefined> {
  return Promise.resolve(getSubject(id));
}
