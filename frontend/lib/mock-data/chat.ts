import { ChatMessage, KnowledgeEdge, KnowledgeNode, VivaTurn } from "@/types";

export const suggestedPrompts = [
  "Explain this in simple language",
  "Give me important PYQs",
  "Summarize this unit",
  "Create flashcards",
  "What should I study first?",
  "Generate probable questions",
];

export const initialChat: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    content: "Explain semaphores in simple language.",
    createdAt: "10:02 AM",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "A semaphore is a synchronization mechanism used to control access to a shared resource by multiple processes. It maintains a counter and two atomic operations, wait (P) and signal (V), that increase or decrease the counter. When the counter reaches zero, further processes requesting the resource are blocked until it is released.\n\nA binary semaphore (0 or 1) behaves like a lock, while a counting semaphore allows a fixed number of processes to access a resource pool simultaneously — such as a set of identical printers.",
    sources: [
      { document: "Operating Systems.pdf", page: 87 },
      { document: "OS Class Notes — Unit III & IV", page: 12 },
    ],
    createdAt: "10:02 AM",
  },
];

export const knowledgeNodes: KnowledgeNode[] = [
  { id: "root", label: "Operating System", group: "root" },
  { id: "process", label: "Process", group: "branch" },
  { id: "memory", label: "Memory", group: "branch" },
  { id: "file", label: "File System", group: "branch" },
  { id: "cpu", label: "CPU Scheduling", group: "leaf" },
  { id: "sync", label: "Synchronization", group: "leaf" },
  { id: "deadlock", label: "Deadlock", group: "leaf" },
  { id: "paging", label: "Paging", group: "leaf" },
  { id: "vmem", label: "Virtual Memory", group: "leaf" },
  { id: "alloc", label: "Allocation Methods", group: "leaf" },
  { id: "dirstruct", label: "Directory Structure", group: "leaf" },
];

export const knowledgeEdges: KnowledgeEdge[] = [
  { source: "root", target: "process" },
  { source: "root", target: "memory" },
  { source: "root", target: "file" },
  { source: "process", target: "cpu" },
  { source: "process", target: "sync" },
  { source: "sync", target: "deadlock" },
  { source: "memory", target: "paging" },
  { source: "memory", target: "vmem" },
  { source: "file", target: "alloc" },
  { source: "file", target: "dirstruct" },
];

export const vivaScript: VivaTurn[] = [
  {
    id: "v1",
    role: "examiner",
    content: "Let's begin. Explain what a deadlock is.",
  },
  {
    id: "v2",
    role: "student",
    content:
      "A deadlock is a situation where two or more processes are waiting indefinitely for resources held by each other, so none of them can proceed.",
    evaluation: { concept: 8, accuracy: 9, clarity: 7, overall: 8.0 },
  },
  {
    id: "v3",
    role: "examiner",
    content: "Good. Now name the four necessary conditions for a deadlock.",
  },
];
