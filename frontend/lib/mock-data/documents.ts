import { StudyDocument } from "@/types";

export const documents: StudyDocument[] = [
  {
    id: "doc-1",
    title: "Operating Systems — MAKAUT Syllabus 2024",
    subjectId: "os",
    kind: "syllabus",
    pages: 6,
    uploadedAt: "2026-08-02",
    status: "ready",
    sizeLabel: "0.4 MB",
  },
  {
    id: "doc-2",
    title: "Operating Systems — PYQs 2019–2025",
    subjectId: "os",
    kind: "pyq",
    pages: 42,
    uploadedAt: "2026-08-02",
    status: "ready",
    sizeLabel: "3.1 MB",
  },
  {
    id: "doc-3",
    title: "Galvin — Operating System Concepts",
    subjectId: "os",
    kind: "textbook",
    pages: 944,
    uploadedAt: "2026-08-03",
    status: "ready",
    sizeLabel: "18.2 MB",
  },
  {
    id: "doc-4",
    title: "OS Class Notes — Unit III & IV",
    subjectId: "os",
    kind: "notes",
    pages: 28,
    uploadedAt: "2026-08-10",
    status: "ready",
    sizeLabel: "1.6 MB",
  },
  {
    id: "doc-5",
    title: "Computer Networks — PYQs 2018–2025",
    subjectId: "cn",
    kind: "pyq",
    pages: 36,
    uploadedAt: "2026-08-11",
    status: "ready",
    sizeLabel: "2.4 MB",
  },
  {
    id: "doc-6",
    title: "DBMS — Unit II Notes: SQL & Relational Algebra",
    subjectId: "dbms",
    kind: "notes",
    pages: 19,
    uploadedAt: "2026-08-14",
    status: "processing",
    sizeLabel: "0.9 MB",
  },
  {
    id: "doc-7",
    title: "Cyber Security — MAKAUT Syllabus 2024",
    subjectId: "cs",
    kind: "syllabus",
    pages: 5,
    uploadedAt: "2026-08-20",
    status: "ready",
    sizeLabel: "0.3 MB",
  },
];

export function documentsForSubject(subjectId: string) {
  return documents.filter((d) => d.subjectId === subjectId);
}
