export type Priority = "high" | "medium" | "low";

export interface Unit {
  id: string;
  name: string;
  progress: number; // 0-100
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  semester: number;
  program: string;
  university: string;
  preparation: number; // 0-100
  units: Unit[];
  strongTopics: string[];
  weakTopics: string[];
  color: string;
}

export type DocumentKind = "syllabus" | "pyq" | "notes" | "textbook";
export type DocumentStatus = "processing" | "ready" | "failed";

export interface StudyDocument {
  id: string;
  title: string;
  subjectId: string;
  kind: DocumentKind;
  pages: number;
  uploadedAt: string;
  status: DocumentStatus;
  sizeLabel: string;
}

export interface TopicFrequency {
  topic: string;
  unit: string;
  frequency: number;
  priority: Priority;
  syllabusRelevance: Priority;
}

export interface RepeatedQuestion {
  question: string;
  appeared: number;
  unit: string;
}

export interface PYQAnalysis {
  subjectId: string;
  totalPapers: number;
  yearsCovered: string;
  frequencies: TopicFrequency[];
  repeated: RepeatedQuestion[];
  unitWeightage: { unit: string; weight: number }[];
}

export interface ProbableQuestion {
  id: string;
  section: "A" | "B" | "C";
  text: string;
  topic: string;
  unit: string;
  frequency: number;
  syllabusRelevance: Priority;
  patternScore: Priority;
  marks: number;
}

export interface StudyDayPlan {
  day: number;
  unit: string;
  focus: string[];
  hours: number;
}

export interface StudyPlan {
  subjectId: string;
  examDate: string;
  hoursPerDay: number;
  level: "beginner" | "intermediate" | "advanced";
  days: StudyDayPlan[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  unit: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  topic: string;
}

export interface QuizResult {
  score: number;
  total: number;
  strong: string[];
  weak: string[];
}

export interface ChatSource {
  document: string;
  page: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: ChatSource[];
  createdAt: string;
}

export interface VivaTurn {
  id: string;
  role: "examiner" | "student";
  content: string;
  evaluation?: {
    concept: number;
    accuracy: number;
    clarity: number;
    overall: number;
  };
}

export interface KnowledgeNode {
  id: string;
  label: string;
  group: "root" | "branch" | "leaf";
}

export interface KnowledgeEdge {
  source: string;
  target: string;
}
