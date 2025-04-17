// "use client";

// import type React from "react";
// import { use } from "react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import ReactMarkdown from "react-markdown";
// import { ArrowLeftIcon, LoaderIcon } from "@/components/icons";
// import { CodeIcon } from "lucide-react";

// const toolData = {
//   summarize: {
//     title: "Summarize Text",
//     description: "Condense long articles or documents into concise summaries.",
//     placeholder: "Paste the text you want to summarize...",
//   },
//   rephrase: {
//     title: "Rephrase Text",
//     description:
//       "Rewrite content in different styles while preserving meaning.",
//     placeholder: "Paste the text you want to rephrase...",
//   },
//   chat: {
//     title: "Chat Assistant",
//     description: "Have a conversation with an AI assistant to get answers.",
//     placeholder: "Type your question or message...",
//   },
//   ideas: {
//     title: "Idea Generator",
//     description: "Generate creative ideas for projects, content, and more.",
//     placeholder: "Describe what you need ideas for...",
//   },
// };

// const markdownComponents = {
//   strong: ({ children }: any) => (
//     <span className="font-semibold text-primary">{children}</span>
//   ),
//   em: ({ children }: any) => (
//     <span className="italic text-muted-foreground">{children}</span>
//   ),
//   h1: ({ children }: any) => (
//     <h1 className="text-3xl font-bold text-primary mb-4">{children}</h1>
//   ),
//   h2: ({ children }: any) => (
//     <h2 className="text-2xl font-semibold text-primary mb-3">{children}</h2>
//   ),
//   h3: ({ children }: any) => (
//     <h3 className="text-xl font-semibold text-primary mb-2">{children}</h3>
//   ),
//   a: ({ href, children }: any) => (
//     <a
//       href={href}
//       className="text-blue-600 underline hover:text-blue-800"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {children}
//     </a>
//   ),
//   code: ({ children }: any) => (
//     <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
//       {children}
//     </code>
//   ),
//   pre: ({ children }: any) => (
//     <pre className="bg-secondary p-4 rounded overflow-x-auto mb-4">
//       <CodeIcon className="text-muted-foreground mb-2" />
//       {children}
//     </pre>
//   ),
//   li: ({ children }: any) => (
//     <li className="list-disc ml-6 mb-1">{children}</li>
//   ),
// };

// export default function ToolPage({
//   params,
// }: {
//   params: Promise<{ tool: string }>;
// }) {
//   const { tool: toolParam } = use(params);
//   const router = useRouter();
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const tool = toolData[toolParam as keyof typeof toolData];

//   if (!tool) {
//     router.push("/toolbox");
//     return null;
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     setIsLoading(true);
//     setOutput("");

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           tool: toolParam,
//           input,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to generate response");
//       }

//       const data = await response.json();
//       setOutput(data.result);
//     } catch (error) {
//       console.error("Error:", error);
//       setOutput(
//         "An error occurred while processing your request. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="animate-fade-in-down">
//         <Button
//           variant="ghost"
//           className="mb-6"
//           onClick={() => router.push("/toolbox")}
//         >
//           <ArrowLeftIcon className="mr-2 h-4 w-4" />
//           Back to Toolbox
//         </Button>

//         <h1 className="text-3xl font-bold mb-2">{tool.title}</h1>
//         <p className="text-muted-foreground mb-8">{tool.description}</p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <Textarea
//               placeholder={tool.placeholder}
//               className="min-h-[200px]"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//           </div>

//           <Button
//             type="submit"
//             disabled={isLoading || !input.trim()}
//             className="w-full md:w-auto"
//           >
//             {isLoading ? (
//               <>
//                 <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
//                 Processing...
//               </>
//             ) : (
//               "Generate"
//             )}
//           </Button>
//         </form>

//         {(output || isLoading) && (
//           <div className="mt-8 p-6 border rounded-lg bg-card animate-fade-in-up">
//             <h2 className="text-xl font-semibold mb-4">Result</h2>
//             {isLoading ? (
//               <div className="flex justify-center items-center py-12">
//                 <LoaderIcon className="h-8 w-8 animate-spin text-primary" />
//               </div>
//             ) : (
//               <ReactMarkdown
//                 components={{
//                   ...markdownComponents,
//                   p: ({ node, ...props }) => (
//                     <p className="prose prose-neutral max-w-none" {...props} />
//                   ),
//                 }}
//               >
//                 {output}
//               </ReactMarkdown>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

const toolData = {
  summarize: {
    title: "Summarize Text",
    description: "Condense long articles or documents into concise summaries.",
    placeholder: "Paste the text you want to summarize...",
  },
  rephrase: {
    title: "Rephrase Text",
    description:
      "Rewrite content in different styles while preserving meaning.",
    placeholder: "Paste the text you want to rephrase...",
  },
  chat: {
    title: "Chat Assistant",
    description: "Have a conversation with an AI assistant to get answers.",
    placeholder: "Type your question or message...",
  },
  ideas: {
    title: "Idea Generator",
    description: "Generate creative ideas for projects, content, and more.",
    placeholder: "Describe what you need ideas for...",
  },
};

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToolResponse from "@/components/tool-response";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { log } from "console";
import { ArrowLeftIcon } from "@/components/icons";
// import toolData from "@/data/toolData";

export default function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: toolParam } = use(params);
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<{ input: string; output: string }[]>([]);

  const tool = toolData[toolParam as keyof typeof toolData];
  if (!tool) {
    router.push("/toolbox");
    return null;
  }
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  const handleRun = async (e: React.FormEvent) => {
    if (!input.trim()) return;
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tool: toolParam,
          input,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate response");
      }

      const data = await response.json();
      setChats((prev) => [...prev, { input, output: data.result }]);
      setInput("");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Tool Info */}
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

      {/* Chat History */}
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
            <div className="relative bg-slate-900 text-white p-4 s self-start max-w-[80%] shadow-sm border border-slate-700 rounded-md">
              <p className="text-sm text-muted-foreground mb-1 font-medium">
                You
              </p>
              <p className="text-base leading-relaxed whitespace-pre-wrap">
                {chat.input}
              </p>
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-slate-800 border-b-8 border-b-transparent"></div>
            </div>
            <div className="bg-secondary/80 text-primary p-3 rounded-lg self-end max-w-[80%]">
              <ToolResponse content={chat.output} />
            </div>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div style={{ height: "120px" }} />

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-2">
        <div className="max-w-3xl mx-auto flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your input..."
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
