import { PYQAnalysis } from "@/types";

export const pyqAnalyses: Record<string, PYQAnalysis> = {
  os: {
    subjectId: "os",
    totalPapers: 14,
    yearsCovered: "2019 – 2025",
    frequencies: [
      { topic: "Process Scheduling", unit: "Unit II", frequency: 8, priority: "high", syllabusRelevance: "high" },
      { topic: "Deadlock", unit: "Unit III", frequency: 6, priority: "high", syllabusRelevance: "high" },
      { topic: "Virtual Memory", unit: "Unit IV", frequency: 5, priority: "medium", syllabusRelevance: "high" },
      { topic: "Page Replacement", unit: "Unit IV", frequency: 4, priority: "medium", syllabusRelevance: "medium" },
      { topic: "File Systems", unit: "Unit V", frequency: 3, priority: "low", syllabusRelevance: "medium" },
      { topic: "Semaphores", unit: "Unit III", frequency: 5, priority: "medium", syllabusRelevance: "high" },
      { topic: "Disk Scheduling", unit: "Unit V", frequency: 3, priority: "low", syllabusRelevance: "medium" },
    ],
    repeated: [
      { question: "Explain the process scheduling algorithms with examples.", appeared: 6, unit: "Unit II" },
      { question: "What is a deadlock? Explain the necessary conditions for deadlock.", appeared: 5, unit: "Unit III" },
      { question: "Explain page replacement algorithms with a suitable example.", appeared: 4, unit: "Unit IV" },
      { question: "Differentiate between paging and segmentation.", appeared: 3, unit: "Unit IV" },
    ],
    unitWeightage: [
      { unit: "Unit I — OS Overview", weight: 10 },
      { unit: "Unit II — Process Management", weight: 28 },
      { unit: "Unit III — Synchronization", weight: 24 },
      { unit: "Unit IV — Memory Management", weight: 26 },
      { unit: "Unit V — File Systems", weight: 12 },
    ],
  },
  cn: {
    subjectId: "cn",
    totalPapers: 11,
    yearsCovered: "2020 – 2025",
    frequencies: [
      { topic: "Routing Algorithms", unit: "Unit III", frequency: 7, priority: "high", syllabusRelevance: "high" },
      { topic: "TCP Congestion Control", unit: "Unit IV", frequency: 6, priority: "high", syllabusRelevance: "high" },
      { topic: "OSI vs TCP/IP Model", unit: "Unit I", frequency: 5, priority: "medium", syllabusRelevance: "high" },
      { topic: "IP Addressing & Subnetting", unit: "Unit III", frequency: 5, priority: "medium", syllabusRelevance: "high" },
      { topic: "Error Detection & Correction", unit: "Unit II", frequency: 4, priority: "low", syllabusRelevance: "medium" },
    ],
    repeated: [
      { question: "Explain Dijkstra's algorithm for shortest path routing.", appeared: 5, unit: "Unit III" },
      { question: "Describe TCP congestion control mechanisms.", appeared: 4, unit: "Unit IV" },
      { question: "Compare the OSI and TCP/IP reference models.", appeared: 4, unit: "Unit I" },
    ],
    unitWeightage: [
      { unit: "Unit I — Fundamentals", weight: 16 },
      { unit: "Unit II — Data Link Layer", weight: 20 },
      { unit: "Unit III — Network Layer", weight: 30 },
      { unit: "Unit IV — Transport Layer", weight: 22 },
      { unit: "Unit V — Application Layer", weight: 12 },
    ],
  },
};

export function getPyqAnalysis(subjectId: string) {
  return pyqAnalyses[subjectId] ?? pyqAnalyses["os"];
}
