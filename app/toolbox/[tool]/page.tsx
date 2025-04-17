import { notFound } from "next/navigation";
import { toolData } from "@/data/toolData";
import ToolClientPage from "@/components/tool-client-page"; // your client page here
import { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: { tool: string };
}) {
  const tool = toolData[params.tool as keyof typeof toolData];
  if (!tool) return { title: "Tool Not Found | AI Toolbox" };

  return {
    title: tool.title,
    description: tool.description,
  };
}

export default function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: toolParam } = use(params);
  const tool = toolData[toolParam as keyof typeof toolData];
  if (!tool) return notFound();

  return <ToolClientPage toolParam={toolParam} tool={tool} />;
}
