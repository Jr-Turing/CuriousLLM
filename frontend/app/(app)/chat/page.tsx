import { PageContainer } from "@/components/layout/PageContainer";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { initialChat } from "@/lib/mock-data/chat";
import { getSubject } from "@/lib/mock-data/subjects";

export default function ChatPage({
  searchParams,
}: {
  searchParams: { subject?: string };
}) {
  const subject = getSubject(searchParams.subject ?? "os") ?? getSubject("os")!;

  return (
    <PageContainer className="max-w-[900px]">
      <div className="mb-5 border-b border-line pb-4">
        <p className="text-sm text-accent-deep">{subject.name}</p>
        <h1 className="font-serif text-2xl text-ink">AI Study Assistant</h1>
      </div>
      <ChatWindow initialMessages={initialChat} subjectId={subject.id} />
    </PageContainer>
  );
}
