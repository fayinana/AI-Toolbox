"use client";

import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@/components/markdown-components";

interface ToolResponseProps {
  content: string;
}

export default function ToolResponse({ content }: ToolResponseProps) {
  return (
    <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
  );
}
