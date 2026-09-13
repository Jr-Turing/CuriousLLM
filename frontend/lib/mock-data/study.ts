import { Flashcard, QuizQuestion, StudyPlan } from "@/types";

export const studyPlan: StudyPlan = {
  subjectId: "os",
  examDate: "2026-10-02",
  hoursPerDay: 3,
  level: "intermediate",
  days: [
    { day: 1, unit: "Unit I", focus: ["OS Overview", "System Calls", "PYQ warm-up"], hours: 3 },
    { day: 2, unit: "Unit II", focus: ["Process Scheduling", "SJF & Round Robin practice"], hours: 3 },
    { day: 3, unit: "Unit III", focus: ["Deadlock conditions", "Banker's Algorithm"], hours: 3 },
    { day: 4, unit: "Unit III", focus: ["Semaphores", "Producer–Consumer problem"], hours: 3 },
    { day: 5, unit: "Unit IV", focus: ["Paging & Segmentation", "Page Replacement"], hours: 3 },
    { day: 6, unit: "Unit V", focus: ["File Allocation Methods", "Disk Scheduling"], hours: 3 },
    { day: 7, unit: "Full Syllabus", focus: ["Mock Test", "Weak topic revision"], hours: 3 },
  ],
};

export const flashcards: Flashcard[] = [
  { id: "fc-1", front: "What is a semaphore?", back: "A synchronization primitive that uses a counter to control access to a shared resource by multiple processes.", unit: "Unit III" },
  { id: "fc-2", front: "Define deadlock.", back: "A state where a set of processes are blocked because each holds a resource and waits for another held by a different process.", unit: "Unit III" },
  { id: "fc-3", front: "What is virtual memory?", back: "A memory management technique that gives an application the illusion of a large, contiguous address space using disk storage.", unit: "Unit IV" },
  { id: "fc-4", front: "What is thrashing?", back: "A condition where excessive page faults cause the system to spend more time swapping pages than executing processes.", unit: "Unit IV" },
  { id: "fc-5", front: "Define a race condition.", back: "A situation where the outcome of a computation depends on the timing of uncontrolled events, such as thread scheduling.", unit: "Unit III" },
  { id: "fc-6", front: "What is context switching?", back: "The process of storing the state of a running process so it can be resumed later, and loading the state of another process.", unit: "Unit II" },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "Which scheduling algorithm can lead to starvation of longer processes?",
    options: ["FCFS", "Shortest Job First", "Round Robin", "FCFS with priority boost"],
    correctIndex: 1,
    topic: "Process Scheduling",
  },
  {
    id: "q2",
    prompt: "Which of these is NOT a necessary condition for deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
    correctIndex: 2,
    topic: "Deadlock",
  },
  {
    id: "q3",
    prompt: "Which page replacement algorithm suffers from Belady's anomaly?",
    options: ["LRU", "Optimal", "FIFO", "Second Chance"],
    correctIndex: 2,
    topic: "Page Replacement",
  },
  {
    id: "q4",
    prompt: "What does the 'P' operation on a semaphore do?",
    options: ["Increments the semaphore", "Decrements the semaphore, may block", "Deletes the semaphore", "Initializes the semaphore"],
    correctIndex: 1,
    topic: "Semaphores",
  },
  {
    id: "q5",
    prompt: "Which disk scheduling algorithm services requests in the order they arrive?",
    options: ["SCAN", "C-SCAN", "FCFS", "SSTF"],
    correctIndex: 2,
    topic: "Disk Scheduling",
  },
];
