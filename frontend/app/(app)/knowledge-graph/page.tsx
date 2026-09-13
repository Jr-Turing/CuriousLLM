import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { KnowledgeGraphView } from "@/components/study/KnowledgeGraphView";
import { knowledgeNodes, knowledgeEdges } from "@/lib/mock-data/chat";

export default function KnowledgeGraphPage() {
  return (
    <PageContainer className="max-w-[1100px]">
      <PageHeader
        eyebrow="Operating Systems"
        title="Knowledge graph"
        description="See how every topic in this subject connects. Click a node to explore it."
      />
      <KnowledgeGraphView nodes={knowledgeNodes} edges={knowledgeEdges} />
    </PageContainer>
  );
}
