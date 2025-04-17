"use client";

import ToolCard from "@/components/tool-card";
import {
  FileTextIcon,
  RefreshCwIcon,
  MessageSquareIcon,
  LightbulbIcon,
} from "@/components/icons";

const tools = [
  {
    id: "summarize",
    title: "Summarize Text",
    description: "Condense long articles or documents into concise summaries.",
    icon: FileTextIcon,
  },
  {
    id: "rephrase",
    title: "Rephrase Text",
    description:
      "Rewrite content in different styles while preserving meaning.",
    icon: RefreshCwIcon,
  },
  {
    id: "chat",
    title: "Chat Assistant",
    description: "Have a conversation with an AI assistant to get answers.",
    icon: MessageSquareIcon,
  },
  {
    id: "ideas",
    title: "Idea Generator",
    description: "Generate creative ideas for projects, content, and more.",
    icon: LightbulbIcon,
  },
];

export default function Toolbox() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-down">
        AI Toolbox
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center animate-fade-in-down animation-delay-200">
        Select a tool to get started with AI-powered assistance
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className={`animate-fade-in-up animation-delay-${
              (index + 1) * 100
            } h-full flex`}
          >
            <ToolCard
              id={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
