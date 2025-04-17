import { CodeIcon, CopyIcon, CheckIcon } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const markdownComponents = {
  strong: ({ children }: any) => (
    <span className="font-semibold text-primary">{children}</span>
  ),
  em: ({ children }: any) => (
    <span className="italic text-muted-foreground">{children}</span>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold text-primary mb-4">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-semibold text-primary mb-3">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold text-primary mb-2">{children}</h3>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-blue-500 underline hover:text-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ className, children }: any) => {
    const language = className ? className.replace("language-", "") : "";
    const [copied, setCopied] = useState(false);
    const codeText = String(children).trim();

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    if (language) {
      // Code block
      return (
        <div className="relative bg-background rounded-lg overflow-hidden mb-6 border">
          <div className="flex justify-between items-center p-2 bg-muted border-b">
            <CopyToClipboard text={codeText} onCopy={handleCopy}>
              <button
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition"
                aria-label="Copy code"
              >
                {copied ? (
                  <>
                    <CheckIcon size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <CopyIcon size={16} />
                    Copy
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>

          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: "1rem",
              fontSize: "0.875rem",
              fontFamily: "Fira Code, JetBrains Mono, Menlo, monospace",
            }}
          >
            {codeText}
          </SyntaxHighlighter>
        </div>
      );
    } else {
      // Inline code
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
          {children}
        </code>
      );
    }
  },
  li: ({ children }: any) => (
    <li className="list-disc ml-6 mb-1">{children}</li>
  ),
};
