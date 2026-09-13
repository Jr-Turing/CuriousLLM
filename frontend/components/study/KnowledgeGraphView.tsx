"use client";

import { useMemo, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { KnowledgeEdge, KnowledgeNode } from "@/types";

const groupColor: Record<string, string> = {
  root: "#1B2430",
  branch: "#C1791F",
  leaf: "#5A5E68",
};

function layout(nodes: KnowledgeNode[], edges: KnowledgeEdge[]): Node[] {
  const byGroup: Record<string, KnowledgeNode[]> = { root: [], branch: [], leaf: [] };
  nodes.forEach((n) => byGroup[n.group].push(n));

  const positioned: Node[] = [];
  byGroup.root.forEach((n, i) => {
    positioned.push({
      id: n.id,
      data: { label: n.label },
      position: { x: 320, y: 20 },
      style: nodeStyle(n.group),
    });
  });
  byGroup.branch.forEach((n, i) => {
    positioned.push({
      id: n.id,
      data: { label: n.label },
      position: { x: 80 + i * 260, y: 160 },
      style: nodeStyle(n.group),
    });
  });
  const leavesByParent: Record<string, number> = {};
  byGroup.leaf.forEach((n) => {
    const parentEdge = edges.find((e) => e.target === n.id);
    const parent = parentEdge?.source ?? "root";
    const idx = leavesByParent[parent] ?? 0;
    leavesByParent[parent] = idx + 1;
    const parentNode = positioned.find((p) => p.id === parent);
    const baseX = parentNode ? parentNode.position.x - 60 : 0;
    positioned.push({
      id: n.id,
      data: { label: n.label },
      position: { x: baseX + idx * 130, y: 320 },
      style: nodeStyle(n.group),
    });
  });
  return positioned;
}

function nodeStyle(group: string) {
  return {
    background: group === "leaf" ? "#FFFFFF" : groupColor[group],
    color: group === "leaf" ? "#14161A" : "#FFFFFF",
    border: `1px solid ${group === "leaf" ? "#E5E1D6" : groupColor[group]}`,
    borderRadius: 6,
    fontSize: 12,
    padding: "8px 12px",
    fontFamily: "Inter, sans-serif",
  };
}

export function KnowledgeGraphView({ nodes, edges }: { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] }) {
  const initialNodes = useMemo(() => layout(nodes, edges), [nodes, edges]);
  const initialEdges: Edge[] = useMemo(
    () =>
      edges.map((e) => ({
        id: `${e.source}-${e.target}`,
        source: e.source,
        target: e.target,
        style: { stroke: "#C9C3B3" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#C9C3B3" },
      })),
    [edges]
  );

  const [rfNodes, , onNodesChange] = useNodesState(initialNodes);
  const [rfEdges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState<string | null>(null);

  const onNodeClick = useCallback((_: unknown, node: Node) => setSelected(node.data.label), []);

  return (
    <div>
      <div className="h-[560px] overflow-hidden rounded-md border border-line bg-surface">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#E5E1D6" gap={20} />
          <Controls showInteractive={false} />
          <MiniMap
            pannable
            zoomable
            nodeColor={(n) => (n.style?.background as string) ?? "#8A8D96"}
            maskColor="rgba(250,249,245,0.7)"
          />
        </ReactFlow>
      </div>
      {selected && (
        <p className="mt-3 text-sm text-ink-soft">
          Selected: <span className="font-medium text-ink">{selected}</span> — open in{" "}
          <a href="/chat" className="text-accent-deep hover:underline">
            AI chat
          </a>{" "}
          to explore this topic.
        </p>
      )}
    </div>
  );
}
