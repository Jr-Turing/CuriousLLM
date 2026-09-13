import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { VivaSimulator } from "@/components/study/VivaSimulator";
import { vivaScript } from "@/lib/mock-data/chat";

export default function VivaPage() {
  return (
    <PageContainer className="max-w-[700px]">
      <PageHeader title="Viva simulator" description="Practice an oral exam with an AI examiner." />
      <VivaSimulator script={vivaScript} />
    </PageContainer>
  );
}
