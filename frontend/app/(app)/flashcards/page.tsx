import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { FlashcardDeck } from "@/components/study/Flashcard";
import { flashcards } from "@/lib/mock-data/study";

export default function FlashcardsPage() {
  return (
    <PageContainer className="max-w-[720px]">
      <PageHeader
        eyebrow="Operating Systems"
        title="Flashcards"
        description="Quick recall practice generated from your notes and textbooks."
      />
      <FlashcardDeck cards={flashcards} />
    </PageContainer>
  );
}
