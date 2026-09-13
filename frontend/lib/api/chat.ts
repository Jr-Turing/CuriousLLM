import { ChatMessage } from "@/types";

export async function sendMessage(
  subjectId: string,
  content: string
): Promise<ChatMessage> {
  // Placeholder response until connected to the RAG backend.
  return Promise.resolve({
    id: `m-${Date.now()}`,
    role: "assistant",
    content:
      "This is a placeholder response. Connect NEXT_PUBLIC_API_URL to CuriousLLM's RAG backend to get grounded answers with citations.",
    createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
}
