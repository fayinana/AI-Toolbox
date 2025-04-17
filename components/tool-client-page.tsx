"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToolResponse from "@/components/tool-response";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/icons";

export default function ToolClientPage({
  toolParam,
  tool,
}: {
  toolParam: string;
  tool: any;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<{ input: string; output: string }[]>([]);

  if (!tool) return null;

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  const handleRun = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: toolParam, input }),
      });

      if (!response.ok) throw new Error("Failed to generate response");

      const data = await response.json();
      setChats((prev) => [...prev, { input, output: data.result }]);
      setInput("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push("/toolbox")}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Toolbox
      </Button>

      <h1 className="text-3xl font-bold mb-2">{tool.title}</h1>
      <p className="text-muted-foreground mb-8">{tool.description}</p>

      <div className="flex flex-col gap-4">
        {chats.length === 0 && (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground text-lg">
              Start a conversation with the AI assistant.
            </p>
          </div>
        )}

        {chats.map((chat, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* User Message (Left) */}
            <div className="relative bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-4 self-start max-w-[80%] rounded-lg shadow-sm border border-slate-200 dark:border-slate-700/50">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 tracking-wider uppercase">
                You
              </p>
              <p className="text-slate-700 dark:text-slate-100 text-[15px] leading-relaxed whitespace-pre-wrap">
                {chat.input}
              </p>
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white  dark:border-r-slate-800 border-b-8 border-b-transparent"></div>
            </div>

            {/* AI Message (Right) */}
            <div className="relative bg-indigo-50 dark:bg-indigo-600 text-indigo-900 dark:text-white p-4 self-end max-w-[80%] rounded-lg shadow-sm border border-indigo-100 dark:border-transparent">
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-200 mb-1.5 tracking-wider uppercase">
                AI Assistant
              </p>
              <div className="text-indigo-800 dark:text-indigo-50 text-[15px] leading-relaxed">
                <ToolResponse content={chat.output} />
              </div>
              <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-indigo-50 dark:border-l-indigo-600 border-b-8 border-b-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: "120px" }} />

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-2">
        <div className="max-w-3xl mx-auto flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={tool.placeholder}
            className="flex-grow"
          />
          <Button onClick={handleRun} disabled={isLoading}>
            {isLoading ? "Running..." : "Run"}
          </Button>
        </div>
      </div>
    </div>
  );
}
