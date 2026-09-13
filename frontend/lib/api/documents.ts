import { StudyDocument } from "@/types";
import { documents } from "@/lib/mock-data/documents";
import { apiClient } from "./client";

// Swap the mock implementations below for apiClient.request calls once the
// FastAPI backend is available, e.g.:
// return apiClient.request<StudyDocument[]>("/api/documents");

export async function listDocuments(): Promise<StudyDocument[]> {
  return Promise.resolve(documents);
}

export async function getDocument(id: string): Promise<StudyDocument | undefined> {
  return Promise.resolve(documents.find((d) => d.id === id));
}

export async function uploadDocument(file: File): Promise<{ id: string }> {
  // Placeholder until the backend accepts multipart uploads.
  return Promise.resolve({ id: `doc-${Date.now()}` });
}

export { apiClient };
