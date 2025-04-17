import {
  FileTextIcon,
  RefreshCwIcon,
  MessageSquareIcon,
  LightbulbIcon,
} from "@/components/icons";

export const tools = [
  {
    id: "summarize",
    tool: "summarize",
    title: "Summarize Text",
    description: "Condense long articles or documents into concise summaries.",
    icon: FileTextIcon,
  },
  {
    id: "rephrase",
    tool: "rephrase",
    title: "Rephrase Text",
    description:
      "Rewrite content in different styles while preserving meaning.",
    icon: RefreshCwIcon,
  },
  {
    id: "chat",
    tool: "chat",
    title: "Chat Assistant",
    description: "Have a conversation with an AI assistant to get answers.",
    icon: MessageSquareIcon,
  },
  {
    id: "ideas",
    tool: "ideas",
    title: "Idea Generator",
    description: "Generate creative ideas for projects, content, and more.",
    icon: LightbulbIcon,
  },
];
